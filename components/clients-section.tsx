"use client"

import { Reveal } from "./reveal"

const clients = [
  { name: "Google Tag Manager", logo: "🏷️" },
  { name: "Google Analytics", logo: "📊" },
  { name: "Google Ads", logo: "📢" },
  { name: "WordPress", logo: "📝" },
  { name: "Meta", logo: "🔵" },
  { name: "Código", logo: "💻" },
]

export function ClientsSection() {
  return (
    <section id="clientes" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tecnologías y <span className="gradient-text">Herramientas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilizamos las mejores herramientas para garantizar eficiencia y calidad
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform">{client.logo}</div>
                <p className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
