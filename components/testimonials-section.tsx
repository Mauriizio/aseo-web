"use client"

import { Reveal } from "./reveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Luis Soto",
    company: "Empresa Industrial",
    text: "Nada que decir, súper buena página. Estoy súper contento por el trabajo que asen. 100% recomendados",
    rating: 5,
    time: "hace 7 meses",
  },
  {
    name: "Titi Moraga",
    company: "Oficinas Corporativas",
    text: "Son un equipo de excelente calidad, lo mejor de todo que solucionan todo lo que cumplen lo que prometen. 100% recomendados",
    rating: 5,
    time: "hace 8 meses",
  },
  {
    name: "Mony Saavedra",
    company: "Centro Comercial",
    text: "Desde que comenzamos a trabajar con la agencia a cambiado el flujo de contactos que teníamos, son muy responsables y atentos con...",
    rating: 5,
    time: "hace 8 meses",
  },
  {
    name: "Manuel Alfaro",
    company: "Edificio Corporativo",
    text: "Ha sido una experiencia notable. Hemos superado 3 veces las interacciones con clientes, aumentado los seguidores y las...",
    rating: 5,
    time: "hace 9 meses",
  },
]

export function TestimonialsSection() {
  return (
    <section id="casos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} direction="right" delay={index * 0.1}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(219,29,34,0.3)]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 flex-grow leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.time}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
