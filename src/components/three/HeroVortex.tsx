"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 420;

function Vortex() {
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      speeds[i] = 0.4 + Math.random() * 0.6;
    }
    return { positions, speeds };
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    timeRef.current += delta;
    const t = timeRef.current;

    for (let i = 0; i < COUNT; i++) {
      const progress = ((i / COUNT) + t * 0.04 * speeds[i]) % 1;
      const angle = progress * Math.PI * 14;
      const radius = 0.3 + progress * 2.8;
      const height = (progress - 0.5) * 9;
      positions[i * 3] = radius * Math.cos(angle);
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = radius * Math.sin(angle);
    }

    const geo = pointsRef.current.geometry;
    (geo.attributes.position as THREE.BufferAttribute).set(positions);
    geo.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.07;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#f59e0b"
        transparent
        opacity={0.88}
        sizeAttenuation
      />
    </points>
  );
}

export function HeroVortex() {
  return (
    <Canvas
      camera={{ position: [0, 2, 11], fov: 55 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <Vortex />
    </Canvas>
  );
}
