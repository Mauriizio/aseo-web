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
        overflow-hidden
      "
    >
      {/* Marca de agua del logo centrada */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center opacity-[0.06] md:opacity-[0.08]">
        <div className="relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px]">
          <Image
            src="/logo-black.png" // logo sin fondo blanco
            alt="Aseo Market watermark"
            fill
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Halo sutil */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Contenido principal */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12
            place-items-center md:place-items-start
            text-center md:text-left
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/logo-white.png"
                  alt="Logo Aseo Market"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Aseo Market</h3>
                <p className="text-xs text-gray-400">Mantención Industrial</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed md:pr-4">
              Servicios profesionales de aseo y mantención industrial con más de 25 años de
              experiencia en el rubro.
            </p>
          </div>

          {/* Servicios */}
          <div className="max-w-xs">
            <h4 className="text-primary font-semibold mb-4 uppercase tracking-wide">Servicios</h4>
            <ul className="space-y-2 text-sm inline-flex flex-col items-center md:items-start">
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
          <div className="max-w-xs">
            <h4 className="text-primary font-semibold mb-4 uppercase tracking-wide">Menú</h4>
            <ul className="space-y-2 text-sm inline-flex flex-col items-center md:items-start">
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
<div className="max-w-xs w-full">
  <h4 className="text-primary font-semibold mb-4 uppercase tracking-wide text-center md:text-left">
    Contacto
  </h4>

  {/* Grilla: 2 columnas (icono | texto) */}
  <ul
    className="
      grid grid-cols-[1.125rem_auto]  /* 18px para ícono, resto para texto */
      gap-x-3 gap-y-3
      w-max mx-auto md:mx-0           /* centra el bloque en mobile; a la izquierda en desktop */
      justify-items-start text-left    /* contenidos alineados a la izquierda */
      text-sm
    "
  >
    {/* Teléfono */}
    <li className="contents">
      <Phone className="w-4 h-4 text-primary" />
      <a href="tel:+56995554242" className="hover:text-primary transition-colors">
        +56 9 9555 4242
      </a>
    </li>

    {/* Email */}
    <li className="contents">
      <Mail className="w-4 h-4 text-primary" />
      <a
        href="mailto:aseomarketspa@gmail.com"
        className="hover:text-primary transition-colors break-all"
      >
        aseomarketspa@gmail.com
      </a>
    </li>

    {/* Dirección */}
    <li className="contents">
      <MapPin className="w-4 h-4 text-primary" />
      <span>Los Militares 5620 Of. 905</span>
    </li>

    {/* Web */}
    <li className="contents">
      <Globe className="w-4 h-4 text-primary" />
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
  © {new Date().getFullYear()}{" "}
  <span className="text-white font-medium">Aseo Market SPA</span>. 
  <br />
  Diseño Web -{" "}
  <a
    href="https://www.maurizio.dev"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:text-white transition-colors"
  >
    maurizio.dev
  </a>
</p>

        </div>
      </div>
    </footer>
  )
}
