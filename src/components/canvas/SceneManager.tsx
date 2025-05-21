'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useScrollProgress } from '@/hooks/useScrollProgress';

// 創建柔和的球形粒子系統
function createParticleSystem(count: number, spread: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const color = new THREE.Color();

  // 現代感配色：天藍、薄荷綠、珊瑚紅、淡紫、金黃
  const colorSchemes = [
    new THREE.Color(0x3498db), // 天藍
    new THREE.Color(0x2ecc71), // 薄荷綠
    new THREE.Color(0xff6b6b), // 珊瑚紅
    new THREE.Color(0x9b59b6), // 淡紫
    new THREE.Color(0xf1c40f)  // 金黃
  ];

  // 球面坐標轉換函數
  const getSpherePosition = () => {
    const phi = Math.acos(-1 + Math.random() * 2);
    const theta = Math.random() * Math.PI * 2;
    const radius = Math.random() * spread;
    
    return {
      x: Math.sin(phi) * Math.cos(theta) * radius,
      y: Math.sin(phi) * Math.sin(theta) * radius,
      z: Math.cos(phi) * radius
    };
  };

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const pos = getSpherePosition();
    positions[i3] = pos.x;
    positions[i3 + 1] = pos.y;
    positions[i3 + 2] = pos.z;

    // 隨機選擇一種預設顏色並添加輕微變化
    const baseColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    color.copy(baseColor);
    
    // 添加輕微的顏色變化
    color.offsetHSL(
      (Math.random() - 0.5) * 0.1,  // 色相變化
      (Math.random() - 0.5) * 0.2,  // 飽和度變化
      (Math.random() - 0.5) * 0.1   // 亮度變化
    );
    
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;

    sizes[i] = 0.05 + Math.random() * 0.15; // 輕微的大小變化
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  return geometry;
}

export default function SceneManager() {
  const { scrollProgress } = useScrollProgress();
  const groupRef = useRef<THREE.Group>(null);
  
  // 創建三個不同的粒子系統
  const particlesRef = useRef<THREE.Points[]>([]);
  
  useEffect(() => {
    if (!groupRef.current) return;

    // 清除現有的粒子系統
    particlesRef.current.forEach(particles => {
      if (particles.parent) particles.parent.remove(particles);
    });
    particlesRef.current = [];

    // 創建新的粒子系統
    const materials = [
      new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        map: new THREE.TextureLoader().load('/circle.svg'), // 使用圓形結構
      }),
      new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        map: new THREE.TextureLoader().load('/circle.svg'),
      }),
      new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
        map: new THREE.TextureLoader().load('/circle.svg'),
      }),
    ];

    const geometries = [
      createParticleSystem(250, 10),  // 較大的球體
      createParticleSystem(180, 8),   // 中等的球體
      createParticleSystem(120, 6),   // 較小的球體
    ];

    geometries.forEach((geometry, index) => {
      const particles = new THREE.Points(geometry, materials[index]);
      groupRef.current?.add(particles);
      particlesRef.current.push(particles);
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    // 根據滾動位置調整效果
    const section = Math.floor(scrollProgress * 3); // 分為三個部分
    const sectionProgress = (scrollProgress * 3) % 1; // 每個部分的進度

    // 調整每個粒子系統的可見性和動畫
    particlesRef.current.forEach((particles, index) => {
      if (!particles) return;

      // 設置透明度和大小
      const material = particles.material as THREE.PointsMaterial;
      
      // 根據段落內容調整透明度
      const baseOpacity = index === section ? 0.4 : 0.2;
      const textHeavySection = section >= 1 && section <= 3; // 工作經歷、專案、教育等文字較多的段落
      const opacityMultiplier = textHeavySection ? 0.5 : 1;
      
      material.opacity = (baseOpacity + Math.sin(sectionProgress * Math.PI) * 0.1) * opacityMultiplier;
      
      // 根據段落進度調整點的大小
      const baseSize = index === section ? 0.15 : 0.1;
      material.size = baseSize + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;

      // 根據部分添加不同的動畫
      switch (index) {
        case 0: // Hero section
          particles.rotation.y += 0.001;
          particles.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
          break;
        case 1: // About section
          particles.rotation.x += 0.002;
          particles.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
          break;
        case 2: // Experience section
          particles.rotation.z += 0.001;
          particles.position.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.5;
          break;
      }

      // 過渡動畫
      if (index === section) {
        particles.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      } else {
        particles.scale.lerp(new THREE.Vector3(0.5, 0.5, 0.5), 0.1);
      }
    });

    // 整體場景動畫
    groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
    groupRef.current.position.z = -5 + scrollProgress * 2;
  });

  return <group ref={groupRef} />;
}
