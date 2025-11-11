import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const toggleLocale = () => {
    setLocale(locale === "ru" ? "en" : "ru")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-mono text-white hover:text-gray-300 transition-colors"
          >
            &gt; richter
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors font-mono"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLocale}
              className="text-sm text-gray-400 hover:text-white transition-colors font-mono flex items-center gap-2"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              {locale.toUpperCase()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-400 hover:text-white transition-colors font-mono text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLocale()
                setIsMobileMenuOpen(false)
              }}
              className="block text-gray-400 hover:text-white transition-colors font-mono text-sm flex items-center gap-2"
            >
              <Globe size={16} />
              {locale === "ru" ? "English" : "Русский"}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
