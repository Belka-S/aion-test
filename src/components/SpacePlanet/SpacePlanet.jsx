'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import s from './Space.module.scss';

const SpacePlanet = () => {
  const refSpace = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    refSpace.current && refSpace.current.appendChild(renderer.domElement);

    camera.position.setZ(3);

    const controls = new OrbitControls(camera, renderer.domElement);

    // background
    const spaceTexture = new THREE.TextureLoader().load('./space.jpg');
    scene.background = spaceTexture;

    // galaxy
    let galaxy;
    const loader = new GLTFLoader();

    loader.load(
      './space.glb',
      function (gltf) {
        galaxy = gltf.scene;
        scene.add(galaxy);
      },
      function (xhr) {
        // console.log((xhr.loader / xhr.total) * 100 + '% loaded');
      },
      function (err) {
        console.error(err);
      },
    );

    // thorus
    const addThorus = () => {
      const geometry = new THREE.TorusGeometry(0.2, 0.07, 16, 80);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
      });
      const thorus = new THREE.Mesh(geometry, material);

      thorus.rotateY(Math.PI / 2);
      thorus.position.set(-1, 0, 0);

      scene.add(thorus);
    };
    addThorus();

    // moon
    const addMoon = () => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const moonTexture = new THREE.TextureLoader().load('./moon.jpg');
      const normalTexture = new THREE.TextureLoader().load('./surface.jpg');
      const material = new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      });

      const moon = new THREE.Mesh(geometry, material);

      scene.add(moon);
    };

    addMoon();

    // stars
    const addStars = () => {
      const geometry = new THREE.SphereGeometry(0.25, 4, 4);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const sphere = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      sphere.position.set(x, y, z);

      scene.add(sphere);
    };

    Array(400).fill().forEach(addStars);

    // controls = new OrbitControls(camera, renderer.domElement);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(10, 10, 10);
    topLight.castShadow = true;

    const ambientLight = new THREE.AmbientLight(0xffffff);
    const pointLight = new THREE.PointLight(0xffffff);

    scene.add(topLight, ambientLight, pointLight);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };

    animate();
  }, []);

  return <div className={s.space} ref={refSpace}></div>;
};

export default SpacePlanet;
