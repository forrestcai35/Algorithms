"use client"

import { useEffect, useRef } from "react"

export default function ServicesAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const flowLines = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create flow lines
    class FlowLine {
      constructor() {
        this.startX = Math.random() * canvas.width
        this.startY = 0
        this.length = Math.random() * 200 + 100
        this.speed = Math.random() * 1 + 0.5
        this.points = []
        this.color = `rgba(156, 156, 255, ${Math.random() * 0.3 + 0.1})`
        this.width = Math.random() * 2 + 1
        this.wavelength = Math.random() * 200 + 100
        this.amplitude = Math.random() * 20 + 10

        // Initialize points
        for (let i = 0; i < this.length; i++) {
          this.points.push({
            x: this.startX + Math.sin((i / this.wavelength) * Math.PI * 2) * this.amplitude,
            y: this.startY + i,
          })
        }
      }

      update() {
        // Move points upward
        for (let i = 0; i < this.points.length; i++) {
          this.points[i].y += this.speed
          this.points[i].x = this.startX + Math.sin((this.points[i].y / this.wavelength) * Math.PI * 2) * this.amplitude
        }

        // Remove points that move beyond the canvas and add new points at the top
        if (this.points[0].y > canvas.height) {
          this.points.shift()
          const lastPoint = this.points[this.points.length - 1]
          this.points.push({
            x: this.startX + Math.sin(((lastPoint.y + 1) / this.wavelength) * Math.PI * 2) * this.amplitude,
            y: lastPoint.y + 1,
          })
        }
      }

      draw() {
        if (this.points.length < 2) return

        ctx.strokeStyle = this.color
        ctx.lineWidth = this.width
        ctx.beginPath()
        ctx.moveTo(this.points[0].x, this.points[0].y)

        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y)
        }

        ctx.stroke()
      }
    }

    const init = () => {
      for (let i = 0; i < 15; i++) {
        const line = new FlowLine()
        line.startX = Math.random() * canvas.width
        line.startY = Math.random() * canvas.height
        flowLines.push(line)
      }
    }

    init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < flowLines.length; i++) {
        flowLines[i].update()
        flowLines[i].draw()
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(156,156,255,0.15),transparent_50%)]"></div>

      {/* Canvas for flow animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

