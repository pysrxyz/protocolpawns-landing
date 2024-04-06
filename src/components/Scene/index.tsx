"use client";

import { Canvas } from "@react-three/fiber";
import Token from "./Token";
import Chessboard from "./Chessboard";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas>
      <group position={[0, -0.25, 0]}>
        <Token />
      </group>
      {/* <ambientLight /> */}
      {/* point light that points to the center of the scene from bottom left */}
      <pointLight position={[-2, -2, 1]} intensity={10} />
      {/* point light that points to the center of the scene from bottom right */}
      <pointLight position={[2, 2, 1]} intensity={10} />

      <pointLight position={[0, 10, 5]} intensity={200} />

      <group
        rotation={[Math.PI * 0.6, 0, 0]}
        scale={[6, 6, 6]}
        position={[0, -3, -15]}
      >
        <Chessboard />
      </group>
    </Canvas>
  );
}
