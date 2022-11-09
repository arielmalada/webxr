import React, { Suspense, useState } from 'react'
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr'
import { Text } from '@react-three/drei'
import './styles.css'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import Lipsum from './Lipsum'


function Button(props) {
  const [showDescription, setShowDescription] = useState(false)
  const onSelect = () => {
    setShowDescription(!showDescription)
  }

  return (
    <Interactive onSelect={onSelect}>
      <Suspense fallback={null}>
        {
          !showDescription ?
            <Scene position={[0, -2, -1]} /> :
            <Lipsum position={[0, -2, -0.5]} />
        }
      </Suspense>
    </Interactive>
  )
}

export default function App() {
  const [background, setBackground] = useState(true);
  const toggleBackground = () => {
    setBackground(!background)
  }
  return (
    <>
      {
        background &&
        (
          <div>
            <div className='flex items-center justify-between h-16 px-3 bg-white'>
              <img src="./assets/museox.png" alt="" />
              <img src="./assets/sort.png" alt="" />
            </div>
            <div className="relative">
              <img src="./assets/background.webp" alt="" className='absolute object-cover h-[100vh] ' />
              <div className='flex h-[100vh] items-center px-3 text-center'>
                <div className='relative flex flex-col px-3 py-8 mt-10 bg-white rounded-md'>
                  <div className='mb-4 text-2xl font-bold text-indigo-800'>
                    MuseoX Exhibition
                  </div>
                  <p className='mb-8'>
                    Celebrating the darkest season of the year, the 57th Tampere Festival of Light illuminates the streets of Tampere city centre with hundreds of magical light spheres, street projections and exciting light art from 28th October 2022 to 8th January 2023.
                    Share your atmosphere in social media using the hashtag #Valoviikot
                  </p>
                  <div className="mt-4"><ARButton style={{"background-color":"#F1722E !important"}} onClick={toggleBackground} /></div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <Canvas>
          <XR referenceSpace="unbounded">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Button position={[0, 0.1, -0.2]} />
            <Controllers />
          </XR>
        </Canvas>
    </>
  )
}
