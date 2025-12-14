"use client";

import Image from "next/image";

const clients = [
  {
    name: "Afreximbank",
    logo: "/img/client-logos/afreximbank.png"
  },
  {
    name: "AATC",
    logo: "/img/client-logos/aatc.png"
  },
  {
    name: "Pentagon Securities",
    logo: "/img/client-logos/pentagon-securities.png"
  },
  {
    name: "Lilian Ogechi Missionary Foundation",
    logo: "/img/client-logos/lilian-ogechi.png"
  },
  // Add more clients as needed
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center">
              <div className="w-32 h-20 relative mb-2">
                <Image
                  src={client.logo}
                  alt={client.name + ' logo'}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <span className="text-sm text-gray-700 text-center">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
