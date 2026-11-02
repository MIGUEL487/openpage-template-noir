'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createProceduralKnitTextures } from './KnitTextureGenerator';

interface FloatingGarmentCanvasProps {
  colorHex?: string;
  wireframe?: boolean;
  activePreset?: 'front' | 'collar' | 'side' | 'macro';
}

export function FloatingGarmentCanvas({
  colorHex = '#18181A',
  wireframe = false,
  activePreset = 'front',
}: FloatingGarmentCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sweaterGroupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);
  const lightsRef = useRef<{
    rimLight: THREE.DirectionalLight;
    keyLight: THREE.DirectionalLight;
    fillLight: THREE.PointLight;
    ambientLight: THREE.AmbientLight;
  } | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Update color and wireframe props dynamically
  useEffect(() => {
    materialsRef.current.forEach((mat) => {
      mat.color.set(colorHex);
      mat.wireframe = wireframe;
      mat.needsUpdate = true;
    });
  }, [colorHex, wireframe]);

  // Handle preset camera changes
  useEffect(() => {
    if (!cameraRef.current || !sweaterGroupRef.current) return;

    const cam = cameraRef.current;
    const group = sweaterGroupRef.current;

    switch (activePreset) {
      case 'collar':
        gsap.to(cam.position, { x: 0, y: 1.15, z: 2.2, duration: 1.2, ease: 'power2.out' });
        gsap.to(group.rotation, { x: 0.15, y: 0.2, z: 0, duration: 1.2, ease: 'power2.out' });
        break;
      case 'side':
        gsap.to(cam.position, { x: 1.8, y: 0.2, z: 3.2, duration: 1.2, ease: 'power2.out' });
        gsap.to(group.rotation, { x: 0, y: Math.PI * 0.45, z: 0, duration: 1.2, ease: 'power2.out' });
        break;
      case 'macro':
        gsap.to(cam.position, { x: 0.4, y: 0.4, z: 1.6, duration: 1.2, ease: 'power2.out' });
        gsap.to(group.rotation, { x: 0.05, y: -0.3, z: 0.05, duration: 1.2, ease: 'power2.out' });
        break;
      case 'front':
      default:
        gsap.to(cam.position, { x: 0, y: 0, z: 4.2, duration: 1.2, ease: 'power2.out' });
        gsap.to(group.rotation, { x: 0, y: 0, z: 0, duration: 1.2, ease: 'power2.out' });
        break;
    }
  }, [activePreset]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.2);
    cameraRef.current = camera;

    // 2. High-Fidelity Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // 3. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x1a1a1f, 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf0ede8, 3.8);
    keyLight.position.set(3, 4, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Saturated Carmine Rim Light from the back
    const rimLight = new THREE.DirectionalLight(0x9b2428, 5.5);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    // Subtle bottom bounce light for fabric shadows
    const fillLight = new THREE.PointLight(0xba2d32, 2.0, 10);
    fillLight.position.set(0, -2.5, 2);
    scene.add(fillLight);

    lightsRef.current = { rimLight, keyLight, fillLight, ambientLight };

    // 4. Procedural Knitted Wool Materials
    const { normalMap, bumpMap, aoMap } = createProceduralKnitTextures();

    const knitMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(colorHex),
      roughness: 0.88,
      metalness: 0.04,
      sheen: 1.0,
      sheenColor: new THREE.Color(0xf0ede8),
      sheenRoughness: 0.42,
      normalMap,
      normalScale: new THREE.Vector2(0.9, 0.9),
      bumpMap,
      bumpScale: 0.05,
      aoMap,
      aoMapIntensity: 0.8,
      wireframe,
      side: THREE.DoubleSide,
    });

    const ribMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(colorHex),
      roughness: 0.82,
      metalness: 0.05,
      sheen: 1.2,
      sheenColor: new THREE.Color(0xf0ede8),
      sheenRoughness: 0.38,
      normalMap,
      normalScale: new THREE.Vector2(1.4, 1.4),
      bumpMap,
      bumpScale: 0.08,
      wireframe,
      side: THREE.DoubleSide,
    });

    materialsRef.current = [knitMaterial, ribMaterial];

    // 5. Build 3D Sculpted Avant-Garde Sweater Model
    const sweaterGroup = new THREE.Group();
    sweaterGroupRef.current = sweaterGroup;

    // A. Torso Geometry: Sculpted drape with natural curves
    const torsoPoints: THREE.Vector2[] = [];
    const torsoSegments = 36;
    for (let i = 0; i <= torsoSegments; i++) {
      const t = i / torsoSegments;
      const y = (t - 0.5) * 2.2; // height from -1.1 to 1.1

      // Radius curve: narrow shoulders, flare at chest, gentle taper, slight flare at hem
      let radius = 0.65;
      if (y > 0.6) {
        // Upper chest / shoulders taper into neck
        const shoulderT = (y - 0.6) / 0.5;
        radius = 0.82 - shoulderT * 0.42;
      } else if (y > 0.0) {
        // Chest volume
        radius = 0.78 + Math.sin(y * Math.PI) * 0.06;
      } else if (y > -0.8) {
        // Waist taper
        radius = 0.72 - Math.sin((y + 0.8) * Math.PI * 0.5) * 0.04;
      } else {
        // Lower hem drape
        radius = 0.76;
      }

      torsoPoints.push(new THREE.Vector2(radius, y));
    }

    const torsoGeo = new THREE.LatheGeometry(torsoPoints, 48);
    // Flatten torso slightly along Z axis for realistic human proportions (deeper width than depth)
    torsoGeo.scale(1.0, 1.0, 0.65);
    const torsoMesh = new THREE.Mesh(torsoGeo, knitMaterial);
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    sweaterGroup.add(torsoMesh);

    // B. Ribbed Bottom Hem
    const hemGeo = new THREE.CylinderGeometry(0.77, 0.76, 0.22, 48, 4, true);
    hemGeo.scale(1.0, 1.0, 0.65);
    const hemMesh = new THREE.Mesh(hemGeo, ribMaterial);
    hemMesh.position.y = -1.18;
    hemMesh.castShadow = true;
    sweaterGroup.add(hemMesh);

    // C. Architectural Ribbed Turtleneck / Collar
    const collarPoints: THREE.Vector2[] = [];
    const collarH = 0.62;
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      const y = t * collarH;
      // Slight outward flare at top of collar roll
      const r = 0.36 + Math.pow(t, 2) * 0.06;
      collarPoints.push(new THREE.Vector2(r, y));
    }
    const collarGeo = new THREE.LatheGeometry(collarPoints, 36);
    collarGeo.scale(1.0, 1.0, 0.85);
    const collarMesh = new THREE.Mesh(collarGeo, ribMaterial);
    collarMesh.position.set(0, 1.05, 0);
    collarMesh.rotation.x = 0.08; // natural forward tilt
    collarMesh.castShadow = true;
    sweaterGroup.add(collarMesh);

    // Collar lip torus (rolled edge)
    const collarRollGeo = new THREE.TorusGeometry(0.41, 0.055, 16, 36);
    collarRollGeo.scale(1.0, 0.85, 1.0);
    const collarRollMesh = new THREE.Mesh(collarRollGeo, ribMaterial);
    collarRollMesh.rotation.x = Math.PI * 0.5 + 0.08;
    collarRollMesh.position.set(0, 1.66, -0.05);
    sweaterGroup.add(collarRollMesh);

    // D. Sculpted Dropped-Shoulder Sleeves with Organic Bends
    const buildSleeve = (isLeft: boolean) => {
      const sign = isLeft ? -1 : 1;
      const sleeveCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(sign * 0.72, 0.9, 0),
        new THREE.Vector3(sign * 1.15, 0.55, 0.08),
        new THREE.Vector3(sign * 1.48, 0.0, 0.12), // natural elbow curve
        new THREE.Vector3(sign * 1.58, -0.65, 0.05),
        new THREE.Vector3(sign * 1.54, -1.1, 0.0),
      ]);

      const sleeveGeo = new THREE.TubeGeometry(sleeveCurve, 32, 0.22, 24, false);
      const sleeveMesh = new THREE.Mesh(sleeveGeo, knitMaterial);
      sleeveMesh.castShadow = true;
      sweaterGroup.add(sleeveMesh);

      // Ribbed Extended Cuff
      const cuffCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(sign * 1.54, -1.1, 0.0),
        new THREE.Vector3(sign * 1.52, -1.35, -0.02),
      ]);
      const cuffGeo = new THREE.TubeGeometry(cuffCurve, 12, 0.17, 24, false);
      const cuffMesh = new THREE.Mesh(cuffGeo, ribMaterial);
      cuffMesh.castShadow = true;
      sweaterGroup.add(cuffMesh);
    };

    buildSleeve(true); // Left
    buildSleeve(false); // Right

    // E. Tactile Cable Knit Reliefs down the front
    const createCableBraid = (xOffset: number) => {
      const points: THREE.Vector3[] = [];
      const steps = 40;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const y = 0.85 - t * 1.8;
        const wave = Math.sin(t * Math.PI * 7) * 0.035;
        // Project onto front curve of torso
        const z = 0.42 * (1 - Math.pow(y / 1.5, 2)) + 0.01;
        points.push(new THREE.Vector3(xOffset + wave, y, z));
      }
      const cableCurve = new THREE.CatmullRomCurve3(points);
      const cableGeo = new THREE.TubeGeometry(cableCurve, 40, 0.042, 12, false);
      const cableMesh = new THREE.Mesh(cableGeo, ribMaterial);
      cableMesh.castShadow = true;
      sweaterGroup.add(cableMesh);
    };

    createCableBraid(-0.25);
    createCableBraid(0.25);
    createCableBraid(-0.02);

    // Initial positioning
    sweaterGroup.position.set(0, -0.1, 0);
    sweaterGroup.scale.set(1.15, 1.15, 1.15);
    scene.add(sweaterGroup);

    setIsLoaded(true);

    // 6. GSAP ScrollTrigger Choreography across the entire document
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let masterScrollTrigger: ScrollTrigger | null = null;
    if (!prefersReducedMotion) {
      // Create master scrub timeline tied to window scroll
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          onUpdate: (self) => {
            // Adjust rim light intensity dynamically based on scroll depth
            if (lightsRef.current) {
              lightsRef.current.rimLight.intensity = 4.5 + Math.sin(self.progress * Math.PI) * 4.0;
            }
          },
        },
      });

      masterScrollTrigger = masterTL.scrollTrigger || null;

      // Stage 1: Hero to Manifesto (0.0 -> 0.3)
      masterTL.to(
        sweaterGroup.position,
        {
          x: 1.35,
          y: -0.15,
          z: -0.4,
          ease: 'power1.inOut',
          duration: 3,
        },
        0
      );

      masterTL.to(
        sweaterGroup.rotation,
        {
          x: 0.12,
          y: -0.85,
          z: 0.04,
          ease: 'power1.inOut',
          duration: 3,
        },
        0
      );

      // Stage 2: Manifesto to 3D Floating Garment Showcase (0.3 -> 0.6)
      masterTL.to(
        sweaterGroup.position,
        {
          x: 0,
          y: 0,
          z: 0.2,
          ease: 'power2.inOut',
          duration: 3,
        },
        3
      );

      masterTL.to(
        sweaterGroup.rotation,
        {
          x: 0.0,
          y: Math.PI * 2, // Full 360 spin showcasing construction
          z: 0,
          ease: 'power2.inOut',
          duration: 3,
        },
        3
      );

      // Stage 3: Showcase to Lookbook & Catalog (0.6 -> 1.0)
      masterTL.to(
        sweaterGroup.position,
        {
          x: -1.4,
          y: 1.8,
          z: -1.2,
          ease: 'power2.inOut',
          duration: 4,
        },
        6
      );

      masterTL.to(
        sweaterGroup.rotation,
        {
          x: -0.2,
          y: Math.PI * 2.8,
          z: -0.1,
          ease: 'power2.inOut',
          duration: 4,
        },
        6
      );
    }

    // 7. Mouse parallax listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = normX * 0.4;
      mouseRef.current.targetY = normY * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 8. Render Loop with subtle breathing oscillation
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isVisible = true;

    // Use IntersectionObserver to stop RAF when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      if (sweaterGroup) {
        // Natural zero-gravity gentle breathing float
        if (!prefersReducedMotion) {
          const breathing = Math.sin(elapsed * 1.4) * 0.035;
          sweaterGroup.position.y += breathing * delta * 1.5;
        }

        // Apply interactive mouse tracking
        sweaterGroup.rotation.y += mouseRef.current.x * 0.02;
        sweaterGroup.rotation.x += mouseRef.current.y * 0.015;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (masterScrollTrigger) {
        masterScrollTrigger.kill();
      }

      // Dispose Three.js objects
      sweaterGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
        }
      });

      materialsRef.current.forEach((m) => {
        m.normalMap?.dispose();
        m.bumpMap?.dispose();
        m.aoMap?.dispose();
        m.dispose();
      });

      renderer.dispose();
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      sweaterGroupRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[500px] overflow-hidden select-none pointer-events-auto"
      style={{ touchAction: 'pan-y' }}
      aria-label="Visualizador tridimensional da peça de tricô NOIR Gauge 01"
      role="region"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing outline-none"
      />

      {/* Subtle Loading skeleton indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-noir-950/80 backdrop-blur-sm z-10 transition-opacity duration-700">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-2 border-noir-carmine/30 border-t-noir-carmine rounded-full animate-spin" />
            <span className="text-[11px] font-mono tracking-widest text-noir-400 uppercase">
              Gerando Geometria Têxtil 3D...
            </span>
          </div>
        </div>
      )}

      {/* Fallback for noscript / reduced motion users */}
      <noscript>
        <div className="absolute inset-0 flex items-center justify-center bg-noir-900 text-noir-200 p-8 text-center">
          <p>O visualizador 3D necessita de JavaScript e suporte a WebGL para renderizar.</p>
        </div>
      </noscript>
    </div>
  );
}
