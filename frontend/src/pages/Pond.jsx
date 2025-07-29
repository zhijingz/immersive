import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Water } from '/src/objects/Water';
import { Ground } from '/src/objects/Ground';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AnimationMixer } from 'three';

function Pond() {
  const threeContainerRef = useRef(null);

  useEffect(() => {
    // === Scene Setup ===
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (
      threeContainerRef.current &&
      !threeContainerRef.current.contains(renderer.domElement)
    ) {
      threeContainerRef.current.appendChild(renderer.domElement);
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 2, 0);
    camera.lookAt(0, 0, 0);

    //const controls = new OrbitControls(camera, renderer.domElement);
    //controls.enableDamping = true;

    const clock = new THREE.Clock();

    // Environment setup
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader.setPath('/threejs-water-shader/');
    const environmentMap = cubeTextureLoader.load([
      'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'
    ]);
    const poolTexture = new THREE.TextureLoader().load('/threejs-water-shader/ocean_floor.png');
    scene.background = environmentMap;
    scene.environment = environmentMap;

    const waterResolution = { size: 512 };
    const water = new Water({ environmentMap, resolution: waterResolution.size });
    scene.add(water);
    const ground = new Ground({ texture: poolTexture });
    scene.add(ground);

    water.material.uniforms.uWavesAmplitude.value = 0.06;
    water.material.uniforms.uWavesFrequency.value = 0.04;
    water.material.uniforms.uWavesIterations.value = 1;
    water.material.uniforms.uWavesSpeed.value = 0.1;
    water.material.uniforms.uTroughColor.value = new THREE.Color(0x0d52bf);
    water.material.uniforms.uSurfaceColor.value = new THREE.Color(0x25faf6);
    water.material.uniforms.uPeakColor.value = new THREE.Color(0xe5ff70);
    water.material.uniforms.uOpacity.value = 0.6;
    water.material.uniforms.uFresnelPower.value = 0.3;
    water.material.uniforms.uFresnelScale.value = 0.9;
    water.material.uniforms.uTroughTransition.value = 0.4;
    ground.material.uniforms.uCausticsColor.value = new THREE.Color(0xffe570);
    ground.material.uniforms.uCausticsScale.value = 6;
    ground.material.uniforms.uCausticsSpeed.value = 0.2;

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    // === FISH GROUP SETUP (with square bounds and ignore-mouse logic) ===
    const NUM_FISH = 40;
    const DOTS_PER_FISH = 5;
    const segmentLength = 0.08;
    const FISH_SCALE = 0.14;
    const FISH_ABOVE_WATER = 0.2;

    const halfWidth = 1.8;  // plane width/2
    const halfDepth = 0.9;  // plane depth/2

    // Mouse projection on pond (XZ)
    let mouseXZ = new THREE.Vector2(0, 0);
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      const ndc = new THREE.Vector3(x, y, 0.5);
      ndc.unproject(camera);
      const dir = ndc.clone().sub(camera.position).normalize();
      if (Math.abs(dir.y) > 1e-4) {
        const t = (FISH_ABOVE_WATER - camera.position.y) / dir.y;
        mouseXZ.set(
          camera.position.x + dir.x * t,
          camera.position.z + dir.z * t
        );
      }
    });

    // Fish array
    const fishArray = [];
    for (let f = 0; f < NUM_FISH; f++) {
      const fishGroup = new THREE.Group();
      // Scatter start positions, within square
      let angle = Math.random() * Math.PI * 2;
      let radius = 0.75 + Math.random() * 0.3;
      let scatterAmount = 0.2;
      const extraScatterX = (Math.random() - 0.5) * scatterAmount;
      const extraScatterZ = (Math.random() - 0.5) * scatterAmount;
      const baseAngle = Math.random() * Math.PI * 2;
      const baseRadius = 0.7 + Math.random() * 0.8;
      const fishSpeed = (0.023 + Math.random() * 0.05) / 10;

      // Clamp initial positions to be inside pond bounds
      let initX = Math.max(-halfWidth, Math.min(halfWidth, Math.cos(baseAngle) * baseRadius + extraScatterX));
      let initZ = Math.max(-halfDepth, Math.min(halfDepth, Math.sin(baseAngle) * baseRadius + extraScatterZ));
      fishGroup.position.set(initX, FISH_ABOVE_WATER, initZ);
      fishGroup.scale.set(FISH_SCALE, FISH_SCALE, FISH_SCALE);

      fishArray.push({
        group: fishGroup,
        velocity: new THREE.Vector2(
          Math.cos(baseAngle) * 0.02,
          Math.sin(baseAngle) * 0.02
        ),
        speed: fishSpeed,
        scatterBias: new THREE.Vector2(extraScatterX, extraScatterZ),
        repulse: new THREE.Vector2(0, 0),
        ignoreMouse: false,
        randVec: new THREE.Vector2((Math.random()-0.5)*0.013, (Math.random()-0.5)*0.013), // persistent random wander
        circleAngle: Math.random() * Math.PI * 2,
        orbitDirection: Math.random() < 0.5 ? 1 : -1,
        orbitRadius: 0.35 + Math.random() * 0.85 ,

      });

      for (let i = 0; i < DOTS_PER_FISH; i++) {
        const t = i / (DOTS_PER_FISH - 1);
        const size = 0.08 * (1 - 0.68 * t);
        const opacity = 0.93 * (1 - 0.75 * t);
        const mat = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.01, 1, 0.35),
          transparent: true,
          opacity: opacity,
          depthWrite: false,
        });
        const geom = new THREE.SphereGeometry(size, 14, 8);
        const dot = new THREE.Mesh(geom, mat);
        dot.position.set(0, 0, 0);
        fishGroup.add(dot);
      }
      scene.add(fishGroup);
    }

    let mouseIsOutOfBounds = false;
    let mouseOutTimer = 0;
    const MAX_OUT_TIME = 3.0;

    function getFishDirectionXZ(fish) {
      const toMouse = new THREE.Vector2(
        mouseXZ.x - fish.group.position.x + fish.scatterBias.x * 0.13,
        mouseXZ.y - fish.group.position.z + fish.scatterBias.y * 0.13
      );
      if (toMouse.lengthSq() > 0.000001) return toMouse.clone().normalize();
      return new THREE.Vector2(1, 0);
    }

    function animateFishSchool(elapsedTime, deltaTime) {
      // Mouse out-of-bounds logic
      if (
        mouseXZ.x < -halfWidth || mouseXZ.x > halfWidth ||
        mouseXZ.z < -halfDepth || mouseXZ.z > halfDepth
      ) {
        mouseIsOutOfBounds = true;
        mouseOutTimer += deltaTime;
      } else {
        mouseIsOutOfBounds = false;
        mouseOutTimer = 0;
      }
      const shouldIgnoreMouse = mouseOutTimer > MAX_OUT_TIME;

      // Repulsion
      const MIN_DIST = 0.07;
      for (let i = 0; i < fishArray.length; i++) {
        const fishA = fishArray[i];
        fishA.repulse.set(0, 0);
        for (let j = 0; j < fishArray.length; j++) {
          if (i === j) continue;
          const fishB = fishArray[j];
          const dx = fishA.group.position.x - fishB.group.position.x;
          const dz = fishA.group.position.z - fishB.group.position.z;
          const distSq = dx * dx + dz * dz;
          if (distSq < MIN_DIST * MIN_DIST && distSq > 0.00001) {
            const dist = Math.sqrt(distSq);
            const strength = 0.035 * (1 - dist / MIN_DIST);
            fishA.repulse.x += (dx / dist) * strength;
            fishA.repulse.y += (dz / dist) * strength;
          }
        }
      }

      // Movement and orientation
      for (let f = 0; f < fishArray.length; f++) {
        const fish = fishArray[f];
        fish.ignoreMouse = shouldIgnoreMouse;


        let desiredVel;
        if (fish.ignoreMouse) {
            const radius = fish.orbitRadius;
            
              fish.circleAngle += deltaTime * 0.32 * fish.orbitDirection;

 
            // Compute target circle position
            const circleX = Math.cos(fish.circleAngle) * radius;
            const circleZ = Math.sin(fish.circleAngle) * radius;

            // Steer gently toward the orbit point with some "chase" fudge
            const toOrbit = new THREE.Vector2(
                circleX - fish.group.position.x,
                circleZ - fish.group.position.z
            );

            desiredVel = toOrbit.normalize().multiplyScalar(fish.speed * 0.6);

        } else {
          // Follow mouse as usual
          const toMouse = new THREE.Vector2(
            mouseXZ.x - fish.group.position.x + fish.scatterBias.x * 0.13,
            mouseXZ.y - fish.group.position.z + fish.scatterBias.y * 0.13
          );
          const dist = toMouse.length();
          desiredVel = toMouse.length() > 0.001
            ? toMouse.clone().normalize().multiplyScalar(fish.speed * Math.min(dist, 1.3) * 1.7)
            : new THREE.Vector2(0, 0);
        }
        desiredVel.add(fish.repulse);

        fish.velocity.lerp(desiredVel, 0.08);
        if (fish.velocity.length() > fish.speed) fish.velocity.setLength(fish.speed);

        fish.group.position.x += fish.velocity.x;
        fish.group.position.z += fish.velocity.y;

        // Clamp within square bounds and bounce off edges
        if (fish.group.position.x < -halfWidth) {
          fish.group.position.x = -halfWidth;
          fish.velocity.x *= -0.67;
        }
        if (fish.group.position.x > halfWidth) {
          fish.group.position.x = halfWidth;
          fish.velocity.x *= -0.67;
        }
        if (fish.group.position.z < -halfDepth) {
          fish.group.position.z = -halfDepth;
          fish.velocity.y *= -0.67;
        }
        if (fish.group.position.z > halfDepth) {
          fish.group.position.z = halfDepth;
          fish.velocity.y *= -0.67;
        }

        // Head-first orientation along movement
        const bodyDirection = fish.velocity.length() > 0.001 ? fish.velocity.clone().normalize() : getFishDirectionXZ(fish);
        const dir3 = new THREE.Vector3(bodyDirection.x, 0, bodyDirection.y);
        const headWorld = fish.group.position.clone();
        const tailWorld = headWorld.clone().add(dir3.clone().negate().multiplyScalar(segmentLength * (DOTS_PER_FISH-1)));
        fish.group.position.y = FISH_ABOVE_WATER;
        fish.group.lookAt(tailWorld.x, FISH_ABOVE_WATER, tailWorld.z);
        fish.group.rotateY(Math.PI / 2);

        // Body shape: straight with tail wiggle
        for (let i = 0; i < DOTS_PER_FISH; i++) {
          const t = i / (DOTS_PER_FISH - 1);
          const baseOffset = -i * segmentLength;
          const tailStrength = 1 - Math.pow(1 - t, 3) / 2;
          const tailPhase = elapsedTime * 7.0 - t * 2.4 + f * 0.25;
          const wiggle = Math.sin(tailPhase) * 0.17 * tailStrength;
          fish.group.children[i].position.set(baseOffset, 0, wiggle);
        }
      }
    }
    // === Koi Model Loading ===
    let koiMixer = null;
    let koiModel = null;

    const loader = new GLTFLoader();
    loader.load(
    '/assets/koi.glb', // Adapt the path to your setup
    (gltf) => {
        koiModel = gltf.scene;
        // SCALE, POSITION, AND ORIENT THE MODEL
        koiModel.position.set(0, 0, -5); // Just above the ground, under water
        koiModel.scale.set(0.09, 0.09, 0.09); // Adjust as necessary
        koiModel.rotation.y = Math.PI / 2; // Face the pond center
        scene.add(koiModel);
        console.log('Koi model loaded:', koiModel);

        // Setup animation (if there's animation in the glb)
        if (gltf.animations && gltf.animations.length > 0) {
            console.log('Koi model animations found:', gltf.animations);
            koiMixer = new AnimationMixer(koiModel);
            gltf.animations.forEach((clip) => {
            koiMixer.clipAction(clip).play();
        });
        }
    },
    undefined,
    (error) => {
        console.error('Error loading cosmic_koi.glb:', error);
    }
    );
let koiAngle = 0; // Current angle in radians
const KOI_CIRCLE_RADIUS = 0.6;
const KOI_BASE_Y = 0.10; // Vertical position (adjust as needed)
const KOI_SPEED = -0.1;  // Lower = slower (try 0.07 ~ 0.12 for gentle pace)

function updateKoiCircle(deltaTime) {
  if (!koiModel) return;
  koiAngle -= deltaTime * KOI_SPEED; // Negative for clockwise
  koiModel.position.x = Math.cos(koiAngle) * KOI_CIRCLE_RADIUS;
  koiModel.position.z = Math.sin(koiAngle) * KOI_CIRCLE_RADIUS;
  koiModel.position.y = KOI_BASE_Y;
  // Orient so koi faces along its path (tangent)
koiModel.lookAt(
  Math.cos(koiAngle - Math.PI / 2) * KOI_CIRCLE_RADIUS,
  KOI_BASE_Y,
  Math.sin(koiAngle - Math.PI / 2) * KOI_CIRCLE_RADIUS
);
}


    function animate() {
        const deltaTime = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();
      
      animateFishSchool(elapsedTime, deltaTime);

      if (koiMixer) {
    koiMixer.update(deltaTime);
  }
if (koiModel) {
  updateKoiCircle(deltaTime);
}


      water.update(elapsedTime);
      ground.update(elapsedTime);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      //controls.update();
    }
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      if (renderer) {
        renderer.dispose();
        if (threeContainerRef.current) {
          threeContainerRef.current.removeChild(renderer.domElement);
        }
      }
      if (controls) {
        controls.dispose();
      }
    };
  }, []);

  return (
    <div className="w-screen h-screen text-white flex flex-col items-center justify-center">
      <div
        ref={threeContainerRef}
        className="w-full h-full"
        style={{ touchAction: 'none', background: 'transparent' }}
      />
    </div>
  );
}

export default Pond;
