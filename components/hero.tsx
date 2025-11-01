"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Shield } from "lucide-react"
import Image from "next/image"

const IMAGES = [
  "/hero/hero1.png",
  "/hero/hero2.png",
  "/hero/hero3.png",
  "/hero/hero4.png",
  "/hero/hero5.png",
  "/hero/hero6.png",
  "/hero/hero7.png",
  "/hero/hero8.png",
]

// todas a 3s; si quieres distintas, cambia aquí
const DURATIONS = Array(IMAGES.length).fill(3000) as number[]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => {
        setPrevIndex(prev) // usamos la anterior para el fade-out
        return (prev + 1) % IMAGES.length
      })
    }, DURATIONS[index] ?? 3000)
    return () => clearTimeout(id)
  }, [index])

  return (
    <section
      className="
        relative min-h-[100svh] max-h-[900px]
        flex items-center justify-center overflow-hidden
        bg-[#12161f]
        pt-24 md:pt-28 pb-16
      "
    >
      {/* Background Slideshow sin negro intermedio */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Imagen base (siempre visible) */}
        <Image
          key={`base-${index}`}
          src={IMAGES[index]}
          alt=""
          aria-hidden="true"
          fill
          priority={index === 0}
          sizes="100vw"
          draggable={false}
          className="object-cover object-center brightness-105 contrast-110 saturate-105"
        />

        {/* Imagen anterior para fade-out por encima */}
        <AnimatePresence initial={false}>
          {prevIndex !== null && prevIndex !== index && (
            <motion.div
              key={`fade-${prevIndex}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0"
            >
              <Image
                src={IMAGES[prevIndex]}
                alt=""
                aria-hidden="true"
                fill
                sizes="100vw"
                draggable={false}
                className="object-cover object-center brightness-105 contrast-110 saturate-105"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tarjeta (60% opacidad) */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative">
        <div className="max-w-7xl mx-3 sm:mx-6 lg:mx-8">
          <div
            className="
              rounded-2xl sm:rounded-3xl
              border border-white/15
              bg-black/60 backdrop-blur-sm
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              px-5 sm:px-8 md:px-10
              py-8 sm:py-10 md:py-14
            "
          >
            {/* Certificación + Badge */}
            <div className="mb-6 sm:mb-8 flex items-center justify-center md:justify-start gap-4">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ring-2 ring-white/20 overflow-hidden shadow-lg bg-white">
                <Image
                  src="/cert/seg.webp"
                  alt="Certificación SEG"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 shadow-lg"
              >
                <Shield className="w-4 h-4 text-primary drop-shadow" />
                <span className="text-sm font-medium text-gray-100">
                  Personal Certificado • Cobertura Nacional
                </span>
              </motion.div>
            </div>

            {/* Texto centrado */}
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  font-bold mb-6 leading-tight
                "
              >
                <span className="gradient-text">Mantención y Aseo</span>
                <br />
                <span className="text-white">Industrial Certificado</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="
                  text-base sm:text-lg md:text-xl text-gray-200
                  mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed
                "
              >
                Con mas de 25 años en el rubro, tenemos la experiencia necesaria para obtener los mejores resultados en el exigente mundo del aseo.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base shadow-lg shadow-primary/25"
                >
                  <a href="#servicios">Ver Servicios</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base border-2 border-white/25 hover:bg-white/10 bg-white/5 backdrop-blur-sm text-white shadow-lg"
                >
                  <a href="#contacto">Cotizar Ahora</a>
                </Button>
              </motion.div>

              {/* Indicadores */}
             
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="
    flex flex-col items-start gap-3
    text-sm text-gray-200
    mx-auto w-fit
    sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:gap-6
  "
>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-5 h-5 text-primary" />
    <span>25+ años de experiencia</span>
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

      {/* Scroll Indicator (oculto en mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
