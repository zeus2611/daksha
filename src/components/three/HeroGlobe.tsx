"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const { wireGeo, dotPositions } = useMemo(() => {
    const sphere = new THREE.SphereGeometry(2, 24, 16);
    const wireGeo = new THREE.EdgesGeometry(sphere);

    const count = 140;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      pos[i * 3] = 2 * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = 2 * Math.cos(phi);
      pos[i * 3 + 2] = 2 * Math.sin(phi) * Math.sin(theta);
    }

    return { wireGeo, dotPositions: pos };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.08 + mouse.x * 0.4;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -0.2 + mouse.y * 0.15,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={wireGeo}>
        <lineBasicMaterial color="#f59e0b" transparent opacity={0.45} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dotPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#f59e0b" transparent opacity={0.9} sizeAttenuation />
      </points>
    </group>
  );
}

export function HeroGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <Globe />
    </Canvas>
  );
}
