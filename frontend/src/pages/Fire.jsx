import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Fire() {
  const threeContainerRef = useRef(null);
    const sceneRef = useRef();
    const cameraRef = useRef();
    const rendererRef = useRef();
    const mousePosRef = useRef({x: 0, y: 0, inside: false});


    useEffect(() => {
    function handleMouseMove(e) {
        const rect = threeContainerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        const dist = Math.sqrt(x * x + y * y);

        let mouseWorld3D = null;
        if (cameraRef.current) {
            const mouseNDC = new THREE.Vector2(x, y);
            const yPlane = 0.82; // Choose the y-level at which you want the 3D point

            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouseNDC, cameraRef.current);
            const from = raycaster.ray.origin;
            const to = raycaster.ray.direction;
            const t = (yPlane - from.y) / to.y; // solves for intersection with the plane y=yPlane
            
            mouseWorld3D = from.clone().add(to.clone().multiplyScalar(t));
        }

        mousePosRef.current = {
            x,
            y,
            inside: dist < 0.4,
            world3D: mouseWorld3D

        };
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    

  useEffect(() => {

    const scene = new THREE.Scene()
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 2, 4)
    //camera.lookAt(3, 2, 0);
    
     const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    if (threeContainerRef.current && !threeContainerRef.current.contains(renderer.domElement)) {
        threeContainerRef.current.appendChild(renderer.domElement);
    }
    
    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient)

    const rockGeometry = new THREE.SphereGeometry(1, 48, 32)
    rockGeometry.applyMatrix4(new THREE.Matrix4().makeScale(1, 0.6, 0.8))
    const speckleTexture = new THREE.TextureLoader().load('/assets/speckle.jpg') // Use a speckle image!
    const rockMaterial = new THREE.MeshStandardMaterial({
      color: 0x8a8a8a,
      roughness: 0.7,
      map: speckleTexture
    })
    const rock = new THREE.Mesh(rockGeometry, rockMaterial)
    rock.scale.set(0.3, 0.3, 0.3)
    rock.position.set(0, 0.4, 0)
    rock.position.z -= 0.3;
    scene.add(rock)

    // Controls
    //const controls = new OrbitControls(camera, renderer.domElement);
    //controls.enableDamping = true;
    //controls.dampingFactor = 0.08;
    //controls.target.set(0, 0, 0);
    //controls.update();

    // Particle system state
    const particleCount = 600
    const particleArray = []
    const particleGeometry = new THREE.SphereGeometry(0.008, 10, 10)
    const baseColor = 0xfcfcf7 

    const glowGeometry = new THREE.BufferGeometry();
    const glowPositions = new Float32Array(particleCount * 3); // (x, y, z) for all particles
    glowGeometry.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
    function createGlowMaterial() {

        return new THREE.ShaderMaterial({
        uniforms: {
            colorA: { value: new THREE.Color(0xfccd86) }, // start (orange)
            colorB: { value: new THREE.Color(0xfaad39) }, // mid (pink)
            colorC: { value: new THREE.Color(0x1e51fa) }, // end (bluish)
            uOpacity:  { value: 0.3 }, // Tweak as needed
            uLife: { value: 0.0 }
            },
        vertexShader: `
            varying vec2 vUv;
            void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
uniform vec3 colorA;      // orange
uniform vec3 colorB;      // pink
uniform vec3 colorC;      // blue (for vertical/lifetime)
uniform float uLife;
uniform float uOpacity;
varying vec2 vUv;

void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center) / 0.5;

    // Original vertical/lifetime blend
    vec3 c;
    if(uLife < 0.1) {
      c = mix(colorA, colorB, uLife / 0.5);
    } else {
      c = mix(colorB, colorC, (uLife - 0.1) / 0.5);
    }

    // Blend toward blue at the rim (dist ~1.0)
    c = mix(c, colorC, smoothstep(0.6, 1.0, dist));

    float alpha = smoothstep(1.0, 0.4, dist);
    if(dist > 1.0) discard;
    gl_FragColor = vec4(c, alpha * uOpacity);
}


        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending 
        });
    }


    function spawnParticle(branchParams = null) {

        const mat = new THREE.MeshStandardMaterial({ 
            color: baseColor, 
            transparent: true, 
            opacity: 0.83, 
            emissive: baseColor,
            roughness: 0.5
        })
        const mesh = new THREE.Mesh(particleGeometry, mat)

        mesh.position.set(
            (Math.random() - 0.5) * 0.05, 
            0.82, 
            0, 
        )
        scene.add(mesh)

        const glowMesh = new THREE.Mesh(new THREE.CircleGeometry(0.5, 32), createGlowMaterial());
        glowMesh.position.copy(mesh.position);
        glowMesh.position.z -= 0.008;
        scene.add(glowMesh);

        let waveAmp = 0.01, zWaveAmp = 0.008;
        let waveFreq = 4, zWaveFreq = 3;
        let motionTimeScale = 1.0;

        return {
            mesh,
            glowMesh,
            life: 0,
            maxLife: 80 + Math.random() * 25, // frames
            xWaveSeed: Math.random() * Math.PI * 20,
            zWaveSeed: Math.random() * Math.PI * 2,
            flickerSeed: Math.random() * 1000,
            flickerAmp: 0.012 + Math.random() * 0.03,
            branchParams,
            waveAmp, zWaveAmp, waveFreq, zWaveFreq, motionTimeScale
        }
    }
    
    const onPointerMove = (e) => {
        if (!renderer.domElement) return;
        const rect = renderer.domElement.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        
        mousePosRef.current.x = x;
        mousePosRef.current.y = y;
    }
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    

    function animateParticles() {
        const mouseInside = mousePosRef.current.inside;

        const globalTime = performance.now() * 0.003;
        const globalAmplitude = 0.005;

        const mouseOffset = mouseInside ? -mousePosRef.current.x * 0.20 : 0;
        const globalSine = Math.sin(globalTime * 0.55) * globalAmplitude; //+ mouseOffset;
        const globalCosine = Math.cos(globalTime * 0.35) * (globalAmplitude * 0.7);

        const mouseWorldPos = mousePosRef.current.world3D;
      
      for (let i = particleArray.length - 1; i >= 0; i--) {
        const p = particleArray[i]
        const t = p.life / p.maxLife
        p.glowMesh.material.uniforms.uLife.value = t;



       // Move up
        p.mesh.position.y += 0.018 + Math.random() * 0.012 * 3;
        // Taper X/Z
        const spread = 1 - t * 0.04; 
        p.mesh.position.x *= spread;
        p.mesh.position.z *= spread;
        p.mesh.position.x += Math.sin(p.xWaveSeed + t * Math.PI * 4) * 0.03;
        p.mesh.position.z += Math.sin(p.zWaveSeed + t * Math.PI * 3) * 0.008;
        p.mesh.position.z += globalCosine;

        const fadeStrength = 1.8;
        p.mesh.material.opacity = 0.8 * Math.pow(1 - t, fadeStrength);
        p.mesh.scale.setScalar(1 - t * 0.72);
        p.life++;

// proportion of flame interaction
        if (t >= 1 / 10) {
            const upperStrength = (t - 1 / 10) / (9 / 10); 
            p.mesh.position.x += mouseOffset * upperStrength;
        }
        const ndc = p.mesh.position.clone().project(camera); 
        const dx = ndc.x - mousePosRef.current.x;
        const dy = ndc.y - mousePosRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 0.2) {
            p.mesh.material.opacity = 0;
            p.life = p.maxLife;
        }


        if (p.mesh.material.opacity <= 0 || p.life > p.maxLife) {
            scene.remove(p.mesh)
            if (p.glowMesh) scene.remove(p.glowMesh);
            particleArray.splice(i, 1)
        }  
        if (p.glowMesh) {
            p.glowMesh.position.copy(p.mesh.position);
            p.glowMesh.position.z -= 0.01; 
            if (p.mesh.material.opacity < 0.2) {
                p.glowMesh.scale.setScalar(0.6);
                p.glowMesh.material.uniforms.uOpacity.value = p.mesh.material.opacity / 35;
            }
            else {
                //p.glowMesh.scale.setScalar(0.005);
                p.glowMesh.material.uniforms.uOpacity.value = p.mesh.material.opacity / 25;
            }
            

        } 
        
      }
  



      const particlesToSpawn = 6; 
        for (let j = 0; j < particlesToSpawn && particleArray.length < particleCount; j++) {
            particleArray.push(spawnParticle());
        }
    }

    let animateId
    function animate() {
      //controls.update()
      animateParticles()
      renderer.render(scene, camera)
      animateId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (threeContainerRef.current) {
          threeContainerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
    };
  }, []);


  return (
    <div ref={threeContainerRef} style={{ width: '100vw', height: '100vh' }} />
  )
}