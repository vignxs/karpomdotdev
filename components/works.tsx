"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample project data - replace with your actual projects
const projects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with seamless checkout experience",
    image: "https://img.freepik.com/free-vector/aquarium-banner-with-girl-watching-cute-fish_107791-14501.jpg?height=600&width=800",
    link: "/projects/ecommerce-platform",
    category: "E-commerce",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Intuitive dashboard for a SaaS application with real-time analytics",
    image: "https://img.freepik.com/free-vector/smart-home-management-application_23-2148621994.jpg?height=600&width=800",
    link: "/projects/saas-dashboard",
    category: "Web App",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Minimalist portfolio website for a creative professional",
    image: "https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg?height=600&width=800",
    link: "/projects/portfolio-website",
    category: "Portfolio",
  },
]

export default function Works() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="works" className="py-20 md:py-32 bg-accent/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of our recent projects that showcase our expertise in web development.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardRef = useRef<HTMLDivElement>(null)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    setMouseX(x)
    setMouseY(y)
  }

  const handleMouseLeave = () => {
    setMouseX(0.5)
    setMouseY(0.5)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        ref={cardRef}
        className="relative bg-background border rounded-xl overflow-hidden h-full flex flex-col"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-primary/80 text-primary-foreground rounded-full text-xs font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Image container */}
        <div className="relative h-56 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(circle at ${mouseX * 100}% ${
                mouseY * 100
              }%, rgba(59, 130, 246, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%)`,
            }}
          ></div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{
              transform: `scale(1.01) translateX(${(mouseX - 0.5) * -10}px) translateY(${(mouseY - 0.5) * -10}px)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          <Button variant="link" className="p-0 group mt-auto" asChild>
            <Link href={project.link}>
              View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Hover effect overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 30px rgba(59, 130, 246, 0.2)",
          }}
        ></div>
      </div>
    </motion.div>
  )
}
