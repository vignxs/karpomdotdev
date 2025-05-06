"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with seamless checkout experience",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Intuitive dashboard for a SaaS application with real-time analytics",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Minimalist portfolio website for a creative professional",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
]

export default function Works() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of our recent projects that showcase our expertise in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
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

  return (
    <motion.div
      ref={ref}
      className="group rounded-xl overflow-hidden bg-background border shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <Button variant="link" className="p-0" asChild>
          <Link href={`/projects/${project.id}`}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
