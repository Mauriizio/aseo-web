"use client"

import { Phone, Mail, Globe, MapPin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/56995554242?text=Hola%20Aseo%20Market%2C%20necesito%20una%20cotizaci%C3%B3n",
    color: "hover:bg-green-600",
  },
  {
    icon: Phone,
    label: "Teléfono",
    href: "tel:+56995554242",
    color: "hover:bg-primary",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:aseomarketspa@gmail.com",
    color: "hover:bg-blue-600",
  },
  {
    icon: Globe,
    label: "Sitio Web",
    href: "https://aseomarket.com",
    color: "hover:bg-accent",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    href: "https://maps.google.com/?q=Los+Militares+5620+Of.+905",
    color: "hover:bg-red-600",
  },
]

export function SocialRail() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`group relative w-11 h-11 rounded-full bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center transition-all duration-300 ${link.color} hover:scale-110 hover:shadow-lg hover:shadow-primary/20`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
        >
          <link.icon className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
          <span className="absolute left-full ml-4 px-3 py-1.5 bg-secondary/95 backdrop-blur-sm text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
            {link.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  )
}
