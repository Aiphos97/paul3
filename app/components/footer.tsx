'use client'

import { FaInstagram, FaBehance, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white py-2 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.instagram.com/p.4.u.l.3" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6 md:h-8 md:w-8 text-neutral-400 hover:text-rose-300 transition-colors" />
        </a>
        <a href="https://www.behance.net/paulegodoy" target="_blank" rel="noopener noreferrer">
          <FaBehance className="h-6 w-6 md:h-8 md:w-8 text-neutral-400 hover:text-rose-300 transition-colors" />
        </a>
        <a href="https://wa.me/595976394388" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="h-6 w-6 md:h-8 md:w-8 text-neutral-400 hover:text-rose-300 transition-colors" />
        </a>
        <a href="mailto:paulegodoy@gmail.com">
          <FaEnvelope className="h-6 w-6 md:h-8 md:w-8 text-neutral-400 hover:text-rose-300 transition-colors" />
        </a>
      </div>
    </footer>
  )
}
