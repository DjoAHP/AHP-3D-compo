import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Pyramid } from './3d/Pyramid';

export function Hero() {
  return (
    <div className="h-screen w-full relative">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Pyramid />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mes compositions 3D
          </h1>
          <p className="text-md text-gray-300">
          Passionné de 3D, j'expérimente en détournant des scènes cultes pour créer des compositions surréalistes et décalées, mêlant humour et imagination.
          </p>
        </motion.div>
      </div>
    </div>
  );
}