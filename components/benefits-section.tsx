"use client"

import { Reveal } from "./reveal"
import { Shield, Users, MapPin, Package, Clock, Award } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Protocolos Claros",
    description: "Procedimientos estandarizados y documentados para cada servicio.",
  },
  {
    icon: Users,
    title: "Personal Certificado",
    description: "Equipo capacitado y certificado en todas las áreas de servicio.",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Presencia en las principales regiones del país.",
  },
  {
    icon: Package,
    title: "Insumos Incluidos",
    description: "Todos los materiales y productos necesarios están incluidos.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description: "Atención y cotización en menos de 24 horas.",
  },
  {
    icon: Award,
    title: "25+ Años de Experiencia",
    description: "Trayectoria comprobada en el sector industrial.",
  },
]

export function BenefitsSection() {
  return (
    <section
      id="nosotros"
      className="
        relative py-24
        bg-gradient-to-br from-[#0b0e13] via-[#121621] to-[#0b0e13]
        border-t border-white/5
        overflow-hidden
      "
    >
      {/* Fondo decorativo sutil tipo cuadrícula */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Contenido */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Encabezado */}
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué{" "}
            <span className="text-primary">elegirnos?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tenemos la experiencia necesaria para ofrecer los mejores resultados en el exigente mundo del aseo.
          </p>
        </Reveal>

        {/* Cuadrícula de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} direction="up" delay={index * 0.1}>
              <div
                className="
                  group p-6 sm:p-8 rounded-2xl
                  bg-white/[0.03] border border-white/10
                  hover:bg-white/[0.06] hover:border-white/20
                  transition-all duration-300
                  shadow-[0_6px_25px_rgba(0,0,0,0.2)]
                  flex flex-col items-start gap-4
                "
              >
                <div
                  className="
                    w-14 h-14 flex items-center justify-center
                    rounded-xl bg-primary/10 group-hover:bg-primary/20
                    transition-colors
                  "
                >
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
