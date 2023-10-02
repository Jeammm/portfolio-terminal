import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [r, setR] = useState(50);
  const [g, setG] = useState(50);
  const [b, setB] = useState(50);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
    setR((p) => (p + 3)%255);
    setG((p) => (p + 5)%255);
    setB((p) => (p + 7)%255);
  });

  useEffect(() => {
    const handleScroll = (event) => {
      meshRef.current.rotation.x += 0.05;
      meshRef.current.rotation.y += 0.05;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
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
        <Box position={[-4.5, 2, 0]} />
      </Canvas>
    </div>
  );
}
