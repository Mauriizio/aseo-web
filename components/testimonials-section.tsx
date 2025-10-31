"use client"

import Image from "next/image"
import { Reveal } from "./reveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Clásico El Dante",
    company: "Clásico El Dante",
    logo: "/client/client1.png",
    text: "Muy responsables. Dejan todo impecable y llegan a la hora.",
    rating: 5,
    time: "cliente desde 2023",
  },
  {
    name: "Valle de Atxondo",
    company: "Inmobiliaria Valle de Atxondo",
    logo: "/client/client2.png",
    text: "Equipo serio y ordenado. Facilitan la operación día a día.",
    rating: 5,
    time: "cliente desde 2022",
  },
  {
    name: "Dentay Chile",
    company: "Clínica Dentay Chile",
    logo: "/client/client5.png",
    text: "Protocolos claros y resultados consistentes. Recomendados.",
    rating: 5,
    time: "cliente desde 2021",
  },
  {
    name: "Comercial Cortesano",
    company: "Comercial Cortesano",
    logo: "/client/client4.png",
    text: "Respuesta rápida y buen trato. Se nota la experiencia.",
    rating: 5,
    time: "cliente desde 2020",
  },
]

export function TestimonialsSection() {
  return (
    <section id="casos" className="py-24 relative overflow-hidden">
      {/* Fondo tenue para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios reales de empresas que confían en nuestro trabajo
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <Reveal key={t.company} direction="right" delay={index * 0.1}>
              <article
                className="
                  glass rounded-2xl p-6 h-full flex flex-col
                  border border-white/10 hover:border-primary/50
                  transition-all duration-300
                  hover:shadow-[0_0_24px_rgba(219,29,34,0.25)]
                  bg-card/50
                "
              >
                {/* Encabezado con logo y estrellas */}
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                    <Image
                      src={t.logo}
                      alt={`${t.company} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                {/* Cita */}
                <p className="text-foreground/90 leading-relaxed mb-6 flex-grow">
                  “{t.text}”
                </p>

                {/* Firma */}
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">{t.company}</p>
                    <p className="text-xs text-muted-foreground">{t.time}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
