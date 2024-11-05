'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const MEMORY_SIZE = 64
const DECAY_RATE = 0.1

export default function ColdBootSimulator() {
  const [memory, setMemory] = useState<string[]>(Array(MEMORY_SIZE).fill('0'))
  const [isPoweredOn, setIsPoweredOn] = useState(true)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    if (!isPoweredOn) {
      const interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
        setMemory((prev) =>
          prev.map((bit) => (Math.random() < DECAY_RATE ? '0' : bit))
        )
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setElapsedTime(0)
    }
  }, [isPoweredOn])

  const togglePower = () => {
    setIsPoweredOn((prev) => !prev)
  }

  const writeSecret = () => {
    const secret = '1'.repeat(16).split('')
    setMemory((prev) => [...prev.slice(0, 24), ...secret, ...prev.slice(40)])
  }

  return (
    <HeroHighlight>

    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Cold Boot Attack Simulator</CardTitle>
        <CardDescription>
          This simulator demonstrates the concept of data remanence in RAM, which is exploited in cold boot attacks.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-8 gap-1 mb-4">
          {memory.map((bit, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center border ${
                bit === '1' ? 'bg-blue-500 text-white' : 'bg-slate-500'
              }`}
            >
              {bit}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Power: {isPoweredOn ? 'On' : 'Off'}</span>
          <span>Time since power off: {elapsedTime}s</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={togglePower}>
          {isPoweredOn ? 'Power Off' : 'Power On'}
        </Button>
        <Button onClick={writeSecret} disabled={!isPoweredOn}>
          Write Secret Data
        </Button>
      </CardFooter>
    </Card>
    </HeroHighlight>
  )
}