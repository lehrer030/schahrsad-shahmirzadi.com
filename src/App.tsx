import { useState } from 'react'
import { Sparkles, ArrowRight, Menu, X, Globe, Heart, Shield, Layers } from 'lucide-react'

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              S
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Schahrsad
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">Über mich</a>
            <a href="#services" className="hover:text-indigo-600 transition-colors">Leistungen</a>
            <a href="#portfolio" className="hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Kontakt</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-all"
            >
              <span>Projekt anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
            <a
              href="#about"
              className="block py-2 text-base font-medium text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Über mich
            </a>
            <a
              href="#services"
              className="block py-2 text-base font-medium text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leistungen
            </a>
            <a
              href="#portfolio"
              className="block py-2 text-base font-medium text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block py-2 text-base font-medium text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="#contact"
              className="block w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projekt anfragen
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Modernes Webdesign & Relaunch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-none mb-6">
              Willkommen bei <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">Schahrsad</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
              Deine neue, blitzschnelle Webplattform – modernisiert von WordPress zu einer hochperformanten React & Tailwind Web-Applikation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md transition-all"
              >
                <span>Bereiche entdecken</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-base border border-slate-200 shadow-sm transition-all"
              >
                <span>Mehr erfahren</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section id="services" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Highlights & Schwerpunkte
            </h2>
            <p className="mt-4 text-slate-600">
              Maßgeschneiderte Inhalte, schnelle Ladezeiten und ein modernes Benutzererlebnis auf allen Geräten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Maximale Performance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Keine trägen WordPress-Ladezeiten mehr. Sofortige Seitenaufrufe dank moderner SPA-Architektur.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ästhetisches Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Stilvolle Typografie, harmonische Farbwelten und responsive Layouts für Smartphone, Tablet und Desktop.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zukunftssicher & Sicher</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Keine ständigen Sicherheitslücken durch veraltete Plugins. Sauberer, wartungsarmer TypeScript-Code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/60 text-slate-700 text-xs font-semibold mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Über das Projekt</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Vom klassischen WordPress zur High-End Web-App
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dieser neue Workspace wurde speziell eingerichtet, um alle Inhalte, Bilder und Seiten der Website strukturiert zu übernehmen und in ein frisches, zeitgemäßes Gewand zu kleiden.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Mit modular aufgebauten Komponenten können wir beliebige Unterseiten, Bildergalerien, Blog-Artikel oder interaktive Formulare direkt einbinden.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-indigo-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Responsive</div>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-3xl font-extrabold text-indigo-600">&lt; 0.5s</div>
                  <div className="text-xs text-slate-500 font-medium">Ladezeit</div>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-3xl font-extrabold text-indigo-600">React 19</div>
                  <div className="text-xs text-slate-500 font-medium">Modernste Basis</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-tr from-indigo-600 via-indigo-700 to-rose-600 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Bereit für den Relaunch</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                Nenne mir einfach die Seiten, Texte oder Bilder der bestehenden WordPress-Seite, und wir bauen sie Schritt für Schritt in dieses Projekt ein.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>React + Vite + TypeScript vorkonfiguriert</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Tailwind CSS Styling integriert</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Lucide Icon-Set einsatzbereit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-auto bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-bold text-white text-lg">Schahrsad</span>
            </div>
            <p className="text-sm">
              Neuer Webauftritt – erstellt & gepflegt mit Antigravity
            </p>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© {new Date().getFullYear()} Schahrsad. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
