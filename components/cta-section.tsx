"use client"

import { Reveal } from "./reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ctaGradient)"
            d="M0,200 C320,300 420,100 720,200 C1020,300 1120,100 1440,200 L1440,0 L0,0 Z"
          />
          <defs>
            <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DB1D22" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#DB1D22" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para una <span className="gradient-text">mantención impecable?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contáctanos hoy y recibe una cotización personalizada para tus necesidades de aseo y mantención industrial
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-lg group"
          >
            <a href="#contacto">
              Solicitar Cotización
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
