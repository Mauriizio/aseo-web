"use client"

import type React from "react"

import { Reveal } from "./reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // TODO: Integrar con webhook (n8n / Resend / API interna)
    alert("Gracias por tu mensaje. Te contactaremos pronto.")
  }

  return (
    <section
      id="contacto"
      className="
        relative py-20 md:py-24
        bg-white
        border-t border-black/5
        overflow-hidden
      "
    >
      {/* Textura sutil + acentos suaves de marca */}
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
        <Reveal direction="up" className="text-center mb-14 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Conversemos sobre tu <span className="text-primary">próximo proyecto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos listos para ayudarte. Contáctanos por cualquiera de nuestros canales.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Reveal direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Información de Contacto</h3>

              <div className="space-y-4">
                <a
                  href="tel:+56995554242"
                  className="
                    flex items-center gap-4 p-4
                    rounded-2xl bg-white
                    border border-gray-200 hover:border-gray-300
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    transition-all duration-300 group
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="font-semibold text-gray-900 select-all">+56 9 9555 4242</p>
                  </div>
                </a>

                <a
                  href="mailto:aseomarketspa@gmail.com"
                  className="
                    flex items-center gap-4 p-4
                    rounded-2xl bg-white
                    border border-gray-200 hover:border-gray-300
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    transition-all duration-300 group
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900 break-all">aseomarketspa@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Los+Militares+5620+Of.+905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-4 p-4
                    rounded-2xl bg-white
                    border border-gray-200 hover:border-gray-300
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    transition-all duration-300 group
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Dirección</p>
                    <p className="font-semibold text-gray-900">Los Militares 5620 Of. 905</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/56995554242?text=Hola%20Aseo%20Market%2C%20necesito%20una%20cotizaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-4 p-4
                    rounded-2xl bg-white
                    border-2 border-green-600/50 hover:border-green-600/80
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_8px_30px_rgba(34,197,94,0.25)]
                    transition-all duration-300 group
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-green-600/15 flex items-center justify-center group-hover:bg-green-600/25 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-semibold text-green-700">Chatear ahora</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="
                rounded-2xl p-6 sm:p-8 space-y-6
                bg-white
                border border-gray-200 hover:border-gray-300
                shadow-[0_6px_28px_rgba(0,0,0,0.06)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                transition-all duration-300
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-gray-300 focus-visible:ring-primary"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-gray-300 focus-visible:ring-primary"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-gray-300 focus-visible:ring-primary"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-gray-300 focus-visible:ring-primary min-h-[120px]"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <Button
                type="submit"
                className="
                  w-full rounded-full
                  bg-primary hover:bg-primary/90 text-primary-foreground
                  shadow-[0_10px_30px_rgba(219,29,34,0.25)]
                "
                size="lg"
              >
                Enviar Mensaje
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
