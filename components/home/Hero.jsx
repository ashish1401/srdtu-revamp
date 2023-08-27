import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import CanvasLoader from './Loader/CanvasLoader'

const Drone = ({ isMobile }) => {
    const drone = useGLTF('./buster_drone/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={10.15} groundColor="black" />
            <pointLight intensity={100} />
            <spotLight
                position={[40, 40, 25]}
                angle={1.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={drone.scene}
                scale={isMobile ? 4.00 : 5.750}
                position={isMobile ? [0, 3, -0.25] : [0, 2, 0]}
                rotation={[0, 1.35, 0]}
            />
        </mesh>
    )
}

const Hero = () => {
    const [isMobile, setisMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setisMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setisMobile(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    return (
        <Canvas
            shadows
            camera={{ position: [20, 3, 5], fov: 55 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Drone isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Hero