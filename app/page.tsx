'use client'

import Navbar from './components/navbar'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { FaInstagram, FaBehance } from 'react-icons/fa' // social icons
import Footer from './components/footer' // <- import Footer from separate file

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/20 backdrop-blur-md">
        <Navbar />
      </header>

      {/* Hero Image Only */}
      <section className="relative w-full h-screen">
        <img
          src="/candadohd.jpeg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Acerca del Artista</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Paul3 es un artista trans, marrón y neurodivergente, utiliza los pronombres él. 
            Su práctica se articula principalmente desde el arte conceptual y el uso de objetos readymade. 
            También trabaja con fotografía, instalación y pintura, explorando lo táctil, lo cotidiano y lo simbólico como formas de interpelación. 
            Su obra orbita alrededor del género y la salud mental, pero se expande hacia territorios más íntimos.
          </p>
          <a
            href="/about"
            className="inline-block bg-neutral-400 hover:bg-rose-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Read More
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
