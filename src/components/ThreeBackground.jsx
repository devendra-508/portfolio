"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import "./ThreeBackground.css";

function InteractiveParticles({ count = 900 }) {
  const mesh = useRef();
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color("#00d2ff");
    const colorB = new THREE.Color("#8245ec");

    for (let i = 0; i < count; i++) {
      // Cylindrical / spherical volume
      const radius = 5 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      pos[i * 3] = radius * Math.cos(phi) * Math.sin(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi) * Math.cos(theta);

      // Lerp between cyan and purple
      const mixed = colorA.clone().lerp(colorB, Math.random());
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    // Smooth mouse lerp
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    // Gentle continuous rotation + mouse parallax
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03 + mouse.current.x * 0.4;
    mesh.current.rotation.x = mouse.current.y * 0.3;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingWireframe({ position, color, speed = 0.5 }) {
  const ref = useRef();
  
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * speed * 0.2;
    ref.current.rotation.y = t * speed * 0.3;
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.2;
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="three-bg-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <Stars radius={40} depth={40} count={1200} factor={3} fade speed={0.8} />
        <InteractiveParticles count={850} />

        {/* Ambient geometric wireframe nodes */}
        <FloatingWireframe position={[-6, 2, -4]} color="#00d2ff" speed={0.4} />
        <FloatingWireframe position={[6, -2, -5]} color="#8245ec" speed={0.5} />
      </Canvas>
    </div>
  );
}
