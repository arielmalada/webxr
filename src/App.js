import React, { Suspense, useState } from 'react'
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr'
import { Text } from '@react-three/drei'
import './styles.css'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
// function Box({ color, size, scale, children, ...rest }) {
//   return (
//     <mesh scale={scale} {...rest}>
//       <boxBufferGeometry args={size} />
//       <meshPhongMaterial color={color} />
//       {children}
//     </mesh>
//   )
// }

// function Button(props) {
//   const [hover, setHover] = useState(false)
//   const [color, setColor] = useState('blue')

//   const onSelect = () => {
//     setColor((Math.random() * 0xffffff) | 0)
//   }

//   return (
//     <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
//       <Suspense fallback={null}>
//         {/* <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
//             Hello react-xr!
//           </Text> */}
//         <Scene position={[0, 0, 0.06]} anchorX="center" anchorY="middle" />
//       </Suspense>
//     </Interactive>
//   )
// }

export default function App() {
  const [background, setBackground] = useState(true);
  const toggleBackground = () =>{
    setBackground(!background)
  }
  return (
    <>
      <div className="relative flex">
        {
          background && <img src="./assets/base.png" alt="" />
        }
        <div className="absolute"><ARButton onClick={toggleBackground} /></div>
      </div>
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <Button position={[0, 0.1, -0.2]} /> */}
          <Suspense fallback={null}>
        
            <Scene position={[0, -2, -3]} />
          </Suspense>
          <Controllers />
        </XR>
      </Canvas>
    </>
  )
}
