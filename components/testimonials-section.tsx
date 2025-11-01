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
    time: "cliente desde 2018",
  },
  {
    name: "Valle de Atxondo",
    company: "Inmobiliaria Valle de Atxondo",
    logo: "/client/client2.png",
    text: "Equipo serio y ordenado. Facilitan la operación día a día.",
    rating: 5,
    time: "cliente desde 2010",
  },
  {
    name: "Dentay Chile",
    company: "Clínica Dentay Chile",
    logo: "/client/client5.png",
    text: "Protocolos claros y resultados consistentes. Recomendados.",
    rating: 5,
    time: "cliente desde 2022",
  },
  {
    name: "Comercial Cortesano",
    company: "Comercial Cortesano",
    logo: "/client/client4.png",
    text: "Respuesta rápida y buen trato. Se nota la experiencia.",
    rating: 5,
    time: "cliente desde 2012",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="casos"
      className="
        relative py-24 overflow-hidden
        bg-gradient-to-b from-[#11151c] via-[#0b0e13] to-[#0b0e13]
        border-t border-white/5
      "
    >
      {/* Textura sutil para profundidad */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Lo que dicen{" "}
            <span className="text-primary">nuestros clientes</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Testimonios reales de empresas que confían en nuestro trabajo
          </p>
        </Reveal>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <Reveal key={t.company} direction="up" delay={index * 0.1}>
              <article
                className="
                  flex flex-col rounded-2xl h-full p-6
                  border border-white/10 bg-white/[0.03] backdrop-blur-sm
                  transition-all duration-300
                  hover:bg-white/[0.06] hover:border-primary/40
                  hover:shadow-[0_0_25px_rgba(219,29,34,0.25)]
                "
              >
                {/* Logo + estrellas */}
                <div className="flex items-center justify-between mb-5">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                    <Image
                      src={t.logo}
                      alt={`${t.company} logo`}
                      fill
                      sizes="48px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Texto */}
                <p className="text-gray-200 leading-relaxed mb-6 flex-grow">
                  “{t.text}”
                </p>

                {/* Firma */}
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-white">
                      {t.company}
                    </p>
                    <p className="text-xs text-gray-400">{t.time}</p>
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
