"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-8">
        {/* Circle */}
        <motion.div
          className="loader"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.5
          }}
        >
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle 
              cx="40" 
              cy="40" 
              r="32" 
              fill="none" 
              stroke="#f0f0f0" 
              strokeWidth="4"
            />
          </svg>
        </motion.div>

        {/* Triangle */}
        <motion.div
          className="loader"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.5,
            delay: 0.3
          }}
        >
          <svg viewBox="0 0 86 80" width="60" height="60">
            <polygon 
              points="43 8 79 72 7 72" 
              fill="none" 
              stroke="#f0f0f0" 
              strokeWidth="4"
            />
          </svg>
        </motion.div>

        {/* Square */}
        <motion.div
          className="loader"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.5,
            delay: 0.6
          }}
        >
          <svg viewBox="0 0 80 80" width="60" height="60">
            <rect 
              x="8" 
              y="8" 
              width="64" 
              height="64" 
              fill="none" 
              stroke="#f0f0f0" 
              strokeWidth="4"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute mt-40">


      </div>
    </motion.div>
  )
}

