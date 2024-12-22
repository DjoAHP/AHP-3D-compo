import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector2 } from 'three';

interface PyramidProps {
  baseRadius?: number;
  height?: number;
  color?: string;
}

export function Pyramid({ 
  baseRadius = 2, 
  height = 3,
  color = "#8b5cf6"
}: PyramidProps) {
  const meshRef = useRef<Mesh>(null);
  const mouse = useRef(new Vector2());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convertir les coordonnées de la souris en coordonnées normalisées (-1 à 1)
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Rotation de base
      meshRef.current.rotation.y += delta * 0.2;

      // Effet parallax
      const targetRotationX = mouse.current.y * 0.3;
      const targetRotationZ = mouse.current.x * 0.3;

      // Animation fluide
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.z += (targetRotationZ - meshRef.current.rotation.z) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[baseRadius, height, 4]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}