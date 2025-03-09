"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function PortfolioAnimation() {
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

    // Create gradient background
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(156, 156, 255, 0.05)")
      gradient.addColorStop(0.5, "rgba(156, 156, 255, 0.02)")
      gradient.addColorStop(1, "rgba(156, 156, 255, 0.05)")
      return gradient
    }

    // Create floating frames
    class Frame {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.width = Math.random() * 100 + 50
        this.height = Math.random() * 100 + 50
        this.opacity = Math.random() * 0.1 + 0.05
        this.speed = Math.random() * 0.2 + 0.1
        this.angle = Math.random() * Math.PI * 2
        this.direction = Math.random() > 0.5 ? 1 : -1
        this.rotationSpeed = Math.random() * 0.001 * this.direction
      }

      update() {
        this.angle += this.rotationSpeed
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.direction *= -1
        if (this.y < 0 || this.y > canvas.height) this.direction *= -1

        // Keep frames in bounds
        if (this.x < 0) this.x = 0
        if (this.x > canvas.width) this.x = canvas.width
        if (this.y < 0) this.y = 0
        if (this.y > canvas.height) this.y = canvas.height
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.strokeStyle = `rgba(156, 156, 255, ${this.opacity})`
        ctx.lineWidth = 1
        ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height)
        ctx.restore()
      }
    }

    const frames = []

    const init = () => {
      for (let i = 0; i < 15; i++) {
        frames.push(new Frame())
      }
    }

    init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      ctx.fillStyle = createGradient()
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw frames
      frames.forEach((frame) => {
        frame.update()
        frame.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Canvas for portfolio animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Floating showcase elements */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-64 h-40 bg-primary/5 rounded-lg"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 1, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/5 rounded-lg"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, -1, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-56 bg-primary/5 rounded-lg"
        animate={{
          y: [0, 10, 0],
          x: [0, -5, 0],
          rotate: [0, 0.5, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}

