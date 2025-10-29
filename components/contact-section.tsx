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
    // TODO: Integrate with n8n webhook
    alert("Gracias por tu mensaje. Te contactaremos pronto.")
  }

  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conversemos sobre tu <span className="gradient-text">próximo proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte. Contáctanos por cualquiera de nuestros canales
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Reveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+56995554242"
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-secondary/50 transition-all duration-300 group border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(219,29,34,0.2)]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="font-semibold">+56 9 9555 4242</p>
                    </div>
                  </a>

                  <a
                    href="mailto:aseomarketspa@gmail.com"
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-secondary/50 transition-all duration-300 group border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(219,29,34,0.2)]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">aseomarketspa@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Los+Militares+5620+Of.+905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-secondary/50 transition-all duration-300 group border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(219,29,34,0.2)]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Dirección</p>
                      <p className="font-semibold">Los Militares 5620 Of. 905</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/56995554242?text=Hola%20Aseo%20Market%2C%20necesito%20una%20cotizaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-green-600/20 transition-all duration-300 group border-2 border-green-600/50 hover:border-green-600/80 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-semibold text-green-500">Chatear ahora</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(219,29,34,0.2)]"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background/50"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 min-h-[120px]"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                size="lg"
              >
                Enviar Mensaje
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
