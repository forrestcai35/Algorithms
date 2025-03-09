"use client"

import { useEffect, useRef } from "react"

export default function TeamAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const nodes = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create team nodes
    class Node {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 6 + 3
        this.speedX = (Math.random() - 0.5) * 1
        this.speedY = (Math.random() - 0.5) * 1
        this.color = `rgba(156, 156, 255, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        // Move nodes
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < 25; i++) {
        nodes.push(new Node())
      }
    }

    init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines between nodes
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x
          const dy = nodes[a].y - nodes[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(156, 156, 255, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[a].x, nodes[a].y)
            ctx.lineTo(nodes[b].x, nodes[b].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update()
        nodes[i].draw()
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(156,156,255,0.15),transparent_50%)]"></div>

      {/* Canvas for team network animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="rgba(156, 156, 255, 0.8)">
          {/* Squid head */}
          <ellipse cx="100" cy="70" rx="50" ry="60" />
          
          {/* Squid eyes */}
          <circle cx="80" cy="50" r="8" fill="#fff" />
          <circle cx="120" cy="50" r="8" fill="#fff" />
          <circle cx="80" cy="50" r="4" fill="#000" />
          <circle cx="120" cy="50" r="4" fill="#000" />
          
          {/* Squid tentacles */}
          <path d="M60,110 Q50,150 40,180" strokeWidth="6" stroke="rgba(156, 156, 255, 0.8)" fill="none" />
          <path d="M70,115 Q65,160 50,190" strokeWidth="6" stroke="rgba(156, 156, 255, 0.8)" fill="none" />
          <path d="M85,120 Q85,165 80,195" strokeWidth="6" stroke="rgba(156, 156, 255, 0.8)" fill="none" />
          <path d="M100,125 Q100,170 105,200" strokeWidth="6" stroke="rgba(156, 156, 255, 0.8)" fill="none" />
          <path d="M115,120 Q115,165 120,195" strokeWidth="6" stroke="rgba(156, 156, 255, 0.8)" fill="none" />
          <path d="M130,115 Q135,160 150,190" strokeWidth="6" stroke="rgba(156, 156, 255, 0.8)" fill="none" />
          <path d="M140,110 Q150,150 160,180" strokeWidth="6" stroke="rgba(156, 156, 255, 0.8)" fill="none" />
        </svg>
    </div>
  )
}

