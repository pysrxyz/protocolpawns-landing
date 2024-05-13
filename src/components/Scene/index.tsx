"use client";

import { Canvas } from "@react-three/fiber";
import Token from "./Token";
import Chessboard from "./Chessboard";
import { useEffect, useState } from "react";
import { WebGL } from "three/examples/jsm/Addons.js";

import HeroBG from "@/assets/images/hero.webp";

export default function Scene() {
  const [webGLWarning, setWebGLWarning] = useState<string | null>(null);

  useEffect(() => {
    // check web-gl support and or enable it
    if (!WebGL.isWebGLAvailable()) {
      const warning = WebGL.getWebGLErrorMessage();

      setWebGLWarning(warning.innerText);
    }
  }, []);

  return webGLWarning !== null ? (
    <div className="h-full w-full">
      <img
        src={HeroBG.src}
        alt="Protocol Pawn Hero Static Image"
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
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
