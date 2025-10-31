"use client"

import Image from "next/image"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="
        relative
        bg-black text-gray-300
        border-t border-white/10
        pt-16 pb-8
      "
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/logo-white.png" // 📌 coloca aquí tu logo (por ejemplo en /public/logo.png)
                  alt="Logo Aseo Market"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Aseo Market</h3>
                <p className="text-xs text-gray-400">Mantencion Industrial</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Servicios profesionales de aseo y mantención industrial con más de 25 años de experiencia en el rubro.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Aseo Industrial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Mantención de Oficinas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Vidrios en Altura
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Electricidad Certificada
                </a>
              </li>
            </ul>
          </div>

          {/* Menú */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide">Menú</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-primary transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <a href="tel:+56995554242" className="hover:text-primary transition-colors">
                  +56 9 9555 4242
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <a
                  href="mailto:aseomarketspa@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  aseomarketspa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Los Militares 5620 Of. 905</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-primary mt-0.5" />
                <a
                  href="https://aseomarketspa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  aseomarketspa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="text-white font-medium">Aseo Market SPA</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Detalle visual de fondo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_80%)]" />
    </footer>
  )
}
