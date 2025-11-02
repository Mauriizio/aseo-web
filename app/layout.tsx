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
  // Si ya conoces tu dominio en producción, descomenta y ponlo para URLs absolutas en OG/Twitter
  // metadataBase: new URL("https://www.aseomarketspa.com"),

  // Favicons & Apple icons
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicons/icons/apple-touch-icon.png" }],
    shortcut: ["/favicons/icons/icon-192.png"],
  },

  manifest: "/favicons/site.webmanifest",

  // SEO social (Open Graph / Twitter)
  openGraph: {
    title: "Aseo Market - Mantención y Aseo Industrial Certificado",
    description:
      "Servicios profesionales de mantención y aseo industrial con personal certificado y protocolos claros.",
    images: ["/favicons/og/og-1200x630.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aseo Market - Mantención y Aseo Industrial Certificado",
    description:
      "Servicios profesionales de mantención y aseo industrial con personal certificado y protocolos claros.",
    images: ["/favicons/og/og-1200x630.png"],
  },

  // Colores PWA / barra
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
        {/* Fuerza scroll al tope en recarga y cambio de ruta */}
        <ScrollRestoration />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
