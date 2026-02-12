"use client"

import { useState, useCallback, useEffect, useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Image from "next/image"
import DNAHelix from "@/components/landing/dna-helix"

const rotatingWords = [
  "AI Applications",
  "RAG Systems",
  "Agents",
  "Knowledge Graphs",
  "Fraud Detection",
]

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [display, setDisplay] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    const current = words[wordIndex]

    if (!isDeleting && display === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && display === "") {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      const nextDisplay = isDeleting
        ? current.slice(0, display.length - 1)
        : current.slice(0, display.length + 1)
      timeoutRef.current = setTimeout(
        () => setDisplay(nextDisplay),
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return display
}

export default function HeroScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const typedText = useTypewriter(rotatingWords)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
      setMouse({ x, y })
    },
    []
  )

  return (
    <section
      className="relative min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* 3D helix canvas – background layer */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 50 }}
          gl={{ antialias: true }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <DNAHelix mouseX={mouse.x} mouseY={mouse.y} />
          </Suspense>
        </Canvas>
      </div>

      {/* Text content – in flow, above canvas */}
      <div className="relative z-10 flex min-h-screen items-center pt-24">
        <div className="mx-auto w-full max-w-7xl px-9 md:px-18">
          {/* Backed-by badges */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-full border border-[#E8652D]/30 bg-[#E8652D]/10 px-3 py-1.5">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.9985 47.9994H0V8.61853e-07H47.9985V47.9994Z" fill="#FF6600"/>
                  <path d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z" fill="white"/>
                </svg>
                <span className="text-sm font-medium text-[#E8652D]">Backed by Y Combinator</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-[#76B900]/30 bg-[#76B900]/10 px-3 py-1.5">
                <Image
                  src="/nvidia.svg"
                  alt="NVIDIA"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
                <span className="text-sm font-medium text-[#76B900]">Backed by NVIDIA</span>
              </div>
            </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              <span className="text-[#E8652D]">Graph-Vector</span><br />Database Built For{" "}<br/>{typedText}<span className="animate-pulse">|</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 md:text-xl">
              Feed your agents more relevant context with the fastest and most scalable graph-vector database, built in Rust.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              >
                <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 .2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 008 .2z" />
                </svg>
                Star on Github
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                View Docs
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
