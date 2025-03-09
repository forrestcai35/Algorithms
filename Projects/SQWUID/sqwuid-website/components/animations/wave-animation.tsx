"use client"

import { useEffect, useRef } from "react"

export default function WaveAnimation() {
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

    // Mouse position tracking
    let mouseX = canvas.width * 0.7
    let mouseY = canvas.height * 0.4

    // Add mouse move event listener
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Wave properties
    const waves = [
      { y: canvas.height * 0.3, amplitude: 20, frequency: 0.02, speed: 0.05, color: "rgba(156, 156, 255, 0.1)" },
      { y: canvas.height * 0.5, amplitude: 30, frequency: 0.01, speed: 0.03, color: "rgba(156, 156, 255, 0.15)" },
      { y: canvas.height * 0.7, amplitude: 15, frequency: 0.03, speed: 0.07, color: "rgba(156, 156, 255, 0.1)" },
    ]

    // Squid properties
    const squid = {
      x: canvas.width * 0.7,
      y: canvas.height * 0.4,
      targetX: canvas.width * 0.7,
      targetY: canvas.height * 0.4,
      size: canvas.height * 0.25,
      tentacleCount: 6,
      tentacleLength: canvas.height * 0.15,
      tentacleWidth: 8,
      waveSpeed: 0.07, // Reduced from 0.1 to 0.07
      moveSpeed: 0.02, // Reduced from 0.05 to 0.02
      bodyColor: "rgba(156, 156, 255, 0.8)",
      eyeColor: "rgba(255, 255, 255, 0.9)",
      tentacleColor: "rgba(156, 156, 255, 0.6)",
      bubbles: [],
    }

    // Create initial bubbles
    for (let i = 0; i < 15; i++) {
      squid.bubbles.push({
        x: squid.x + (Math.random() * squid.size - squid.size / 2),
        y: squid.y + squid.size / 2,
        radius: 2 + Math.random() * 6,
        speed: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.4,
      })
    }

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update squid target position based on mouse
      squid.targetX = mouseX
      squid.targetY = mouseY

      // Smooth movement toward target
      squid.x += (squid.targetX - squid.x) * squid.moveSpeed
      squid.y += (squid.targetY - squid.y) * squid.moveSpeed

      // Draw waves
      waves.forEach((wave) => {
        ctx.fillStyle = wave.color
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.fill()
      })

      // Draw squid
      drawSquid(ctx, squid, time)

      // Update bubbles
      updateBubbles(squid)

      time += 0.03 // Reduced from 0.05 to 0.03
      requestAnimationFrame(animate)
    }

    // Draw the squid
    function drawSquid(ctx, squid, time) {
      // Make squid gently float up and down
      const floatY = Math.sin(time * 0.5) * 15

      // Calculate movement direction for tentacle dynamics
      const dx = squid.targetX - squid.x
      const dy = squid.targetY - squid.y
      const movementAngle = Math.atan2(dy, dx)
      const movementIntensity = Math.min(1, Math.sqrt(dx * dx + dy * dy) / 100)

      // Draw pointed head
      ctx.fillStyle = squid.bodyColor
      ctx.beginPath()

      // Top point of the head
      const topX = squid.x
      const topY = squid.y - squid.size * 0.6 + floatY

      // Bottom of the head
      const bottomX = squid.x
      const bottomY = squid.y + squid.size * 0.4 + floatY

      // Control points for the sides
      const leftControlX = squid.x - squid.size * 0.4
      const rightControlX = squid.x + squid.size * 0.4
      const controlY = squid.y + floatY

      // Draw the pointed head shape
      ctx.moveTo(topX, topY)
      ctx.quadraticCurveTo(rightControlX, controlY, bottomX, bottomY)
      ctx.quadraticCurveTo(leftControlX, controlY, topX, topY)
      ctx.fill()

      // Draw eyes
      const eyeSize = squid.size * 0.08
      const eyeOffset = squid.size * 0.15

      // Left eye
      ctx.fillStyle = squid.eyeColor
      ctx.beginPath()
      ctx.arc(squid.x - eyeOffset, squid.y - squid.size * 0.1 + floatY, eyeSize, 0, Math.PI * 2)
      ctx.fill()

      // Right eye
      ctx.beginPath()
      ctx.arc(squid.x + eyeOffset, squid.y - squid.size * 0.1 + floatY, eyeSize, 0, Math.PI * 2)
      ctx.fill()

      // Draw pupils - follow mouse direction
      const pupilOffset = eyeSize * 0.3 * movementIntensity
      const pupilXOffset = Math.cos(movementAngle) * pupilOffset
      const pupilYOffset = Math.sin(movementAngle) * pupilOffset

      ctx.fillStyle = "rgba(0, 0, 255, 0.8)"

      // Left pupil
      ctx.beginPath()
      ctx.arc(
        squid.x - eyeOffset + pupilXOffset,
        squid.y - squid.size * 0.1 + floatY + pupilYOffset,
        eyeSize * 0.5,
        0,
        Math.PI * 2,
      )
      ctx.fill()

      // Right pupil
      ctx.beginPath()
      ctx.arc(
        squid.x + eyeOffset + pupilXOffset,
        squid.y - squid.size * 0.1 + floatY + pupilYOffset,
        eyeSize * 0.5,
        0,
        Math.PI * 2,
      )
      ctx.fill()

      // Draw tentacles
      for (let i = 0; i < squid.tentacleCount; i++) {
        const angle = (i / squid.tentacleCount) * Math.PI
        const startX = squid.x + Math.cos(angle) * (squid.size * 0.2)
        const startY = squid.y + Math.sin(angle) * (squid.size * 0.2) + squid.size * 0.2 + floatY

        // Add movement influence to tentacles
        const movementEffect = Math.cos(angle - movementAngle) * movementIntensity * 20

        // Create a wavy tentacle
        ctx.strokeStyle = squid.tentacleColor
        ctx.lineWidth = squid.tentacleWidth
        ctx.lineCap = "round"

        ctx.beginPath()
        ctx.moveTo(startX, startY)

        // Create control points for the curve with movement influence
        const waveAmplitude = 15 + Math.sin(time + i) * 10
        const cp1x = startX + Math.cos(angle + Math.sin(time * squid.waveSpeed + i)) * waveAmplitude - movementEffect
        const cp1y = startY + squid.tentacleLength * 0.4
        const cp2x =
          startX +
          Math.cos(angle + Math.sin(time * squid.waveSpeed + i + 1)) * waveAmplitude * 1.5 -
          movementEffect * 1.5
        const cp2y = startY + squid.tentacleLength * 0.7
        const endX =
          startX + Math.cos(angle + Math.sin(time * squid.waveSpeed + i + 2)) * waveAmplitude - movementEffect * 2
        const endY = startY + squid.tentacleLength

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY)
        ctx.stroke()
      }

      // Draw bubbles
      squid.bubbles.forEach((bubble) => {
        ctx.beginPath()
        ctx.fillStyle = `rgba(156, 156, 255, ${bubble.opacity})`
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Update bubble positions
    function updateBubbles(squid) {
      squid.bubbles.forEach((bubble) => {
        bubble.y -= bubble.speed

        // Add slight horizontal movement
        bubble.x += Math.sin(time * 0.2) * 0.5

        // Reset bubble when it goes off screen
        if (bubble.y < 0) {
          bubble.y = squid.y + squid.size / 2
          bubble.x = squid.x + (Math.random() * squid.size - squid.size / 2)
          bubble.radius = 2 + Math.random() * 6
          bubble.speed = 0.5 + Math.random() * 1.5
        }
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(156,156,255,0.1),transparent_40%)]"></div>

      {/* Canvas for wave animation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

