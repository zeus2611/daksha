"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MorphMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(0);
  const targetRef = useRef(0);

  const geometries = useRef([
    new THREE.IcosahedronGeometry(1.6, 1),
    new THREE.TorusKnotGeometry(1.1, 0.35, 128, 32),
    new THREE.OctahedronGeometry(1.8, 0),
  ]);

  const positionsA = useRef<Float32Array | null>(null);
  const positionsB = useRef<Float32Array | null>(null);
  const currentGeoIndex = useRef(0);

  useEffect(() => {
    const maxVerts = Math.max(
      ...geometries.current.map(
        (g) => g.attributes.position.array.length
      )
    );

    const pad = (arr: Float32Array) => {
      const out = new Float32Array(maxVerts);
      out.set(arr);
      return out;
    };

    positionsA.current = pad(
      geometries.current[0].attributes.position.array as Float32Array
    );
    positionsB.current = pad(
      geometries.current[1].attributes.position.array as Float32Array
    );

    if (meshRef.current) {
      const geo = geometries.current[0].clone();
      const padded = new Float32Array(maxVerts);
      padded.set(geo.attributes.position.array);
      geo.setAttribute("position", new THREE.BufferAttribute(padded.slice(), 3));
      meshRef.current.geometry = geo;
    }

    const interval = setInterval(() => {
      const next = (currentGeoIndex.current + 1) % geometries.current.length;
      positionsA.current = positionsB.current;
      const arr = geometries.current[next].attributes.position.array as Float32Array;
      positionsB.current = pad(arr);
      currentGeoIndex.current = next;
      progressRef.current = 0;
      targetRef.current = 1;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;

    if (progressRef.current < 1) {
      progressRef.current = Math.min(1, progressRef.current + delta * 0.6);
    }

    const p = progressRef.current;
    const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

    const geo = meshRef.current.geometry as THREE.BufferGeometry;
    const pos = geo.attributes.position;
    const a = positionsA.current;
    const b = positionsB.current;

    if (!a || !b) return;

    for (let i = 0; i < pos.count; i++) {
      const i3 = i * 3;
      pos.setXYZ(
        i,
        a[i3] + (b[i3] - a[i3]) * ease,
        a[i3 + 1] + (b[i3 + 1] - a[i3 + 1]) * ease,
        a[i3 + 2] + (b[i3 + 2] - a[i3 + 2]) * ease
      );
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial
        color="#f59e0b"
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export function HeroMorph() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <MorphMesh />
    </Canvas>
  );
}
