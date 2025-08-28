import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import mountain from '/src/assets/black.jpg';

export default function Home() {
  const threeContainerRef = useRef(null);

  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const grassMeshRef = useRef();
  const animationIdRef = useRef();
  const lastBladeHoverRef = useRef(null);
  const movingLightsRef = useRef([]);
  const lastLightSpawnRef = useRef(Date.now());

  const fireflyParticles = [];
  const maxFireflies = 80;
  const fireflyGeometry = new THREE.SphereGeometry(0.06, 8, 8);
  const fireflyMaterial = new THREE.MeshBasicMaterial({ color: 0xfff95a, transparent: true, opacity: 0.85 });
  let lastSpawnPositions = [];

  const movingLights = []; 

  useEffect(() => {

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const fieldSizeX = 40;
    const fieldSizeZ = 40;
 
    const loader = new THREE.TextureLoader();
    loader.load(mountain, (texture) => {
      const bgWidth = fieldSizeX * 3;
      const bgHeight = fieldSizeX * (window.innerHeight / window.innerWidth) * 3;
      const bgGeometry = new THREE.PlaneGeometry(bgWidth, bgHeight);
      const bgMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide, 
        opacity: 1,
        transparent: true,
        color: 0x728c9e
      });
      const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
      
      bgMesh.position.set(0, bgHeight / 2 - bladeHeight * 18, -fieldSizeZ/2 - 2);

      scene.add(bgMesh);
    });

    const camera = new THREE.PerspectiveCamera(
      60, window.innerWidth / window.innerHeight, 0.1, 100
    );
    camera.position.set(0, 1.5, 23);
    //camera.lookAt(0, 6, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    if (threeContainerRef.current && !threeContainerRef.current.contains(renderer.domElement)) {
      threeContainerRef.current.appendChild(renderer.domElement);
    }

    // Lighting
    const sun = new THREE.DirectionalLight(0xfff7b2, 1.2);
    sun.position.copy(camera.position);
    sun.target.position.set(0, 0, 0);
    scene.add(sun);
    scene.add(sun.target);

    const bladeHeight = 0.7;
    const bladeRadius = 0.05;
    const radialSegments = 12;
    const heightSegments = 20;

    const geometry = new THREE.CylinderGeometry(
      bladeRadius, bladeRadius, bladeHeight, radialSegments, heightSegments, false
    );
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > bladeHeight / 2 - bladeRadius * 2) {
        const factor = (y - (bladeHeight / 2 - bladeRadius * 2)) / (bladeRadius * 2);
        pos.setY(i, y + bladeRadius * 0.5 * Math.sin(Math.PI * factor));
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const r = Math.sqrt(x * x + z * z);
        if (r > 0) {
          const shrink = 1.0 - 0.5 * factor;
          pos.setX(i, x * shrink);
          pos.setZ(i, z * shrink);
        }
      }
    }
    geometry.computeVertexNormals();

    /*const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.target.set(0, 0, 0);
    controls.update();*/

    const MAX_LIGHT_BANDS = 2;

    const grassMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouseOver: { value: 0 },
        mouseX: { value: 0 },
        mouseY: { value: 0 }, 
        lightBands: { value: Array.from({ length: MAX_LIGHT_BANDS }, () => new THREE.Vector4(0, 0, 0, 0)) },
        lightBandsCount: { value: 0 }
      },
      vertexShader: `
        uniform float time;
        uniform float mouseOver;
        uniform float mouseX;
        uniform float mouseY;
        attribute float swayPhase;
        attribute float swayAmp;
        varying float vY;
        varying float vMouseStrength;
        varying float vWorldZ;
        varying float vWorldX;
        uniform int lightBandsCount;
        uniform vec4 lightBands[${MAX_LIGHT_BANDS}];
        void main() {
          float bladeHeight = 1.2;
          float yNorm = (position.y + bladeHeight / 2.0) / bladeHeight;
          float taper = pow(smoothstep(0.0, 1.0, yNorm), 1.5);

          float baseWave = sin(time * 2.0 + swayPhase + 0.9) * 0.28;
          float gust = sin(0.5 * position.x + 0.35 * position.z + time * 0.9
            + 2.0 * sin(time * 0.25 + swayPhase*4.0))
            * (0.15 + 0.26 * smoothstep(0.0, 1.0, fract(time*0.08 + swayPhase)));
          float wiggle = sin(time * 8.0 + swayPhase * 16.2) * 0.015;

          float idle = (baseWave + gust + wiggle) * taper * swayAmp;

          float fallback = 0.2;
          float mouseStrength = 0.0;
          float interaction = fallback;
          if (mouseOver > 0.5) {
            vec4 worldPos = modelMatrix * vec4(0.0, bladeHeight / 2.0, 0.0, 1.0);
            vec4 screenPos = projectionMatrix * viewMatrix * worldPos;
            vec2 normScreen = screenPos.xy / screenPos.w * 0.5 + 0.5;
            mouseStrength = 1.0 - clamp(distance(normScreen, vec2(mouseX * 0.5 + 0.5, mouseY * 0.5 + 0.5)) / 0.12, 0.0, 1.0);
            interaction = mix(fallback, mouseStrength, smoothstep(0.0, 1.0, mouseStrength));
          }

          float sway = idle * interaction;
          vec3 pos = position;
          pos.x += sway;

          vY = yNorm;
          vMouseStrength = mouseStrength;
          
          vec4 worldPosBeforeSway = modelMatrix * vec4(pos, 1.0);
          float extraSway = 0.0;
          for (int i = 0; i < ${MAX_LIGHT_BANDS}; i++) {
            if (i >= lightBandsCount) break;
            float bandC = lightBands[i].x;
            float bandW = lightBands[i].y;
            float bandStr = lightBands[i].z;
            float d = abs(worldPosBeforeSway.x - worldPosBeforeSway.z - bandC) / 1.41421356;
            if (d < bandW * 0.5) {
              float local = 1.0 - d / (bandW * 0.5);
              // Modulate amplitude for a visually clear, smooth effect:
              extraSway += local * bandStr * 0.45; // Try 0.45 or higher for more motion
            }
          }
          // Sway both x, z in the (1, 1) direction
          pos.x += extraSway / 1.41421356;
          pos.z -= extraSway / 1.41421356;

          vec4 worldPosZ = modelMatrix * vec4(pos, 1.0);
          vWorldZ = worldPosZ.z;
          vWorldX = worldPosZ.x;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying float vY;
        varying float vMouseStrength;
        varying float vWorldZ;
        varying float vWorldX;
        uniform int lightBandsCount;
        uniform vec4 lightBands[${MAX_LIGHT_BANDS}];
        void main() {
          vec3 rootColor = vec3(0.07, 0.22, 0.07);
          vec3 midColor = vec3(0.22, 0.55, 0.16);
          vec3 tipColor = vec3(0.45, 1.0, 0.25);
          vec3 baseColor = mix(rootColor, midColor, smoothstep(0.0, 0.6, vY));
          baseColor = mix(baseColor, tipColor, smoothstep(0.6, 1.0, vY));
          float glow = smoothstep(0.85, 1.0, vY) * 0.25;
          vec3 grassColor = baseColor + vec3(glow);
          float highlightStrength = smoothstep(0.2, 0.9, vMouseStrength) * 1.0;
          vec3 brightGreen = vec3(0.7, 1.0, 0.4);
          float zMin = -20.0;
          float zMax = 20.0;
          float zNorm = clamp((vWorldZ - zMin) / (zMax - zMin), 0.0, 1.0);

          //take away backside light
          float lightFactor = mix(1.7, 0.08, zNorm);
          vec3 litGrass = grassColor * lightFactor;
          float specular = pow(1.0 - zNorm, 8.0) * 0.18;
          litGrass += vec3(specular, specular * 0.9, specular * 0.5);
          litGrass = clamp(litGrass, vec3(0.0), vec3(1.0));
          vec3 color = mix(litGrass, brightGreen, highlightStrength);

          //vec3 color = mix(grassColor, brightGreen, highlightStrength);

          // Diagonal band logic:
          float lightBoost = 0.0;
          float extraSway = 0.0;
          for (int i = 0; i < ${MAX_LIGHT_BANDS}; i++) {
            if (i >= lightBandsCount) break;
            float bandC = lightBands[i].x;    // current x+z diagonal center
            float bandW = lightBands[i].y;    // band width
            float bandStr = lightBands[i].z;  // strength
            // Distance from this fragment to the band's diagonal (X+Z=c)
            float d = abs(vWorldX - vWorldZ - bandC) / 1.41421356; // sqrt(2.0)
            if (d < bandW * 0.5) {
              float local = 1.0 - d / (bandW * 0.5);
              lightBoost += local * bandStr;
              
            } 
          }
          color = mix(color, brightGreen, clamp(lightBoost, 0.0, 1.0));


          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide,
      transparent: false,
    });

    const bladeMesh = new THREE.Mesh(geometry, grassMaterial);
    bladeMesh.position.set(0, bladeHeight / 2, 0);
    scene.add(bladeMesh);

    const numBlades = 11000;
    const bladeMeshes = [];
    for (let i = 0; i < numBlades; i++) {
      const x = (Math.random() - 0.5) * fieldSizeX;
      const z = (Math.random() - 0.5) * fieldSizeX;
      const height = bladeHeight * (0.8 + Math.random() * 0.6);
      const geometry = new THREE.CylinderGeometry(
        bladeRadius, bladeRadius, height, radialSegments, heightSegments, false
      );
      const pos = geometry.attributes.position;
      for (let j = 0; j < pos.count; j++) {
        const y = pos.getY(j);
        if (y > height / 2 - bladeRadius * 2) {
          const factor = (y - (height / 2 - bladeRadius * 2)) / (bladeRadius * 2);
          pos.setY(j, y + bladeRadius * 0.5 * Math.sin(Math.PI * factor));
          const px = pos.getX(j);
          const pz = pos.getZ(j);
          const r = Math.sqrt(px * px + pz * pz);
          if (r > 0) {
            const shrink = 1.0 - 0.5 * factor;
            pos.setX(j, px * shrink);
            pos.setZ(j, pz * shrink);
          }
        }
      }
      geometry.computeVertexNormals();

      const swayPhase = 0.0;
      const swayAmp = 1.0;
      const phaseArray = new Float32Array(geometry.attributes.position.count).fill(swayPhase);
      const ampArray = new Float32Array(geometry.attributes.position.count).fill(swayAmp);
      geometry.setAttribute('swayPhase', new THREE.BufferAttribute(phaseArray, 1));
      geometry.setAttribute('swayAmp', new THREE.BufferAttribute(ampArray, 1));
      const mesh = new THREE.Mesh(geometry, grassMaterial);
      mesh.position.set(x, height / 2, z);
      scene.add(mesh);
      bladeMeshes.push(mesh);
    }
    grassMeshRef.current = bladeMeshes[0];


    const groundGeometry = new THREE.PlaneGeometry(fieldSizeX, fieldSizeZ);
    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x033611, side: THREE.DoubleSide });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.set(0, 0, 0);
    scene.add(groundMesh);


    const raycaster = new THREE.Raycaster();
    let mouseOver = false;
    const onPointerMove = (e) => {
      if (!renderer.domElement) return;
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      

      const mouse = new THREE.Vector2(x, y);
      raycaster.setFromCamera(mouse, camera);
      let found = false;
      let spawnPositions = [];
      for (const mesh of bladeMeshes) {
        const intersects = raycaster.intersectObject(mesh);
        if (intersects.length > 0) {
          found = true;
          if (Math.random() < 0.2) {
            const tip = mesh.position.clone();
            tip.y += mesh.geometry.parameters.height / 2;
            tip.x += Math.random() * 1.6 - 1; 
            tip.z += Math.random() * 0.6 - 0.3; 
            
            spawnPositions.push(tip);
          }
        }
      }
      if (found) {
        lastBladeHoverRef.current = Date.now(); 
      }
      mouseOver = found;
      grassMaterial.uniforms.mouseOver.value = mouseOver ? 1.0 : 0.0;
      grassMaterial.uniforms.mouseX.value = x;
      grassMaterial.uniforms.mouseY.value = y;
      if (spawnPositions.length > 0) {
        lastSpawnPositions = spawnPositions.slice(0, 8);
      }
      spawnPositions.forEach(pos => {
        if (fireflyParticles.length < maxFireflies) {
          const mesh = new THREE.Mesh(fireflyGeometry, fireflyMaterial.clone());
          mesh.position.copy(pos);
          mesh.material.opacity = 1.0;
          mesh.userData = { age: 0 };
          scene.add(mesh);
          fireflyParticles.push(mesh);
        }
      });
    };
    renderer.domElement.addEventListener('pointermove', onPointerMove);




    // Animation loop
    function animate() {
      animationIdRef.current = requestAnimationFrame(animate);
      grassMaterial.uniforms.time.value = performance.now() * 0.001;

      const now = Date.now();
      const diagonalMax = fieldSizeX / 2 + fieldSizeZ / 2; // max (x+z) in field
      const diagonalMin = -fieldSizeX / 2 - fieldSizeZ / 2; // min (x+z)
      const bandWidth = Math.random() * 2.5 + 1; // Can tune this width
      const cOffset = (Math.random() - 0.5) * 8;

      if (
        now - lastLightSpawnRef.current >
        Math.random() * 2000 + 12000 && movingLightsRef.current.length + 1 <= MAX_LIGHT_BANDS// 1.5Ã¢â‚¬â€œ3.5s interval
      ) {
        movingLightsRef.current.push({
          c: diagonalMax + bandWidth + cOffset,
          width: bandWidth,
          speed: Math.random() * 0.05 + 0.3, 
          strength: Math.random() * 0.2 + 0.1 
        });
        if (movingLightsRef.current.x > fieldSizeX / 2 + 4 + fieldSizeX * Math.random()) {
          movingLightsRef.current.shift();
        }
        lastLightSpawnRef.current = now;
      }
      // Update position of all bands
      for (let band of movingLightsRef.current) {
        band.c -= band.speed;

      }
      while (
        movingLightsRef.current.length > 0 &&
        movingLightsRef.current[0].c < diagonalMin - bandWidth
      ) {
        movingLightsRef.current.shift();
      }


      // Remove bands that left the left edge
//      while (
//        movingLightsRef.current.length > 0 &&
//  movingLightsRef.current[0].x < -fieldSizeX / 2 - 1 &&
//  movingLightsRef.current[0].z < -fieldSizeZ / 2 - 1
//      ) {
//        movingLightsRef.current.shift();
//      }
      // Pass data to shader uniforms
      

     // Pass active bands to shader
      for (let k = 0; k < MAX_LIGHT_BANDS; k++) {
        if (movingLightsRef.current[k]) {
          const b = movingLightsRef.current[k];
          grassMaterial.uniforms.lightBands.value[k].set(b.c, b.width, b.strength, 0);
        } else {
          grassMaterial.uniforms.lightBands.value[k].set(0, 0, 0, 0);
        }
      }
      grassMaterial.uniforms.lightBandsCount.value = movingLightsRef.current.length;

      // Animate fireflies: rise and fade
      for (let i = fireflyParticles.length - 1; i >= 0; i--) {
        const p = fireflyParticles[i];
        p.position.y += 0.03 + Math.random() * 0.01;
        p.material.opacity *= 0.97;
        p.userData.age += 1;
        if (p.material.opacity < 0.05 || p.userData.age > 80) {
          scene.remove(p);
          fireflyParticles.splice(i, 1);
        }
      }

      const canSpawnFireflies = lastBladeHoverRef.current > 0 && now - lastBladeHoverRef.current < 2000;

      // Continuously spawn fireflies at last interactive area
      if (canSpawnFireflies && lastSpawnPositions.length > 0 && fireflyParticles.length < maxFireflies) {
        if (Math.random() < 0.18) {
          const idx = Math.floor(Math.random() * lastSpawnPositions.length);
          const pos = lastSpawnPositions[idx];
          if (fireflyParticles.length < maxFireflies) {
            const mesh = new THREE.Mesh(fireflyGeometry, fireflyMaterial.clone());
            mesh.position.copy(pos);
            mesh.material.opacity = 1.0;
            mesh.userData = { age: 0 };
            scene.add(mesh);
            fireflyParticles.push(mesh);
          }
        }
      }

      //controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      if (!rendererRef.current || !cameraRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    // Cleanup
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
      grassMeshRef.current = null;
    };
  }, []);

  return (
    <div ref={threeContainerRef} style={{ width: '100vw', height: '100vh' }} />
  );
}