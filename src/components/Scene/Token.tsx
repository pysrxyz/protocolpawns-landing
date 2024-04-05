"use client";

import { Circle } from "@react-three/drei";
import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  BackSide,
  BufferGeometry,
  Color,
  FrontSide,
  Group,
  ShapeGeometry,
  Vector2,
} from "three";
import { SVGLoader, SVGResultPaths } from "three/examples/jsm/Addons.js";

import ProtocolPawnWireFrame from "@/assets/protocolpawn-wireframe.svg";
import ProtocolPawnTokenDecal from "@/assets/protocolpawn-token-decal.svg";

const size = 223;

export default function ShitzuToken({
  tokenWidth = 0.075,
}: {
  tokenWidth?: number;
}) {
  const ref = useRef<Group>(null);

  const protocolPawnSVG = useLoader(
    SVGLoader,
    ProtocolPawnWireFrame.src as string
  );

  const protocolPawnDecalSVG = useLoader(
    SVGLoader,
    ProtocolPawnTokenDecal.src as string
  );

  useFrame((_state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta;
  });

  return (
    <group
      ref={ref}
      position={[0, 0, 0]}
      scale={innerWidth < 768 ? [4, 4, 4] : [3, 3, 3]}
    >
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, tokenWidth, 256, 256, true]} />
        <meshStandardMaterial color={new Color("#929292")} />
      </mesh>

      <group position={[0, 0, -tokenWidth / 2]} rotation={[0, Math.PI, 0]}>
        <Circle args={[0.5, 256]} position={[0, 0, -0.001]}>
          <meshStandardMaterial color={new Color("#929292")} side={FrontSide} />
        </Circle>
        <group
          position={[1 / 2, 1 / 2, 0]}
          rotation={[0, 0, Math.PI]}
          scale={[1 / size, 1 / size, 1 / size]}
        >
          {protocolPawnDecalSVG.paths.map((path, index) => (
            <LinesPathGeometry key={index} path={path}>
              <lineBasicMaterial color={"#C5C3C3"} linewidth={1} />
            </LinesPathGeometry>
          ))}
          {protocolPawnSVG.paths.map((path, index) => (
            <PathGeometry key={index} path={path}>
              <meshStandardMaterial color={"#3d3d3d"} />
            </PathGeometry>
          ))}
        </group>
      </group>

      <group position={[0, 0, tokenWidth / 2]}>
        <Circle args={[0.5, 256]} position={[0, 0, -0.001]}>
          <meshStandardMaterial color={new Color("#3d3d3d")} side={FrontSide} />
        </Circle>
        <group
          position={[1 / 2, 1 / 2, 0]}
          rotation={[0, 0, Math.PI]}
          scale={[1 / size, 1 / size, 1 / size]}
        >
          {protocolPawnDecalSVG.paths.map((path, index) => (
            <LinesPathGeometry key={index} path={path}>
              <lineBasicMaterial color={"#C5C3C3"} linewidth={1} />
            </LinesPathGeometry>
          ))}
          {protocolPawnSVG.paths.map((path, index) => (
            <PathGeometry key={index} path={path}>
              <lineBasicMaterial color={"white"} transparent />
            </PathGeometry>
          ))}
        </group>
      </group>
    </group>
  );
}

function PathGeometry({
  path,
  ...props
}: { path: SVGResultPaths } & MeshProps) {
  const geometry = useMemo(() => {
    return new ShapeGeometry(path.toShapes(true));
  }, [path]);

  return <mesh geometry={geometry}>{props.children}</mesh>;
}

function LinesPathGeometry({
  path,
  ...props
}: { path: SVGResultPaths } & MeshProps) {
  return path.toShapes(true).map((shape, index) => {
    const points = shape.getPoints();

    return (
      <LinePathGeometry key={index} points={points} {...props}>
        {props.children}
      </LinePathGeometry>
    );
  });
}

function LinePathGeometry({
  points,
  ...props
}: {
  points: Vector2[];
} & MeshProps) {
  const geometry = useMemo(() => {
    const geometry = new BufferGeometry();
    geometry.setFromPoints(points);
    return geometry;
  }, [points]);

  return <mesh geometry={geometry}>{props.children}</mesh>;
}
