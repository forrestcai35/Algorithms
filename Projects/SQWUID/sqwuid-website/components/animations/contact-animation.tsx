"use client"

import { useEffect, useRef } from "react"

export default function ContactAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const waves = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create waves
    class Wave {
      constructor(y, amplitude, frequency, speed, color) {
        this.y = y
        this.amplitude = amplitude
        this.frequency = frequency
        this.speed = speed
        this.color = color
        this.offset = 0
      }

      update() {
        this.offset += this.speed
        if (this.offset > 2 * Math.PI) {
          this.offset = 0
        }
      }

      draw() {
        ctx.beginPath()
        ctx.moveTo(0, this.y)

        for (let x = 0; x < canvas.width; x++) {
          const y = this.y + Math.sin(x * this.frequency + this.offset) * this.amplitude
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = this.color
        ctx.lineWidth = 1.5
        ctx.stroke()
      }
    }

    const init = () => {
      waves.length = 0

      // Create multiple waves at different positions
      const spacing = canvas.height / 12
      for (let i = 1; i <= 10; i++) {
        const y = i * spacing
        const amplitude = Math.random() * 10 + 5
        const frequency = Math.random() * 0.01 + 0.005
        const speed = Math.random() * 0.02 + 0.01
        const opacity = Math.random() * 0.2 + 0.1

        waves.push(new Wave(y, amplitude, frequency, speed, `rgba(156, 156, 255, ${opacity})`))
      }
    }

    init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < waves.length; i++) {
        waves[i].update()
        waves[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", init)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", init)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(156,156,255,0.15),transparent_70%)]"></div>

      {/* Canvas for wave animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

