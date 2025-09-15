'use client'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { FaInstagram, FaBehance, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function About() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/20 backdrop-blur-md">
        <Navbar />
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left lg:px-20 flex flex-col lg:flex-row lg:items-center gap-12">

          {/* Text Column */}
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre el Artista</h2>
            <p className="text-lg text-gray-600 mb-4">
              Paul3 es un artista paraguayo, trans, marrón y neurodivergente, utiliza el pronombre él. Su práctica se articula principalmente desde el arte conceptual y el uso de objetos readymade. También trabaja con fotografía, instalación y pintura, explorando lo táctil, lo cotidiano y lo simbólico como formas de interpelación. Su obra orbita alrededor del género y la salud mental, pero se expande hacia territorios más íntimos. 
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Su trabajo propone una crítica a los mandatos cisheteronormativos que estructuran lo social, y a la vez, funciona como una metáfora sensible de las relaciones interpersonales. A través de gestos mínimos y objetos cargados de memoria, Paul3 construye imágenes donde el deseo, el afecto y la violencia se entrelazan en una poética material y política.
            </p>
            
          </div>

          {/* Image Column */}
          <aside className="lg:w-1/3 flex justify-center lg:justify-end">
            <img
              src="/retratopaul3.jpg"
              alt="Paul3 Portrait"
              className="w-auto max-w-[220px] lg:max-w-[250px] rounded-xl shadow-lg object-contain"
            />
          </aside>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
