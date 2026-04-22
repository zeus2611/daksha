"use client";

import { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WavePlane() {
  const { geometry, originalXY } = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(16, 12, 52, 36);
    const pos = geometry.attributes.position;
    const originalXY = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      originalXY[i * 2] = pos.getX(i);
      originalXY[i * 2 + 1] = pos.getY(i);
    }
    return { geometry, originalXY };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = originalXY[i * 2];
      const y = originalXY[i * 2 + 1];
      pos.setZ(
        i,
        Math.sin(x * 0.4 + t * 0.9) * 0.45 +
          Math.sin(y * 0.5 + t * 0.65) * 0.3 +
          Math.sin((x + y) * 0.28 + t * 0.5) * 0.2
      );
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2.6, 0, 0.1]} position={[0, -1.8, 0]}>
      <meshBasicMaterial wireframe color="#f59e0b" transparent opacity={0.55} />
    </mesh>
  );
}

export function HeroWave() {
  return (
    <Canvas
      camera={{ position: [0, 3, 9], fov: 55 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 1.5]}
    >
      <WavePlane />
    </Canvas>
  );
}
