'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import type { JSX } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    model: THREE.Mesh
  }
  materials: {
    Material: THREE.Material
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/base_basic_shaded.glb') as unknown as GLTFResult
  const groupRef = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() 
      groupRef.current.position.y = -0.7 + Math.sin(t * 2) * 0.3 
          console.log('Posisi Y:', groupRef.current.position.y)
    }
  })

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      position={[0, -0.1, 0]}
      scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/base_basic_shaded.glb')
