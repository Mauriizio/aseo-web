import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollRestoration } from "@/components/scroll-restoration" 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Aseo Market - Servicios de Mantención y Aseo Industrial Certificado",
  description:
    "Servicios profesionales de mantención y aseo industrial, mantención de oficinas, limpieza de vidrios en altura y más. Personal certificado y protocolos claros.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* fuerza scroll al tope en recarga y cambio de ruta */}
        <ScrollRestoration />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
