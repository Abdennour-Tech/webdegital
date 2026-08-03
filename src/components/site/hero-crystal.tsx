/**
 * HeroCrystal — cristal géométrique 3D premium
 *
 * - IcosahedronGeometry avec subdivision = 0 (faces nettes, "low-poly crystal")
 * - MeshPhysicalMaterial : transmission verre + roughness + clearcoat
 * - Couleurs du design system : navy #0f1b3d + copper accent
 * - Rotation douce + parallax souris léger
 * - Canvas 200×200 inline, pointer-events none, z-index 10
 * - Cleanup complet au unmount
 */

import { useEffect, useRef } from "react";

// Tailles
const SIZE_DESKTOP = 200;
const SIZE_MOBILE = 140;

// Couleurs du design system
const NAVY = 0x0f1b3d;
const COPPER = 0xc4813a; // oklch(0.6 0.105 58) ≈ #c4813a

export function HeroCrystal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId: number;
    let renderer: import("three").WebGLRenderer;
    let animating = true;

    // Mouse state
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const SIZE = isMobile ? SIZE_MOBILE : SIZE_DESKTOP;

    // Dynamic import — Three.js ne charge qu'au montage du composant
    import("three").then((THREE) => {
      if (!animating) return;

      // ── Renderer ────────────────────────────────────────────────────────────
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setSize(SIZE, SIZE);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0); // fond transparent
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;

      // ── Scene ───────────────────────────────────────────────────────────────
      const scene = new THREE.Scene();

      // ── Camera ──────────────────────────────────────────────────────────────
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 4.5);

      // ── Environment light (IBL simulé) ──────────────────────────────────────
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      // Lumière principale : blanche, légèrement haute
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
      keyLight.position.set(2, 4, 3);
      scene.add(keyLight);

      // Lumière copper accent : chaude, bas-gauche
      const fillLight = new THREE.PointLight(COPPER, 1.8, 12);
      fillLight.position.set(-2.5, -1.5, 2);
      scene.add(fillLight);

      // Rim light navy : froide, derrière
      const rimLight = new THREE.PointLight(NAVY, 1.2, 10);
      rimLight.position.set(1, -2, -3);
      scene.add(rimLight);

      // ── Géométrie : icosaèdre (cristal 20 faces) ─────────────────────────────
      const geo = new THREE.IcosahedronGeometry(1.15, 0);

      // ── Matériau : verre physique ─────────────────────────────────────────────
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.0,
        roughness: 0.08,
        transmission: 0.92,       // effet verre / cristal
        thickness: 1.6,           // réfraction interne
        ior: 1.72,                 // indice optique cristal
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        envMapIntensity: 1.4,
        transparent: true,
        opacity: 1,
        side: THREE.FrontSide,
      });

      const crystal = new THREE.Mesh(geo, mat);
      scene.add(crystal);

      // ── Anneau cuivré autour du cristal ───────────────────────────────────────
      const ringGeo = new THREE.TorusGeometry(1.52, 0.018, 6, 80);
      const ringMat = new THREE.MeshStandardMaterial({
        color: COPPER,
        metalness: 0.9,
        roughness: 0.25,
        emissive: COPPER,
        emissiveIntensity: 0.12,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.4;
      ring.rotation.y = 0.3;
      scene.add(ring);

      // ── Particules flottantes (8 sphères minuscules) ──────────────────────────
      const particleGroup = new THREE.Group();
      const pGeo = new THREE.SphereGeometry(0.025, 6, 6);
      const pMat = new THREE.MeshStandardMaterial({
        color: COPPER,
        metalness: 1,
        roughness: 0.1,
        emissive: COPPER,
        emissiveIntensity: 0.5,
      });

      const particleData: { mesh: THREE.Mesh; theta: number; phi: number; speed: number; radius: number }[] = [];

      for (let i = 0; i < 8; i++) {
        const p = new THREE.Mesh(pGeo, pMat);
        const theta = (i / 8) * Math.PI * 2;
        const phi = Math.PI * 0.3 + (i % 2) * Math.PI * 0.4;
        const radius = 1.85 + Math.random() * 0.3;
        particleData.push({ mesh: p, theta, phi, speed: 0.3 + Math.random() * 0.2, radius });
        particleGroup.add(p);
      }
      scene.add(particleGroup);

      // ── Mouse parallax ────────────────────────────────────────────────────────
      const section = canvasRef.current?.closest("section") ?? document.body;

      const onMouseMove = (e: MouseEvent) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
      };
      section.addEventListener("mousemove", onMouseMove as EventListener);

      // ── Resize ───────────────────────────────────────────────────────────────
      const onResize = () => {
        const s = window.matchMedia("(max-width: 768px)").matches ? SIZE_MOBILE : SIZE_DESKTOP;
        renderer.setSize(s, s);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };
      window.addEventListener("resize", onResize, { passive: true });

      // ── Animation loop ────────────────────────────────────────────────────────
      let t = 0;
      const clock = new THREE.Clock();

      const animate = () => {
        if (!animating) return;
        rafId = requestAnimationFrame(animate);

        const delta = clock.getDelta();
        t += delta;

        // Lerp souris
        target.x += (mouse.x - target.x) * 0.04;
        target.y += (mouse.y - target.y) * 0.04;

        // Rotation cristal : lente + réponse souris
        crystal.rotation.y = t * 0.25 + target.x * 0.22;
        crystal.rotation.x = Math.sin(t * 0.15) * 0.18 + target.y * 0.12;
        crystal.rotation.z = t * 0.08;

        // Anneau : rotation indépendante
        ring.rotation.z = t * 0.18;
        ring.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.2) * 0.06;

        // Flottement vertical subtil
        crystal.position.y = Math.sin(t * 0.6) * 0.06;
        ring.position.y = crystal.position.y;

        // Particules en orbite
        particleData.forEach((p, i) => {
          const a = p.theta + t * p.speed * (i % 2 === 0 ? 1 : -0.7);
          p.mesh.position.set(
            p.radius * Math.sin(a) * Math.sin(p.phi),
            p.radius * Math.cos(p.phi) + crystal.position.y,
            p.radius * Math.cos(a) * Math.sin(p.phi),
          );
          p.mesh.material.emissiveIntensity = 0.3 + Math.sin(t * 1.5 + i) * 0.2;
        });

        // Lumière copper qui pulse légèrement
        (fillLight as THREE.PointLight).intensity = 1.6 + Math.sin(t * 0.8) * 0.4;

        renderer.render(scene, camera);
      };

      animate();

      // ── Cleanup ───────────────────────────────────────────────────────────────
      return () => {
        animating = false;
        cancelAnimationFrame(rafId);
        section.removeEventListener("mousemove", onMouseMove as EventListener);
        window.removeEventListener("resize", onResize);

        geo.dispose();
        mat.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        pGeo.dispose();
        pMat.dispose();
        renderer.dispose();
      };
    });

    return () => {
      animating = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hero-crystal-wrap pointer-events-none absolute -top-10 -right-10 z-10 hidden sm:block rtl:right-auto rtl:-left-10"
    >
      <canvas
        ref={canvasRef}
        className="hero-crystal-canvas"
        style={{ width: SIZE_DESKTOP, height: SIZE_DESKTOP }}
      />
    </div>
  );
}
