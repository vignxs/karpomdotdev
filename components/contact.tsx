"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-accent/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let&apos;s discuss how we can help bring your vision to
            life.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">vignxs@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 7639290579</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Office</h4>
                  <p className="text-muted-foreground">15/10, Mela Thoppu Street, 609307</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
