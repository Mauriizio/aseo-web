"use client client"

import { Reveal } from "./reveal"
import { Shield, Users, MapPin, Package, Clock, Award } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Protocolos Claros",
    description: "Procedimientos estandarizados y documentados para cada servicio",
  },
  {
    icon: Users,
    title: "Personal Certificado",
    description: "Equipo capacitado y certificado en todas las áreas de servicio",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Presencia en las principales regiones del país",
  },
  {
    icon: Package,
    title: "Insumos Incluidos",
    description: "Todos los materiales y productos necesarios están incluidos",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description: "Atención y cotización en menos de 24 horas",
  },
  {
    icon: Award,
    title: "15+ Años de Experiencia",
    description: "Trayectoria comprobada en el sector industrial",
  },
]

export function BenefitsSection() {
  return (
    <section id="nosotros" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué <span className="gradient-text">elegirnos?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la calidad, seguridad y satisfacción del cliente
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} direction="left" delay={index * 0.1}>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
