"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const HELIX_COLOR = new THREE.Color("#E8652D")
const BAR_COLOR = new THREE.Color("#1a1a1a")
const GLOW_COLOR = new THREE.Color("#FF8A50")

function HelixStrand({
  offset,
  direction,
}: {
  offset: number
  direction: 1 | -1
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 40
  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime() * 0.4

    for (let i = 0; i < count; i++) {
      const y = (i / count) * 8 - 4
      const angle = (i / count) * Math.PI * 4 + t + offset
      const radius = 1.2

      dummy.position.set(
        Math.cos(angle) * radius * direction,
        y,
        Math.sin(angle) * radius
      )
      const scale = 0.12 + Math.sin(angle + t) * 0.03
      dummy.scale.set(scale, scale, scale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color={HELIX_COLOR}
        emissive={HELIX_COLOR}
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.7}
      />
    </instancedMesh>
  )
}

function ConnectorBars() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 20
  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime() * 0.4

    for (let i = 0; i < count; i++) {
      const y = (i / count) * 8 - 4
      const angle = (i / count) * Math.PI * 4 + t
      const radius = 1.2

      const x1 = Math.cos(angle) * radius
      const z1 = Math.sin(angle) * radius
      const x2 = Math.cos(angle + Math.PI) * radius
      const z2 = Math.sin(angle + Math.PI) * radius

      const midX = (x1 + x2) / 2
      const midZ = (z1 + z2) / 2

      dummy.position.set(midX, y, midZ)
      dummy.lookAt(x2, y, z2)
      dummy.scale.set(0.04, 0.04, radius * 2)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={HELIX_COLOR}
        emissive={HELIX_COLOR}
        emissiveIntensity={0.15}
        roughness={0.5}
        metalness={0.5}
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  )
}

function DataStreamBars() {
  const groupRef = useRef<THREE.Group>(null)
  const bars = useMemo(() => {
    const result: {
      y: number
      width: number
      xOffset: number
      side: number
      speed: number
      phase: number
    }[] = []
    for (let i = 0; i < 30; i++) {
      result.push({
        y: (Math.random() - 0.5) * 7,
        width: 0.3 + Math.random() * 1.8,
        xOffset: 1.5 + Math.random() * 1.5,
        side: Math.random() > 0.5 ? 1 : -1,
        speed: 0.5 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      })
    }
    return result
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()

    groupRef.current.children.forEach((child, i) => {
      const bar = bars[i]
      const mesh = child as THREE.Mesh
      const pulse = Math.sin(t * bar.speed + bar.phase) * 0.5 + 0.5
      mesh.scale.x = bar.width * (0.3 + pulse * 0.7)
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.opacity = 0.15 + pulse * 0.55
    })
  })

  return (
    <group ref={groupRef}>
      {bars.map((bar, i) => (
        <mesh
          key={i}
          position={[
            bar.side * (bar.xOffset + bar.width / 2),
            bar.y,
            0,
          ]}
        >
          <boxGeometry args={[1, 0.06, 0.06]} />
          <meshStandardMaterial
            color={BAR_COLOR}
            emissive={HELIX_COLOR}
            emissiveIntensity={0.2}
            transparent
            opacity={0.4}
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 80
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const result: {
      x: number
      y: number
      z: number
      speed: number
      phase: number
      radius: number
    }[] = []
    for (let i = 0; i < count; i++) {
      result.push({
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 4,
        speed: 0.2 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        radius: 0.015 + Math.random() * 0.035,
      })
    }
    return result
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const p = particles[i]
      const drift = Math.sin(t * p.speed + p.phase)
      dummy.position.set(
        p.x + drift * 0.3,
        p.y + Math.cos(t * p.speed * 0.5 + p.phase) * 0.2,
        p.z
      )
      dummy.scale.setScalar(p.radius * (1 + drift * 0.3))
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color={GLOW_COLOR}
        emissive={GLOW_COLOR}
        emissiveIntensity={0.8}
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  )
}

function RotatingGroup({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    const targetX = mouseY * 0.3
    const targetY = mouseX * 0.3
    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * 0.02
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * 0.02
  })

  return (
    <group ref={groupRef}>
      <HelixStrand offset={0} direction={1} />
      <HelixStrand offset={Math.PI} direction={1} />
      <ConnectorBars />
      <DataStreamBars />
      <FloatingParticles />
    </group>
  )
}

export default function DNAHelix({
  mouseX,
  mouseY,
}: {
  mouseX: number
  mouseY: number
}) {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#E8652D"
      />
      <pointLight
        position={[-5, -3, 3]}
        intensity={0.8}
        color="#FF8A50"
      />
      <pointLight
        position={[0, 0, 5]}
        intensity={0.4}
        color="#FFFFFF"
      />
      <group position={[1.5, 0, 0]}>
        <RotatingGroup mouseX={mouseX} mouseY={mouseY} />
      </group>
    </>
  )
}
