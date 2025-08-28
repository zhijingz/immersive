import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Star() {
  const threeContainerRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (threeContainerRef.current && !threeContainerRef.current.contains(renderer.domElement)) {
      threeContainerRef.current.appendChild(renderer.domElement);
    }

    // Galaxy background
    const loader = new THREE.TextureLoader();
    loader.load('/src/assets/galaxy.jpg', (texture) => {
      texture.encoding = THREE.sRGBEncoding;
      texture.colorSpace = THREE.SRGBColorSpace;
      // Create a darkened version of the texture using a canvas
      const canvas = document.createElement('canvas');
      canvas.width = texture.image.width;
      canvas.height = texture.image.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(texture.image, 0, 0);
      ctx.globalAlpha = 0.7; // 70% dark overlay
      ctx.fillStyle = '#070710';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const darkTexture = new THREE.Texture(canvas);
      darkTexture.needsUpdate = true;
      darkTexture.encoding = THREE.sRGBEncoding;
      darkTexture.colorSpace = THREE.SRGBColorSpace;
      scene.background = darkTexture;
      renderer.setClearColor(0x070710, 1); // much darker
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    // Orbit Controls
    /*const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 2;
    controls.maxDistance = 20;
    controls.target.set(0, 0, 0);
    controls.update();*/

    const yellow = 0xf5c107;

    // Lighting
    scene.add(new THREE.AmbientLight(yellow, 1.2)); // strong yellow ambient
    scene.add(new THREE.AmbientLight(0xffffff, 0.5)); // soft white fill

    // Central sphere (smaller)
    const sphereGeometry = new THREE.SphereGeometry(0.13, 32, 32);
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: yellow,
      metalness: 0.7,
      roughness: 0.18,
      clearcoat: 0.7,
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
      sheen: 1.0,
      sheenColor: new THREE.Color(0xffe6b0),
      emissive: yellow,
      emissiveIntensity: 0.18,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const glowGeometry = new THREE.SphereGeometry(1.19, 64, 64);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(yellow) },
        innerRadius: { value: 0.13 },
        outerRadius: { value: 1.19 }
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform float innerRadius;
        uniform float outerRadius;
        varying vec3 vPosition;
        void main() {
          float dist = length(vPosition);
          float t = smoothstep(innerRadius, outerRadius, dist);
          float alpha = (1.0 - t) * 0.28;
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,
      blending: THREE.AdditiveBlending,
      transparent: true,
      side: THREE.BackSide
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMesh.position.copy(sphere.position);
    scene.add(glowMesh);

    const starRayRadius = 0.45;
    const ringConfigs = [
      { radius: 1.3, color: yellow, speed: 0.002, tilt: 0.48 },
      { radius: starRayRadius, color: yellow, speed: -0.004, tilt: -0.48 },
      { radius: 1.1, color: yellow, speed: 0.005, tilt: 0.38 },
    ];
    const rings = [];
    let secondRing = null;
    let secondRingAxis = null;
    let rayGroup = null;
    let doubleOuterRing = null;
    let doubleOuterRingAxis = null;
    let doubleOuterRingSpeed = null;
    let hugeOuterRing = null;
    let hugeOuterRingAxis = null;
    const Oradius = 1.7;
    const Ospeed = 0.002;

    ringConfigs.forEach((cfg, i) => {
      let baseRotation = Math.PI / 2 + cfg.tilt;
      if (i === 0) {
        baseRotation += Math.PI / 1.2;
      } else if (i === 1) {
        baseRotation -= 0.22;
      } else if (i === 2) {
        baseRotation += 0.32;
      }
      let circle;
      if (i === 0) {
        // Main ring
        const circleGeometry = new THREE.CircleGeometry(cfg.radius, 80);
        const edges = new THREE.EdgesGeometry(circleGeometry);
        const material = new THREE.LineBasicMaterial({ color: yellow, linewidth: 2 });
        circle = new THREE.LineSegments(edges, material);

        // Creative rings (also yellow)
        const baseRadius = cfg.radius;
        const creativeRings = [
          { radius: baseRadius + 0.53, opacity: 0.18, linewidth: 5, tilt: 0.12 },
          { radius: baseRadius + 0.19, opacity: 0.22, linewidth: 3, tilt: -0.21 },
          { radius: baseRadius + 0.44, opacity: 0.11, linewidth: 6, tilt: 0.35 },
          { radius: baseRadius + 0.13, opacity: 0.29, linewidth: 4, tilt: -0.32 },
          { radius: baseRadius + 0.60, opacity: 0.29, linewidth: 4, tilt: -0.16 },
        ];
        creativeRings.forEach(ringCfg => {
          const rayGroup = new THREE.Group();
          const rayCount = 90;
          for (let j = 0; j < rayCount; j++) {
            const angle = (j / rayCount) * Math.PI * 2;
            const x = Math.cos(angle) * (ringCfg.radius - 0.03);
            const y = Math.sin(angle) * (ringCfg.radius - 0.03);
            const points = [
              new THREE.Vector3(x, y, 0),
              new THREE.Vector3(0, 0, 0)
            ];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
              color: yellow,
              linewidth: ringCfg.linewidth,
              transparent: true,
              opacity: ringCfg.opacity
            });
            const line = new THREE.Line(geometry, material);
            rayGroup.add(line);
          }
          rayGroup.rotation.x = Math.PI / 2 + ringCfg.tilt;
          scene.add(rayGroup);
        });
      }
      // Attach spheres to innermost ring
      if (i === 0) {
        const smallSphereGeometry = new THREE.SphereGeometry(0.045, 16, 16);
        const smallSphereMaterial = new THREE.MeshPhysicalMaterial({
          color: yellow,
          metalness: 0.7,
          roughness: 0.18,
          clearcoat: 0.7,
          clearcoatRoughness: 0.1,
          reflectivity: 0.8,
          sheen: 1.0,
          sheenColor: yellow,
          emissive: yellow,
          emissiveIntensity: 0.22,
        });
        const r = cfg.radius;
        const smallSphere1 = new THREE.Mesh(smallSphereGeometry, smallSphereMaterial);
        smallSphere1.position.set(r, 0, 0);
        circle.add(smallSphere1);
        const angle = Math.PI * 2 / 3;
        const smallSphere2 = new THREE.Mesh(smallSphereGeometry, smallSphereMaterial);
        smallSphere2.position.set(Math.cos(angle) * r, Math.sin(angle) * r, 0);
        circle.add(smallSphere2);
        circle.smallSphere1 = smallSphere1;
        circle.smallSphere2 = smallSphere2;
      } else {
        const circleGeometry = new THREE.CircleGeometry(cfg.radius, 80);
        const edges = new THREE.EdgesGeometry(circleGeometry);
        const material = new THREE.LineBasicMaterial({ color: yellow, linewidth: 2 });
        circle = new THREE.LineSegments(edges, material);
      }
      circle.rotation.x = baseRotation;
      scene.add(circle);
      const axis = new THREE.Vector3(0, 1, 0).applyAxisAngle(new THREE.Vector3(1, 0, 0), cfg.tilt);
      rings.push({ mesh: circle, speed: cfg.speed, axis });

      // Double outer ring
      if (i === 2) {
        const circle2Geometry = new THREE.CircleGeometry(cfg.radius + 0.08, 80);
        const edges2 = new THREE.EdgesGeometry(circle2Geometry);
        const material2 = new THREE.LineBasicMaterial({ color: yellow, linewidth: 2 });
        const circle2 = new THREE.LineSegments(edges2, material2);
        circle2.rotation.copy(circle.rotation);
        circle2.position.copy(circle.position);
        scene.add(circle2);
        doubleOuterRing = [circle, circle2];
        doubleOuterRingAxis = axis;
        doubleOuterRingSpeed = cfg.speed;
        rings[2].speed = cfg.speed;
        rings[2].axis = axis;
        
        // Huge outer ring (yellow)
        const OGeo = new THREE.CircleGeometry(Oradius, 80);
        const hugeEdges = new THREE.EdgesGeometry(OGeo);
        const hugeMaterial = new THREE.LineBasicMaterial({ color: yellow, linewidth: 1 });
        const OCircle = new THREE.LineSegments(hugeEdges, hugeMaterial);
        OCircle.rotation.x = Math.PI / 2 + 0.45;
        OCircle.position.y = 0;

        //spheres for huge ring
        const OSphereGeo = new THREE.SphereGeometry(0.04, 20, 20);
        const OSphereMat = new THREE.MeshPhysicalMaterial({
          color: yellow,
          metalness: 0.7,
          roughness: 0.18,
          clearcoat: 0.7,
          clearcoatRoughness: 0.1,
          reflectivity: 0.8,
          sheen: 1.0,
          sheenColor: yellow,
          emissive: yellow,
          emissiveIntensity: 0.22,
        });
        const OSphere = new THREE.Mesh(OSphereGeo, OSphereMat);
        const OSphere2Geo = new THREE.SphereGeometry(0.02, 16, 16);
        const smallSphereMaterial1 = new THREE.MeshPhysicalMaterial({
          color: yellow,
          metalness: 0.7,
          roughness: 0.18,
          clearcoat: 0.7,
          clearcoatRoughness: 0.1,
          reflectivity: 0.8,
          sheen: 1.0,
          sheenColor: yellow,
          emissive: yellow,
          emissiveIntensity: 0.22,
        });
        const smallSphere1 = new THREE.Mesh(OSphere2Geo, smallSphereMaterial1);
        const smallSphereGeometry2 = new THREE.SphereGeometry(0.045, 16, 16);
        const smallSphereMaterial2 = new THREE.MeshPhysicalMaterial({
          color: yellow,
          metalness: 0.7,
          roughness: 0.18,
          clearcoat: 0.7,
          clearcoatRoughness: 0.1,
          reflectivity: 0.8,
          sheen: 1.0,
          sheenColor: yellow,
          emissive: yellow,
          emissiveIntensity: 0.22,
        });
        const smallSphere2 = new THREE.Mesh(smallSphereGeometry2, smallSphereMaterial2);
        const r = Oradius;
        OSphere.position.set(r, 0, 0);
        const arcAngle = 0.18;
        smallSphere1.position.set(
          Math.cos(arcAngle) * r,
          Math.sin(arcAngle) * r,
          0
        );
        smallSphere2.position.set(-r, 0, 0);
        OCircle.add(OSphere);
        OCircle.add(smallSphere1);
        OCircle.add(smallSphere2);
        scene.add(OCircle);
        hugeOuterRing = OCircle;
        hugeOuterRingAxis = new THREE.Vector3(0, 1, 0);
        hugeOuterRing.OSphere = OSphere;
        hugeOuterRing.smallSphere1 = smallSphere1;
        hugeOuterRing.smallSphere2 = smallSphere2;
      }
      if (i === 1) {
        secondRing = circle;
        secondRingAxis = axis;
      }
    });

    // Middle ring in double ring group (yellow)
    if (doubleOuterRing && doubleOuterRing.length === 2) {
      const midRadius = (ringConfigs[2].radius + (ringConfigs[2].radius + 0.08)) / 2;
      const midRingGeometry = new THREE.CircleGeometry(midRadius, 80);
      const midEdges = new THREE.EdgesGeometry(midRingGeometry);
      const midMaterial = new THREE.LineBasicMaterial({ color: yellow, linewidth: 2 });
      const midRing = new THREE.LineSegments(midEdges, midMaterial);
      midRing.rotation.copy(doubleOuterRing[0].rotation);
      midRing.position.copy(doubleOuterRing[0].position);
      scene.add(midRing);
      doubleOuterRing.push(midRing);
    }

    // Star-ray lines for second ring (all yellow)
    if (secondRing) {
      rayGroup = new THREE.Group();
      const rayCount = 80;
      const ringRadius = starRayRadius;
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2;
        const x = Math.cos(angle) * (ringRadius - 0.03);
        const y = Math.sin(angle) * (ringRadius - 0.03);
        const points = [
          new THREE.Vector3(x, y, 0),
          new THREE.Vector3(0, 0, 0)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: yellow, linewidth: 1 });
        const line = new THREE.Line(geometry, material);
        rayGroup.add(line);
      }
      rayGroup.rotation.copy(secondRing.rotation);
      rayGroup.position.copy(secondRing.position);
      scene.add(rayGroup);
    }

    function addStar() {
        const geometry = new THREE.TetrahedronGeometry(1, 4);
        
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);
        star.scale.set(0.1, 0.1, 0.1)

        const [x, y, z] = Array(3)
            .fill()
            .map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        scene.add(star);
    }

    Array(400).fill().forEach(addStar);

    const shootingStars = [];
    const shootingStarGroup = new THREE.Group();
    scene.add(shootingStarGroup);   

    function createShootingStar() {
    // Random start position far from center (in a "space" shell)
    const angle = Math.random() * Math.PI * 2;
    const radius = 3.3 + Math.random() * 2.7; // Place in outer space region
    const height = (Math.random() - 0.5) * 2; // random vertical spread

    const start = new THREE.Vector3(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
    );
    // Slightly offset direction (so lines aren’t strictly radial)
    const direction = new THREE.Vector3(
        (Math.random() - 0.5) * 0.7,
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.7
    ).normalize();
    const length = 0.1 + Math.random() * 0.2; // shorter for realism
    const end = start.clone().add(direction.clone().multiplyScalar(length));

    // Line geometry and material (with transparency)
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    const material = new THREE.LineBasicMaterial({ color: yellow, transparent: true, opacity: 1 });
    const line = new THREE.Line(geometry, material);

    // Track shooting star properties for animation
    shootingStars.push({
        line,
        velocity: direction.clone().multiplyScalar(0.07 + Math.random() * 0.07),
        life: 0,
        maxLife: 20 + Math.random() * 20 // frames to live
    });
    shootingStarGroup.add(line);
    }

    let shootingStarSpawnTimer = 0;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.018;
      rings.forEach((ring, idx) => {
        if (!(doubleOuterRing && doubleOuterRing.length >= 2 && idx === 2)) {
          ring.mesh.rotateOnAxis(ring.axis, ring.speed);
        }
      });
      if (doubleOuterRing && doubleOuterRing.length >= 2 && doubleOuterRingAxis !== null && doubleOuterRingSpeed !== null) {
        doubleOuterRing.forEach(ringMesh => {
          ringMesh.rotateOnAxis(doubleOuterRingAxis, doubleOuterRingSpeed);
        });
      }
      if (hugeOuterRing && hugeOuterRingAxis) {
        hugeOuterRing.rotateOnWorldAxis(hugeOuterRingAxis, Ospeed);
      }
      if (rayGroup && secondRingAxis) {
        rayGroup.rotation.copy(secondRing.rotation);
        rayGroup.position.copy(secondRing.position);
        rayGroup.rotateOnAxis(secondRingAxis, rings[1].speed);
      }
      // Shooting star spawning logic (every ~20 frames)
    shootingStarSpawnTimer++;
    if (shootingStarSpawnTimer > 20 + Math.random()*30) {
        createShootingStar();
        shootingStarSpawnTimer = 0;
    }

    // Animate, fade, and remove expired shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.line.position.add(star.velocity);
        star.life++;

        // Fade out toward end of life
        if (star.life > star.maxLife * 0.7) {
        star.line.material.opacity = Math.max(
            0,
            (star.maxLife - star.life) / (star.maxLife * 0.3)
        );
        }

        // Remove when expired
        if (star.life >= star.maxLife) {
        shootingStarGroup.remove(star.line);
        star.line.geometry.dispose();
        star.line.material.dispose();
        shootingStars.splice(i, 1);
        }
    }
      //controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Resize
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
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

export default Star;
