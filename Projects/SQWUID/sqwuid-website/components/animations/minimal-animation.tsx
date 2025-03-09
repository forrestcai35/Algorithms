"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function MinimalAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create subtle gradient lines
    const lines = []
    const lineCount = 5

    class Line {
      constructor(index) {
        this.y = (canvas.height * (index + 1)) / (lineCount + 1)
        this.amplitude = Math.random() * 10 + 5
        this.frequency = Math.random() * 0.005 + 0.001
        this.speed = Math.random() * 0.5 + 0.1
        this.opacity = Math.random() * 0.1 + 0.05
        this.width = Math.random() * 1.5 + 0.5
      }

      draw(time) {
        ctx.beginPath()
        ctx.moveTo(0, this.y)

        for (let x = 0; x < canvas.width; x += 5) {
          const y = this.y + Math.sin(x * this.frequency + time * this.speed) * this.amplitude
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = `rgba(156, 156, 255, ${this.opacity})`
        ctx.lineWidth = this.width
        ctx.stroke()
      }
    }

    const init = () => {
      for (let i = 0; i < lineCount; i++) {
        lines.push(new Line(i))
      }
    }

    init()

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < lines.length; i++) {
        lines[i].draw(time)
      }

      time += 0.01
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(156,156,255,0.05),transparent_50%)]"></div>

      {/* Canvas for minimal animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Floating minimal elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-1 bg-primary/10 rounded-full"
        animate={{
          width: ["16rem", "20rem", "16rem"],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-32 h-1 bg-primary/10 rounded-full"
        animate={{
          width: ["8rem", "12rem", "8rem"],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary/10 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}

