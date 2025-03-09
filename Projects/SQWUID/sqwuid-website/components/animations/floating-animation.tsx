"use client"

import { useEffect, useRef } from "react"

export default function FloatingAnimation() {
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

    // Create floating shapes
    class Shape {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 60 + 20
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.2 + 0.05
        this.type = Math.floor(Math.random() * 3) // 0: circle, 1: square, 2: triangle
        this.rotation = 0
        this.rotationSpeed = Math.random() * 0.01 - 0.005
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.strokeStyle = `rgba(156, 156, 255, ${this.opacity})`
        ctx.lineWidth = 2

        switch (this.type) {
          case 0: // Circle
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
            ctx.stroke()
            break
          case 1: // Square
            ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
            break
          case 2: // Triangle
            const h = (this.size * Math.sqrt(3)) / 2
            ctx.beginPath()
            ctx.moveTo(0, -this.size / 2)
            ctx.lineTo(-this.size / 2, h / 2)
            ctx.lineTo(this.size / 2, h / 2)
            ctx.closePath()
            ctx.stroke()
            break
        }

        ctx.restore()
      }
    }

    const shapes = []

    const init = () => {
      for (let i = 0; i < 15; i++) {
        shapes.push(new Shape())
      }
    }

    init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < shapes.length; i++) {
        shapes[i].update()
        shapes[i].draw()
      }

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(156,156,255,0.1),transparent_35%)]"></div>

      {/* Canvas for floating shapes animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

