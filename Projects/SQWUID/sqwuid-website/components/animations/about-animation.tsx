"use client"

import { useEffect, useRef } from "react"

export default function AboutAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const gridPoints = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create grid points
    class GridPoint {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.density = Math.random() * 30 + 1
        this.size = Math.random() * 2 + 1
        this.colorIndex = Math.floor(Math.random() * 3)
      }

      update() {
        // Add slight oscillation
        this.x = this.baseX + Math.sin(Date.now() * 0.001 + this.density) * 5
        this.y = this.baseY + Math.cos(Date.now() * 0.001 + this.density) * 5
      }

      draw() {
        const colors = ["rgba(156, 156, 255, 0.5)", "rgba(156, 156, 255, 0.3)", "rgba(156, 156, 255, 0.1)"]

        ctx.fillStyle = colors[this.colorIndex]
        ctx.beginPath()
        ctx.rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
        ctx.fill()
      }
    }

    const init = () => {
      gridPoints.length = 0
      const gridSize = 50
      const gridGap = 70

      for (let y = 0; y < canvas.height + gridGap; y += gridGap) {
        for (let x = 0; x < canvas.width + gridGap; x += gridGap) {
          gridPoints.push(new GridPoint(x, y))
        }
      }
    }

    init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < gridPoints.length; i++) {
        gridPoints[i].update()
        gridPoints[i].draw()
      }

      // Draw connecting lines between nearby points
      for (let a = 0; a < gridPoints.length; a++) {
        for (let b = a; b < gridPoints.length; b++) {
          const dx = gridPoints[a].x - gridPoints[b].x
          const dy = gridPoints[a].y - gridPoints[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(156, 156, 255, ${0.15 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(gridPoints[a].x, gridPoints[a].y)
            ctx.lineTo(gridPoints[b].x, gridPoints[b].y)
            ctx.stroke()
          }
        }
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,156,255,0.1),transparent_40%)]"></div>

      {/* Canvas for grid animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

