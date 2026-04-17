"use client"

import { Reveal } from "./reveal"
import { motion } from "framer-motion"
import { Building2, Sparkles, Wind, Droplets, Zap, Flame, Wrench } from "lucide-react"
import Image from "next/image"

const services = [
  { icon: Zap, title: "Fabricación de Campanas Industriales a medida", description: "Diseño y fabricación de campanas industriales a medida para necesidades específicas.", image: "services/1.png" },
  { icon: Flame, title: "Limpieza de Campanas Industriales", description: "Servicios de limpieza para campanas industriales.", image: "services/2.png" },
  { icon: Wind, title: "Venta de motores de extracción", description: "Venta de motores de extracción para sistemas de ventilación industrial.", image: "services/3.png" },
  { icon: Sparkles, title: "Limpieza de motores de extracción", description: "Servicios de limpieza para motores de extracción.", image: "services/4.png" },
  { icon: Sparkles, title: "Fabricación e Instalación de ductos de ventilación", description: "Diseño y fabricación de ductos de ventilación para sistemas industriales.", image: "services/5.png" },
  { icon: Building2, title: "Limpieza de ductos", description: "Servicios de limpieza para ductos de ventilación.", image: "services/6.png" },
  { icon: Droplets, title: "Venta de desengrasante industrial", description: "Venta de desengrasantes industriales para aplicaciones específicas.", image: "services/7.png" },
  { icon: Wrench, title: "Venta de lavaloza industrial y papelería", description: "Venta de lavaloza industrial y papelería (Nova y Confort).", image: "services/8.png" },
]   

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="
        relative overflow-hidden bg-[#0B0F1A]
        pt-16 md:pt-18 lg:pt-20  
        pb-20
      "
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#0d1220] to-[#0B0F1A]/95" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal direction="up" className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Soluciones integrales de aseo y mantención industrial con los más altos estándares de calidad
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} direction="up" delay={index * 0.07}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  relative rounded-2xl h-full min-h-[350px]
                  group cursor-pointer transition-all duration-300 overflow-hidden
                  border border-gray-800 hover:border-primary neon-border
                "
              >
                {/* Cinta roja superior */}
                <div className="absolute top-0 left-0 z-20 w-0 h-0 border-t-[72px] border-t-[#DB1D22] border-r-[72px] border-r-transparent" />

                {/* Imagen de fondo */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent group-hover:from-black/95 transition-all duration-300" />
                </div>

                {/* Ícono superior derecho */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-primary/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="w-4 h-4 text-white" />
                </div>

                {/* Contenido alineado */}
                <div
                  className="
                    absolute inset-0 z-10 p-6
                    grid gap-2 content-end
                    [grid-template-rows:minmax(0,1fr)_56px_72px]
                    sm:[grid-template-rows:minmax(0,1fr)_56px_72px]
                  "
                >
                  <h3
                    className="
                      row-start-2
                      text-xl font-semibold text-white leading-tight tracking-tight
                      line-clamp-2 overflow-hidden
                    "
                  >
                    {service.title}
                  </h3>

                  <p className="row-start-3 text-white/90 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
