"use client"

import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-bold text-xl text-primary-foreground">
                AM
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Aseo Market</span>
                <span className="text-xs text-muted-foreground">Siempre Contigo</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Servicios profesionales de aseo y mantención industrial con más de 15 años de experiencia.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  Aseo Industrial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  Mantención de Oficinas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  Vidrios en Altura
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  Electricidad Certificada
                </a>
              </li>
            </ul>
          </div>

          {/* Menú */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Menú</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-foreground transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+56995554242" className="hover:text-foreground transition-colors">
                  +56 9 9555 4242
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:aseomarketspa@gmail.com" className="hover:text-foreground transition-colors break-all">
                  aseomarketspa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Los Militares 5620 Of. 905</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://aseomarket.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  aseomarket.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aseo Market SPA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
