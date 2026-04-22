"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current || !outerRef.current) return;
    const t = state.clock.getElapsedTime();

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.y * 0.5,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.x * 0.5 + t * 0.1,
      0.05
    );

    outerRef.current.rotation.x = -t * 0.08;
    outerRef.current.rotation.y = t * 0.12;
    outerRef.current.rotation.z = t * 0.06;
  });

  return (
    <>
      {/* Core orb */}
      <Sphere ref={meshRef} args={[1.4, 128, 128]}>
        <MeshDistortMaterial
          color="#f59e0b"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive="#f59e0b"
          emissiveIntensity={0.4}
          transparent
          opacity={0.85}
        />
      </Sphere>

      {/* Outer ring */}
      <mesh ref={outerRef}>
        <torusGeometry args={[2.2, 0.015, 16, 120]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.65} />
      </mesh>

      {/* Second ring offset */}
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <torusGeometry args={[2.5, 0.008, 16, 120]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.4} />
      </mesh>

      {/* Glow light */}
      <pointLight color="#f59e0b" intensity={3} distance={6} />
    </>
  );
}

export function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <Orb />
    </Canvas>
  );
}
