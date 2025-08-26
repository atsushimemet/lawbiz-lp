'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'サービス内容', href: '#services' },
    { name: '料金', href: '#pricing' },
    { name: 'よくある質問', href: '#faq' },
    { name: 'お問い合わせ', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false)
    // Smooth scroll to anchor
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Title */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">士</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg leading-tight">
                士業専門HP制作
              </div>
              <div className="text-xs text-gray-600">
                1万円モニター
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Link
              href="#contact"
              onClick={() => handleMenuClick('#contact')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
            >
              💬 無料相談
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-6 h-6 focus:outline-none"
            >
              <div className="absolute top-0 left-0">
                <div
                  className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 mt-2 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 mt-2 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="py-4 border-t border-gray-200">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.href)}
                className={`block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 font-medium transition-colors duration-200 ${
                  index === 0 ? 'mt-0' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 py-3">
              <Link
                href="#contact"
                onClick={() => handleMenuClick('#contact')}
                className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
              >
                💬 無料相談
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header