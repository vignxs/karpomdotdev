"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Globe, Zap, BarChart } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build custom, responsive websites that look great on all devices. Our development process focuses on performance, security, and scalability.",
    icon: <Code className="h-8 w-8" />,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive, engaging user experiences that keep visitors coming back. We focus on user-centered design principles.",
    icon: <Palette className="h-8 w-8" />,
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description:
      "From small shops to large marketplaces, we build e-commerce platforms that drive sales and provide seamless shopping experiences.",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "We optimize your existing websites for speed and performance, ensuring fast load times and smooth user experiences.",
    icon: <Zap className="h-8 w-8" />,
    color: "bg-yellow-500",
  },
  {
    id: 5,
    title: "SEO & Analytics",
    description:
      "Improve your search rankings and gain valuable insights with our SEO and analytics services tailored to your business goals.",
    icon: <BarChart className="h-8 w-8" />,
    color: "bg-red-500",
  },
]

export default function CircularServices() {
  const [activeService, setActiveService] = useState(services[0])
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleServiceClick = (service: (typeof services)[0]) => {
    setActiveService(service)
  }

  // Calculate positions for the circles in a circular arrangement
  const getCirclePosition = (index: number, total: number) => {
    // Start from the top (270 degrees) and go clockwise
    const angleStep = (2 * Math.PI) / total
    const angle = -Math.PI / 2 + index * angleStep

    // Radius of the circle
    const radius = 120

    // Calculate x and y positions
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return { x, y }
  }

  return (
    <section className="py-20 md:py-32 bg-accent/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in a range of web development services to help your business succeed online. Click on each
            service to learn more.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Circular service selector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[280px] h-[280px] mx-auto">
              {/* Center circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center z-10"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white">
                  {activeService.icon}
                </div>
              </motion.div>

              {/* Outer circles */}
              {services.map((service, index) => {
                const position = getCirclePosition(index, services.length)

                return (
                  <motion.div
                    key={service.id}
                    className={`absolute w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      activeService.id === service.id ? service.color : "bg-muted hover:bg-muted/80"
                    }`}
                    style={{
                      top: `calc(50% + ${position.y}px)`,
                      left: `calc(50% + ${position.x}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => handleServiceClick(service)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`text-white ${activeService.id === service.id ? "" : "opacity-70"}`}>
                      {service.icon}
                    </div>
                  </motion.div>
                )
              })}

              {/* Connection lines */}
              <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
                {services.map((service, index) => {
                  const position = getCirclePosition(index, services.length)

                  return (
                    <motion.line
                      key={`line-${service.id}`}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${position.x}px)`}
                      y2={`calc(50% + ${position.y}px)`}
                      stroke={activeService.id === service.id ? "#3b82f6" : "#d1d5db"}
                      strokeWidth="2"
                      strokeDasharray={activeService.id === service.id ? "0" : "5,5"}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                    />
                  )
                })}
              </svg>
            </div>
          </motion.div>

          {/* Service description */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">{activeService.title}</h3>
                <p className="text-muted-foreground">{activeService.description}</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Custom solutions tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Experienced team of developers and designers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Ongoing support and maintenance</span>
                  </li>
                </ul>
                <Button asChild className="group">
                  <Link href="#contact">
                    Learn more about {activeService.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
