"use client"

import { Reveal } from "./reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall, ClipboardList, Smile } from "lucide-react"

export function CTASection() {
  return (
    <section
      className="
        relative overflow-hidden py-20 md:py-24
        bg-white
        border-t border-black/5
      "
    >
      {/* Textura sutil y acentos de marca */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-red-500/10 blur-3xl" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <Reveal direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            ¿Listo para una <span className="text-primary">mantención impecable</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Sigamos estos pasos simples y te enviamos una cotización personalizada.
          </p>
        </Reveal>

        {/* Pasos (1–2–3) */}
        <Reveal direction="up" delay={0.1}>
          <ol
            className="
              grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6
              max-w-5xl mx-auto mb-10
            "
          >
            {/* Paso 1 */}
            <li className="group">
              <div
                className="
                  flex items-center gap-4 md:gap-3
                  rounded-2xl border border-gray-200 bg-white
                  hover:border-gray-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition-all p-4 md:p-5
                "
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-semibold text-gray-500">1</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 leading-tight">Cuéntanos tu necesidad</p>
                  <p className="text-sm text-gray-600">Formulario o llamada breve  <br /> Agenda de visita.</p>
                </div>
              </div>
            </li>

            {/* Paso 2 */}
            <li className="group">
              <div
                className="
                  flex items-center gap-4 md:gap-3
                  rounded-2xl border border-gray-200 bg-white
                  hover:border-gray-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition-all p-4 md:p-5
                "
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-semibold text-gray-500">2</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 leading-tight">Plan y propuesta</p>
                  <p className="text-sm text-gray-600">Protocolos claros <br /> Costo transparente.</p>
                </div>
              </div>
            </li>

            {/* Paso 3 */}
            <li className="group">
              <div
                className="
                  flex items-center gap-4 md:gap-3
                  rounded-2xl border border-gray-200 bg-white
                  hover:border-gray-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition-all p-4 md:p-5
                "
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Smile className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-semibold text-gray-500">3</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 leading-tight">Ejecución y seguimiento</p>
                  <p className="text-sm text-gray-600">Personal certificado <br /> Control de calidad.</p>
                </div>
              </div>
            </li>
          </ol>
        </Reveal>

        {/* Botón principal */}
        <Reveal direction="up" delay={0.2} className="text-center">
          <Button
            asChild
            size="lg"
            className="
              rounded-full px-8 text-lg
              bg-primary hover:bg-primary/90 text-primary-foreground
              shadow-[0_10px_30px_rgba(219,29,34,0.35)]
            "
          >
            <a href="#contacto">
              Solicitar Cotización
              <ArrowRight className="ml-2 w-5 h-5 inline align-middle transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Texto de confianza */}
          <p className="mt-4 text-sm text-gray-500">
            Respuesta en menos de 24 horas • Protocolos claros • Personal certificado
          </p>
        </Reveal>
      </div>
    </section>
  )
}
