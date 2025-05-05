"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive web development solutions tailored to your business needs, helping you achieve your
            digital goals.
          </p>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" className="gap-2">
              <ArrowDown className="h-4 w-4" />
              See all services
            </Button>
            <Button asChild>
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-6 gap-4">
          {/* Top Row */}
          <motion.div
            className="col-span-6 md:col-span-3 lg:col-span-2 rounded-xl overflow-hidden relative h-64 bg-slate-600"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/placeholder.svg?height=400&width=600" alt="Modern building" fill className="object-cover" />
            <div className="absolute top-4 left-4">
              <div className="text-white font-bold text-xl">Web Design</div>
            </div>
            <div className="absolute bottom-4 left-4">
              <Button variant="link" className="text-white p-0 flex items-center gap-1 hover:gap-2 transition-all">
                Read more <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-3 lg:col-span-2 rounded-xl bg-secondary p-6 flex flex-col justify-center items-center text-center hover-lift"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
            <div className="text-muted-foreground">Websites Delivered</div>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-3 lg:col-span-2 rounded-xl bg-secondary p-6 flex flex-col justify-center items-center text-center hover-lift"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
            <div className="text-muted-foreground">Years Experience</div>
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            className="col-span-3 md:col-span-3 lg:col-span-2 rounded-xl bg-secondary p-6 flex flex-col justify-center items-center text-center hover-lift"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-3 lg:col-span-2 rounded-xl bg-secondary p-6 flex flex-col justify-center items-center text-center hover-lift"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">10</div>
            <div className="text-muted-foreground">Industry Awards</div>
          </motion.div>

          <motion.div
            className="col-span-6 md:col-span-3 lg:col-span-2 rounded-xl overflow-hidden relative h-64 bg-slate-600"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Curved glass building"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <div className="text-white font-bold text-xl">Web Development</div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Button variant="link" className="text-white p-0 flex items-center gap-1 hover:gap-2 transition-all">
                Read more <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
