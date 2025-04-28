import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Shape } from "three";

function Heart(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [r, setR] = useState(1);
  const [g, setG] = useState(125);
  const [b, setB] = useState(200);

  // Heart shape
  const heartShape = useMemo(() => {
    const x = 0,
      y = 0;
    const shape = new Shape();
    shape.moveTo(x + 5, y + 5);
    shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
    return shape;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 2;
    }
    setR((p) => ((p + 3) % 125) + 125);
    setG((p) => ((p + 5) % 125) + 125);
    setB((p) => ((p + 7) % 125) + 125);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.05;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      scale={0.06}
      rotation={[Math.PI, 0, 0]}
    >
      <extrudeGeometry
        args={[
          heartShape,
          {
            depth: 5,
            bevelEnabled: true,
            bevelThickness: 5,
            bevelSize: 5,
            bevelSegments: 10,
          },
        ]}
        ref={(geo) => {
          if (geo) {
            geo.center();
          }
        }}
      />
      <meshStandardMaterial color={hovered ? "red" : `rgb(${r},${g},${b})`} />
    </mesh>
  );
}

export default function FiberComponent() {
  return (
    <div className="absolute">
      <Canvas>
        <ambientLight />
        <pointLight position={[-3.4, 1.5, 1]} />
        <Heart position={[-4.5, 2, 0]} />
      </Canvas>
    </div>
  );
}
