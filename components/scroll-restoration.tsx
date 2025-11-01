"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollRestoration() {
  const pathname = usePathname()

  // Evita que el navegador “recuerde” la posición
  useEffect(() => {
    if ("scrollRestoration" in history) {
      const prev = history.scrollRestoration
      history.scrollRestoration = "manual"
      return () => {
        history.scrollRestoration = prev
      }
    }
  }, [])

  // Al cargar por primera vez
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  // Al cambiar de ruta (no aplica si es un #ancla)
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname])

  return null
}
