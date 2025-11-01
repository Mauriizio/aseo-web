"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "El Dante", logo: "/client/client1.png" },
  { name: "Valle de Atxondo", logo: "/client/client2.png" },
  { name: "Club Aéreo Ejército", logo: "/client/client3.png" },
  { name: "Cortesano", logo: "/client/client4.png" },
  { name: "Dentaid", logo: "/client/client5.png" },
]

export function ClientsSection() {
  return (
    <section
      id="clientes"                                 // <-- 🔹 ancla para el header
      className="
        relative py-20 px-6 sm:px-10 lg:px-16
        bg-gradient-to-br from-[#0b0e13] via-[#11151c] to-[#0b0e13]
        border-t border-white/5
        
      "
    >
      {/* Título y descripción */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Algunos de nuestros <span className="text-primary">clientes</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Empresas y organizaciones que confían en nuestra experiencia para mantener sus instalaciones impecables.
        </motion.p>
      </div>

      {/* Logos de clientes — todos uniformes */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 items-center justify-center">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              flex items-center justify-center
              h-40 sm:h-44 md:h-48 w-full
              bg-white/5 hover:bg-white/10
              rounded-2xl border border-white/10
              shadow-[0_4px_20px_rgba(0,0,0,0.25)]
              transition-all duration-300
            "
          >
            <div className="relative w-36 sm:w-40 md:w-44 h-24 sm:h-28 md:h-32 flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-500 p-4"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
