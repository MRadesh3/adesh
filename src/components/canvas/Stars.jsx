import { useState, useRef, Suspense, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const Stars = (props) => {
  const { size } = useThree();
  const ref = useRef();
  const [sphere, setSphere] = useState(() => generateStars(size.width));

  // Function to generate stars based on screen width
  function generateStars(screenWidth) {
    const numStars = screenWidth < 600 ? 1000 : 5000; // Adjust as needed
    return random.inSphere(new Float32Array(numStars * 3), { radius: 1.2 });
  }

  // Dispose of the old geometry and create new geometry when needed
  useLayoutEffect(() => {
    const newSphere = generateStars(size.width);
    ref.current.geometry.dispose();
    ref.current.geometry = new THREE.BufferGeometry().setAttribute(
      "position",
      new THREE.BufferAttribute(newSphere, 3)
    );
    setSphere(newSphere);
  }, [size.width]);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
