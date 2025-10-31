"use client"

import { Reveal } from "./reveal"
import { motion } from "framer-motion"
import { Building2, Sparkles, Wind, Droplets, Zap, Flame, Wrench } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Zap,
    title: "Electricidad Certificada",
    description: "Servicios eléctricos certificados para instalaciones residenciales e industriales.",
    image: "/images/services/electricidad2.png",
  },
  {
    icon: Flame,
    title: "Gasfitería Certificada",
    description: "Servicios de gasfitería certificados para instalaciones residenciales e industriales.",
    image: "/images/services/gasfiter.png",
  },
  {
    icon: Wind,
    title: "Ductos de ventilación",
    description: "Instalación y limpieza de ductos de ventilación, campanas de cocina y motores de extracción.",
    image: "/images/services/ductos-ventilacion.jpg",
  },
  {
    icon: Sparkles,
    title: "Barrido de Grandes Superficies",
    description: "Servicios de barrido y limpieza para grandes superficies industriales y comerciales.",
    image: "/images/services/barrido-superficies.jpg",
  },
  {
    icon: Sparkles,
    title: "Tratamientos Acrílicos",
    description: "Aplicación de tratamientos acrílicos para pisos industriales, mejorando su durabilidad y apariencia.",
    image: "/images/services/tratamientos-acrilicos.jpg",
  },
  {
    icon: Building2,
    title: "Personal de Aseo Certificado",
    description:
      "Personal de aseo certificado y capacitado para mantener la limpieza en entornos administrativos e industriales.",
    image: "/images/services/personal-aseo.jpg",
  },
  {
    icon: Droplets,
    title: "Limpieza de Vidrios en Altura",
    description: "Servicios especializados de limpieza de vidrios en altura con equipos y técnicas seguras.",
    image: "/images/services/vidrios-altura.jpg",
  },
  {
    icon: Wrench,
    title: "Soldadura Certificada",
    description: "Servicios de soldadura certificados para proyectos industriales y comerciales.",
    image: "/images/services/soldadura.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-[#0B0F1A]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#0d1220] to-[#0B0F1A]" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Soluciones integrales de aseo y mantención industrial con los más altos estándares de calidad
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} direction="up" delay={index * 0.07}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative rounded-2xl h-full min-h-[380px] group cursor-pointer transition-all duration-300 overflow-hidden border border-gray-800 hover:border-primary neon-border"
              >
                <div className="absolute top-0 left-0 z-20 w-0 h-0 border-t-[80px] border-t-[#DB1D22] border-r-[80px] border-r-transparent" />

                {/* <div className="absolute top-2 left-2 z-30 w-16 h-8">
                  <Image
                    src="/logo.png"
                    alt="AseoMarket Logo"
                    fill
                    className="object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                  />
                </div> */}

                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-300" />
                </div>

                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-primary/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="w-4 h-4 text-white" />
                </div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
