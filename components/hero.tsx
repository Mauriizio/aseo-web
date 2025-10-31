"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Shield } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      className="
        relative min-h-[100svh] max-h-[900px]
        flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-[#0b0f1a] via-[#1a1f2e] to-[#0b0f1a]
        pt-28 md:pt-32 pb-20
      "
    >
      {/* Background Image (public/hero/hero.png) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlays para legibilidad (más sutiles) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Vignette muy ligera */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.45)_100%)]" />
        {/* Tinte de marca sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1a]/20 via-transparent to-[#0b0f1a]/15" />
      </div>

      {/* Fondo animado (más tenue) */}
      <div className="absolute inset-0 z-10 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <svg
          className="absolute inset-0 w-full h-full wave-bg opacity-15"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            d="M0,400 C320,500 420,300 720,400 C1020,500 1120,300 1440,400 L1440,800 L0,800 Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DB1D22" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#DB1D22" stopOpacity="0.22" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content (encerrado en tarjeta) */}
      <div className="container mx-auto px-3 sm:px-4 z-20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Card del hero con margen/espacio respecto al header */}
          <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)] px-6 sm:px-10 py-10 sm:py-14">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 shadow-lg mb-8"
            >
              <Shield className="w-4 h-4 text-primary drop-shadow" />
              <span className="text-sm font-medium text-gray-100">Personal Certificado • Cobertura Nacional</span>
            </motion.div>

            {/* Texto centrado dentro de la card */}
            <div className="max-w-5xl mx-auto text-center">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              >
                <span className="gradient-text">Servicios de Aseo</span>
                <br />
                <span className="text-white">Industrial Certificado</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
              >
                Certificados, protocolos claros y respuesta rápida. Más de 15 años brindando soluciones profesionales de
                aseo y mantención industrial.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base shadow-lg shadow-primary/20"
                >
                  <a href="#servicios">Ver Servicios</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base border-2 border-white/20 hover:bg-white/10 bg-white/5 backdrop-blur-sm text-white shadow-lg"
                >
                  <a href="#contacto">Cotizar Ahora</a>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>15+ años de experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Personal certificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Respuesta en 24hrs</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  )
}
