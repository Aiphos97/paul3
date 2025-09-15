'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-neutral-400 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <Link href="/">
          <img src="/paulenblanco.png" alt="Paule Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-12">
          <Link href="/" className="text-xl text-white font-semibold hover:text-rose-300 transition">
            Inicio
          </Link>
          <Link href="/about" className="text-xl text-white font-semibold hover:text-rose-300 transition">
            Acerca de
          </Link>
          <Link href="/artwork" className="text-xl text-white font-semibold hover:text-rose-300 transition">
            Arte
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-white">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-neutral-400 z-50 p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <img src="/paul3-logo.png" alt="Paule Logo" className="h-10 w-auto" />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <Link href="/" className="text-white font-semibold text-lg hover:text-rose-300 transition">
              Inicio
            </Link>
            <Link href="/about" className="text-white font-semibold text-lg hover:text-rose-300 transition">
              Acerca de
            </Link>
            <Link href="/art" className="text-white font-semibold text-lg hover:text-rose-300 transition">
              Arte
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
