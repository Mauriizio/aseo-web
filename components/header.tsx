"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { name: "Servicios", href: "#servicios" },
  { name: "Casos de Éxito", href: "#casos" },
  { name: "Clientes", href: "#clientes" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
]

function useLockBody(scrollLocked: boolean) {
  useEffect(() => {
    if (scrollLocked) {
      const { overflow } = document.body.style
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = overflow
      }
    }
  }, [scrollLocked])
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useLockBody(isMobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200/70 shadow-lg"
          : "bg-white/70 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        {/* Barra superior */}
        <div className="relative flex h-16 md:h-20 items-center">
          {/* Logo centrado en mobile, a la izquierda en desktop */}
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center md:static md:justify-start group"
            aria-label="Aseo Market - Inicio"
          >
            <Image
              src="/logo.png"
              alt="Aseo Market logo"
              width={150}
              height={40}
              priority
              className="h-8 w-auto md:h-9 group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-8 ml-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
              >
                {link.name}
                <span className="pointer-events-none absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              <a href="#contacto">Cotizar</a>
            </Button>
          </div>

          {/* Botón hamburguesa (mobile) alineado a la derecha */}
          <Hamburger
            open={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden ml-auto"
          />
        </div>
      </div>

      {/* Sheet móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Contenido */}
            <motion.div
              key="sheet"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden fixed top-[64px] left-0 right-0 z-50"
            >
              <nav className="mx-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/70 shadow-2xl">
                <ul className="py-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-5 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-xl mx-1"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="px-4 pb-4">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-11 text-base"
                  >
                    <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                      Cotizar ahora
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* ———————————————————————————— */
/* Botón hamburguesa con microinteracciones */
function Hamburger({
  open,
  onToggle,
  className = "",
}: {
  open: boolean
  onToggle: () => void
  className?: string
}) {
  return (
    <button
      aria-label="Abrir menú"
      aria-expanded={open}
      onClick={onToggle}
      className={`relative inline-flex items-center justify-center h-11 w-11 rounded-full ${className}`}
    >
      {/* Glow ring */}
      <motion.span
        className={`absolute inset-0 rounded-full ${
          open ? "bg-primary/10" : "bg-gray-900/5"
        }`}
        initial={false}
        animate={{ scale: open ? 1.04 : 1, boxShadow: open ? "0 0 0 6px rgba(219,29,34,0.15)" : "0 0 0 0px rgba(0,0,0,0)" }}
        transition={{ duration: 0.2 }}
      />
      {/* Icono (tres líneas que morph a X) */}
      <div className="relative z-10">
        <motion.span
          className="block h-[2px] w-6 bg-gray-900 rounded-full"
          animate={{ y: open ? 6 : 0, rotate: open ? 45 : 0 }}
          transition={{ duration: 0.18 }}
        />
        <motion.span
          className="block h-[2px] w-6 bg-gray-900 rounded-full my-[6px]"
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.12 }}
        />
        <motion.span
          className="block h-[2px] w-6 bg-gray-900 rounded-full"
          animate={{ y: open ? -6 : 0, rotate: open ? -45 : 0 }}
          transition={{ duration: 0.18 }}
        />
      </div>
    </button>
  )
}
