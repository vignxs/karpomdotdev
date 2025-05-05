"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Sparkles, Globe, Zap } from "lucide-react"

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const headlines = ["We Build Digital Experiences", "We Create Stunning Websites", "We Develop Web Applications"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-tr-full"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full w-fit"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Award-winning web development agency</span>
            </motion.div>

            <div className="relative h-24 md:h-28 mb-6 overflow-hidden">
              {headlines.map((headline, index) => (
                <motion.h1
                  key={headline}
                  className="absolute text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    y: currentIndex === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  {headline}
                </motion.h1>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              We transform ideas into exceptional digital solutions. Our team of experts creates custom websites and
              applications that drive results for businesses of all sizes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Explore Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-primary">250+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - 3D illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl"></div>
              <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="h-8 bg-gray-100 dark:bg-gray-800 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4 h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                  <div className="relative w-full h-full">
                    <div className="absolute top-4 left-4 right-4 h-24 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute top-32 left-4 w-1/2 h-32 bg-primary/5 rounded-lg flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary/80" />
                    </div>
                    <div className="absolute top-32 right-4 w-1/3 h-32 bg-primary/15 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary/90" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-24 bg-primary/5 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/30 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute top-1/2 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-sm text-center text-muted-foreground mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-muted/50 rounded flex items-center justify-center">
                <div className="h-4 w-16 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
