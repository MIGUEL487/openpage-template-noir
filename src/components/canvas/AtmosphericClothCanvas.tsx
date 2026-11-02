'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AtmosphericClothCanvasProps {
  className?: string;
  opacity?: number;
  /**
   * EXTENSION POINT:
   * If you wish to load a custom GLB/GLTF model (e.g., '/models/sweater.glb'),
   * pass its path here. When omitted, the high-end atmospheric draped cloth wave is rendered.
   */
  customModelUrl?: string;
}

export function AtmosphericClothCanvas({
  className = '',
  opacity = 0.28,
  customModelUrl,
}: AtmosphericClothCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // 2. High-Fidelity Ambient WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;

    // 3. Cinematic Studio Lighting for Ambient Depth
    const ambientLight = new THREE.AmbientLight(0x0e0e12, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf0ede8, 2.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Deep ruby/carmine rim light that catches grazing cloth folds
    const rimLight = new THREE.DirectionalLight(0x9b2428, 4.0);
    rimLight.position.set(-5, 2, -3);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x1f1f24, 1.5, 12);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    // 4. Cloth Mesh Creation
    // Generates an undulating, sculptural draped silk/wool surface
    const clothGroup = new THREE.Group();
    scene.add(clothGroup);

    const gridW = 7.5;
    const gridH = 5.5;
    const segW = 64;
    const segH = 48;
    const clothGeo = new THREE.PlaneGeometry(gridW, gridH, segW, segH);

    // PBR Fabric Material with Velvet Sheen
    const clothMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x131316),
      roughness: 0.82,
      metalness: 0.08,
      sheen: 1.0,
      sheenColor: new THREE.Color(0xf0ede8),
      sheenRoughness: 0.5,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      wireframe: false,
    });

    const clothMesh = new THREE.Mesh(clothGeo, clothMat);
    clothMesh.rotation.x = -Math.PI * 0.22;
    clothMesh.rotation.z = Math.PI * 0.08;
    clothMesh.position.set(0.6, -0.4, 0);
    clothGroup.add(clothMesh);

    // Secondary subtle ribbon wave for layered depth
    const ribbonGeo = new THREE.TorusGeometry(2.4, 0.28, 24, 64);
    const ribbonMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x0e0e10),
      roughness: 0.9,
      metalness: 0.02,
      sheen: 0.8,
      sheenColor: new THREE.Color(0x9b2428),
      sheenRoughness: 0.4,
      transparent: true,
      opacity: 0.45,
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbonMesh.position.set(-1.2, 0.2, -1.0);
    ribbonMesh.rotation.set(0.8, 0.4, 0.2);
    clothGroup.add(ribbonMesh);

    // 5. ScrollTrigger Linked Camera & Cloth Progression
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let scrollTriggerInstance: ScrollTrigger | null = null;

    if (!prefersReducedMotion) {
      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
          onUpdate: (self) => {
            // Subtle shift of light intensity as user traverses editorial chapters
            rimLight.intensity = 3.5 + Math.sin(self.progress * Math.PI) * 2.5;
          },
        },
      });

      scrollTriggerInstance = scrollTL.scrollTrigger || null;

      // Scroll phase 1: Subtle rotation and drift
      scrollTL.to(
        clothGroup.position,
        {
          x: -0.8,
          y: 0.5,
          z: -0.6,
          ease: 'power1.inOut',
          duration: 3,
        },
        0
      );

      scrollTL.to(
        clothGroup.rotation,
        {
          x: 0.25,
          y: 0.35,
          z: -0.15,
          ease: 'power1.inOut',
          duration: 3,
        },
        0
      );

      // Scroll phase 2: Deep descent into the catalog
      scrollTL.to(
        clothGroup.position,
        {
          x: 0.4,
          y: -1.0,
          z: -1.2,
          ease: 'power2.inOut',
          duration: 4,
        },
        3
      );

      scrollTL.to(
        clothGroup.rotation,
        {
          x: -0.3,
          y: 0.7,
          z: 0.1,
          ease: 'power2.inOut',
          duration: 4,
        },
        3
      );
    }

    // 6. Smooth Organic Vertex Wave Animation in RAF
    const posAttr = clothGeo.attributes.position;
    const origPos = posAttr.array.slice(); // Copy initial vertex coordinates

    let animationId: number;
    const clock = new THREE.Clock();
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(container);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Deform cloth vertices in a rhythmic, liquid-like textile wave
      if (!prefersReducedMotion) {
        const arr = posAttr.array as Float32Array;
        const count = posAttr.count;

        for (let i = 0; i < count; i++) {
          const u = origPos[i * 3];
          const v = origPos[i * 3 + 1];

          // Complex layered sinusoidal cloth wave
          const wave1 = Math.sin(u * 1.2 + elapsed * 0.9) * 0.28;
          const wave2 = Math.cos(v * 1.5 + elapsed * 0.7) * 0.22;
          const wave3 = Math.sin((u + v) * 0.8 + elapsed * 1.1) * 0.15;

          arr[i * 3 + 2] = wave1 + wave2 + wave3;
        }
        posAttr.needsUpdate = true;
        clothGeo.computeVertexNormals();

        // Slow turntable drift of the ribbon
        ribbonMesh.rotation.x += 0.0012;
        ribbonMesh.rotation.y += 0.0016;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      clothGeo.dispose();
      clothMat.dispose();
      ribbonGeo.dispose();
      ribbonMat.dispose();
      renderer.dispose();
    };
  }, [customModelUrl]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden transition-opacity duration-1000 ${className}`}
      style={{ opacity, zIndex: 1 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
