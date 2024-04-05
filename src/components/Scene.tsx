"use client";

import { Canvas } from "@react-three/fiber";
import Token from "./Token";

export default function Scene() {
  return (
    <Canvas>
      <Token />
      <ambientLight />
      {/* point light that points to the center of the scene from bottom left */}
      <pointLight position={[-2, -2, 1]} intensity={10} />
      {/* point light that points to the center of the scene from bottom right */}
      <pointLight position={[2, 2, 1]} intensity={10} />
    </Canvas>
  );
}
