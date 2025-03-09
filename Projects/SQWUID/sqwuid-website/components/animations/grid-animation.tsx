"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function GridAnimation() {
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

    // Grid properties
    const gridSize = 40
    const dotSize = 1
    const pulseSpeed = 0.02

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2))

          const pulse = Math.sin(distance * 0.01 + time) + 1
          const size = dotSize + pulse * 1.5
          const opacity = 0.1 + pulse * 0.1

          ctx.fillStyle = `rgba(156, 156, 255, ${opacity})`
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()

          // Draw lines between dots
          if (x < canvas.width - gridSize) {
            ctx.strokeStyle = `rgba(156, 156, 255, ${opacity * 0.3})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + gridSize, y)
            ctx.stroke()
          }

          if (y < canvas.height - gridSize) {
            ctx.strokeStyle = `rgba(156, 156, 255, ${opacity * 0.3})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x, y + gridSize)
            ctx.stroke()
          }
        }
      }

      time += pulseSpeed
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(156,156,255,0.1),transparent_30%)]"></div>

      {/* Canvas for grid animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Floating blueprint elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-lg"
        style={{ borderStyle: "dashed" }}
        animate={{
          rotate: [0, 5, 0],
          scale: [1, 1.02, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/20 rounded-full"
        style={{ borderStyle: "dashed" }}
        animate={{
          rotate: [0, -5, 0],
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}

