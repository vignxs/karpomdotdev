"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react"

// Sample project data
const projects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with seamless checkout experience",
    fullDescription:
      "We built a comprehensive e-commerce solution for a retail client that increased their online sales by 45%. The platform features a responsive design, advanced product filtering, secure payment processing, and a custom CMS for easy product management.",
    image: "/505shots_so.png?height=800&width=1200",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
    link: "https://example.com",
    github: "https://github.com",
    features: [
      "Responsive design for all devices",
      "Advanced product filtering and search",
      "Secure payment processing",
      "Customer account management",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Intuitive dashboard for a SaaS application with real-time analytics",
    fullDescription:
      "We designed and developed a comprehensive dashboard for a SaaS company that provides real-time analytics and user management. The dashboard includes customizable widgets, data visualization tools, and a robust notification system.",
    image: "https://img.freepik.com/free-vector/aquarium-banner-with-girl-watching-cute-fish_107791-14501.jpg?height=600&width=800",
    technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
    link: "https://example.com",
    github: "https://github.com",
    features: [
      "Real-time data visualization",
      "User management and permissions",
      "Customizable dashboard widgets",
      "Automated reporting",
      "Integration with third-party services",
      "Dark and light mode support",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Minimalist portfolio website for a creative professional",
    fullDescription:
      "We created a stunning portfolio website for a photographer that showcases their work in a clean, minimalist design. The site features smooth animations, a responsive gallery, and integrated contact form.",
    image: "https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg?height=600&width=800",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    link: "https://example.com",
    github: "https://github.com",
    features: [
      "Responsive image gallery",
      "Smooth page transitions",
      "Contact form with validation",
      "Blog section with CMS integration",
      "SEO optimization",
      "Fast loading times",
    ],
  },
]

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { id } = params
  const project = projects.find((p) => p.id === id) || projects[0]

  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center (in -1 to 1 range)
    const mouseXFromCenter = (e.clientX - centerX) / (rect.width / 2)
    const mouseYFromCenter = (e.clientY - centerY) / (rect.height / 2)

    // Set rotation values (limited to -15 to 15 degrees)
    setRotateY(mouseXFromCenter * 15)
    setRotateX(-mouseYFromCenter * 15)

    // Set mouse position for shine effect (relative to card)
    setMouseX(e.clientX - rect.left)
    setMouseY(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    // Smoothly reset rotation when mouse leaves
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <Button variant="ghost" asChild className="group mb-4">
            <Link href="/#works">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div
              ref={cardRef}
              className="relative rounded-xl overflow-hidden border shadow-lg"
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ transformStyle: "preserve-3d" }}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  style={{
                    transform: "translateZ(20px)",
                    transition: "transform 0.1s ease-out",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)`,
                    opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
                    transition: "opacity 0.3s ease-out",
                  }}
                ></div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Button asChild className="group">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View Code
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-8">{project.fullDescription}</p>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-4">The Process</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our development process began with a thorough understanding of the client&apos;s requirements and target
                  audience. We created wireframes and prototypes to visualize the user experience before moving into
                  development.
                </p>
                <p className="text-muted-foreground">
                  The development phase focused on creating a responsive, accessible, and performant application. We
                  implemented best practices for SEO and conducted thorough testing to ensure a bug-free experience.
                </p>
                <p className="text-muted-foreground">
                  After launch, we provided training and documentation to ensure the client could manage the platform
                  effectively. We continue to offer support and maintenance to keep the application running smoothly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
