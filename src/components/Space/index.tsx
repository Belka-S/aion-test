'use client';

import { Points, useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { useMemo, useRef, useState } from 'react';
import { Mesh } from 'three';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

import s from './Space.module.scss';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.PointsMaterial;
  };
};

// Galaxy
const Galaxy = (props: JSX.IntrinsicElements['group']) => {
  const groupRef = useRef<THREE.Group>(null!);
  const galaxyCenterLightRef = useRef<THREE.PointLight>(null!);
  const { nodes } = useGLTF('./galaxy.glb') as GLTFResult;
  const [positions, colors] = useMemo(() => {
    nodes.Object_2.geometry.center();
    const positions = new Float32Array(
      nodes.Object_2.geometry.attributes.position.array.buffer,
    );
    const colors = new Float32Array(positions.length);

    const getDistanceToCenter = (x: number, y: number, z: number) =>
      Math.sqrt(x * x + y * y + z * z);

    // make colors closer to 0,0,0 be more reddish and colors further away be more blueish
    const color = new THREE.Color();
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      const distanceToCenter = getDistanceToCenter(x, y, z);
      const normalizedDistanceToCenter = distanceToCenter / 100;

      // make colors closer to 0,0,0 be more reddish and colors further away be more blueish (do not use hsl)
      color.setHSL(
        (0.15 * (0.21 + Math.cos(distanceToCenter * 0.02))) / 2,
        0.75,
        0.6,
      );
      color.setRGB(
        Math.cos(normalizedDistanceToCenter),
        THREE.MathUtils.randFloat(0, 0.8),
        Math.sin(normalizedDistanceToCenter),
      );
      color.toArray(colors, i);
    }

    return [positions, colors];
  }, [nodes]);
  const starTexture = useLoader(THREE.TextureLoader, './star.jpg');

  // slowly rotate the galaxy
  useFrame((state, delta) => {
    groupRef.current.rotation.x += 0.001;
    groupRef.current.rotation.y += 0.001;
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <pointLight
        position={[0, 0, 0]}
        ref={galaxyCenterLightRef}
        intensity={0.5}
      />
      <Points scale={0.05} positions={positions} colors={colors}>
        <pointsMaterial
          map={starTexture}
          transparent
          depthWrite={false}
          vertexColors
          opacity={0.4}
          depthTest
          size={0.01}
        />
      </Points>
      <EffectComposer autoClear={false}>
        <SelectiveBloom
          intensity={2}
          luminanceThreshold={0.001}
          luminanceSmoothing={0.225}
          lights={[galaxyCenterLightRef]}
        />
      </EffectComposer>
    </group>
  );
};

// Cube
const Cube = (props: JSX.IntrinsicElements['mesh']) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 2 : 1}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

// Space
const Space = () => {
  return (
    <Canvas className={s.space}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Cube position={[-5, 0, 0]} />
      <Cube position={[5, 0, 0]} />
      <Galaxy />
    </Canvas>
  );
};

export default Space;
