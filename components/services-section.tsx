"use client"

import { Reveal } from "./reveal"
import { motion } from "framer-motion"
import { Building2, Sparkles, Wind, Droplets, Zap, Flame, Wrench } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Aseo Industrial Certificado",
    description: "Limpieza profunda de instalaciones industriales con protocolos certificados y personal capacitado.",
  },
  {
    icon: Sparkles,
    title: "Mantención de Oficinas",
    description: "Planes personalizados de mantención y limpieza para espacios corporativos y oficinas.",
  },
  {
    icon: Droplets,
    title: "Vidrios en Altura",
    description: "Limpieza especializada de vidrios en altura con equipos certificados y medidas de seguridad.",
  },
  {
    icon: Wind,
    title: "Ductería y Clima",
    description: "Limpieza y mantención de sistemas de ventilación, ductos y equipos de climatización.",
  },
  {
    icon: Sparkles,
    title: "Lavado de Alfombras",
    description: "Tratamiento profesional de alfombras y tapices con productos especializados.",
  },
  {
    icon: Zap,
    title: "Electricidad Certificada",
    description: "Servicios eléctricos certificados por la SEC con garantía y cumplimiento normativo.",
  },
  {
    icon: Flame,
    title: "Gasfitería Certificada",
    description: "Instalación y mantención de sistemas de gas certificados según normativa vigente.",
  },
  {
    icon: Wrench,
    title: "Soldadura Certificada",
    description: "Trabajos de soldadura industrial con certificación y estándares de calidad.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales de aseo y mantención industrial con los más altos estándares de calidad
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} direction="up" delay={index * 0.07}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 h-full group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(219,29,34,0.3)]"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
