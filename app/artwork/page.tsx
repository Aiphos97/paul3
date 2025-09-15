'use client'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function ArtNotice() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/20 backdrop-blur-md">
        <Navbar />
      </header>

      {/* Main Content */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Descubre las obras de Paul3
        </h4>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
          Las piezas están disponibles en BGN/ARTE.
        </p>
        <a
          href="https://www.bgnarte.com/collections/paule-godoy?page=2&phcursor=eyJhbGciOiJIUzI1NiJ9.eyJzayI6ImxleG9fcmFua19wb3NpdGlvbiIsInN2IjoiMHZheWZuYyIsImQiOiJiIiwidWlkIjoyOTA4ODc5MTg1NTA0MCwibCI6OCwibyI6MCwiciI6IkNEUCIsInYiOjEsInAiOjJ9.ABPAVh1aprtGfiQ4jv__OFEnS4jEE9qi6U8Lk2Rpx7E"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-neutral-400 hover:bg-rose-300 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
        >
          Explorar la colección en BGN
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
