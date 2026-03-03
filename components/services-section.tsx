"use client"

import { Reveal } from "./reveal"
import { motion } from "framer-motion"
import { Building2, Sparkles, Wind, Droplets, Zap, Flame, Wrench } from "lucide-react"
import Image from "next/image"

const services = [
  { icon: Zap, title: "Electricidad", description: "Servicios eléctricos domiciliarios e industriales.", image: "/images/services/electricidad2.png" },
  { icon: Flame, title: "Gasfitería", description: "Servicios de gasfitería para instalaciones residenciales e industriales.", image: "/images/services/gasfiter.png" },
  { icon: Wind, title: "Ductos & Campanas (Residencial e Industrial)", description: "Instalación y limpiezas, ductos, campanas de cocina y motores de extracción.", image: "/images/services/ductoss.png" },
  { icon: Sparkles, title: "Persianas Electricas", description: "Cortinas Roller, Persianas Electricas y Manuales, Termopanel, Aluminio y PVC.", image: "/images/services/persianas.png" },
  { icon: Sparkles, title: "Tratamientos Acrílicos en Pisos", description: "Aplicación de tratamientos acrílicos e impermeabilizantes para pisos industriales y residenciales.", image: "/images/services/acrilico.png" },
  { icon: Building2, title: "Personal de Aseo", description: "Personal de aseo capacitado para mantener la limpieza en entornos administrativos e industriales.", image: "/images/services/personal.png" },
  { icon: Droplets, title: "Limpieza de Vidrios en Altura", description: "Servicios especializados en limpieza de vidrios.", image: "/images/services/vidrios.png" },
  { icon: Wrench, title: "Soldadura", description: "Servicios de soldadura para proyectos comerciales e industriales.", image: "/images/services/soldadura.png" },
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
