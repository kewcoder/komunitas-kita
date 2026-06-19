import React from "react";
import { Link } from "../router";
import { CATEGORIES } from "../data";
import { Sparkles, Compass, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 pt-16 pb-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* About column */}
        <div className="space-y-4 md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white group">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
              <div className="w-3.5 h-3.5 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span>
              KomunitasKita<span className="text-indigo-400">.id</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed text-left">
            Direktori & mesin pencari SEO-first untuk menemukan grup Discord, Telegram, dan WhatsApp tepercaya yang dikurasi manual oleh pakar industri.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <ShieldCheck size={14} className="text-indigo-500" />
            <span>100% Manual Human Curation</span>
          </div>
        </div>

        {/* Categories Col 1 (First Half) */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider text-left">Jelajahi Minat</h4>
          <ul className="space-y-2.5 text-sm text-left">
            {CATEGORIES.slice(0, Math.ceil(CATEGORIES.length / 2)).map((cat) => (
              <li key={cat.slug}>
                <Link
                  to={`/kategori/${cat.slug}`}
                  className="hover:text-indigo-400 transition-colors block text-gray-400"
                >
                  Komunitas {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Col 2 (Second Half) */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider text-left">Kategori Populer</h4>
          <ul className="space-y-2.5 text-sm text-left">
            {CATEGORIES.slice(Math.ceil(CATEGORIES.length / 2)).map((cat) => (
              <li key={cat.slug}>
                <Link
                  to={`/kategori/${cat.slug}`}
                  className="hover:text-indigo-400 transition-colors block text-gray-400"
                >
                  Komunitas {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Fast SEO internal list & Admin Claims */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider text-left">Layanan Direktori</h4>
          <ul className="space-y-2.5 text-sm font-medium text-left">
            <li>
              <Link to="/" className="text-gray-400 hover:text-indigo-400 transition-colors block font-bold">
                Cari Grup Baru
              </Link>
            </li>
            <li>
              <span className="block text-xs text-gray-500 mt-4 font-normal">
                Punya grup komunitas beranggotakan &gt; 500 orang? Hubungi kami untuk integrasi instan di index pencarian Indonesia.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* SEO Footer Text Block */}
      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-gray-800 text-xs text-gray-500 space-y-3 leading-relaxed">
        <p>
          📌 <strong>KomunitasKita.id</strong> adalah platform independen yang bertindak sebagai mesin pencari rujukan untuk berbagai platform obrolan sosial, termasuk <strong>grup WhatsApp Indonesia</strong>, <strong>server Discord developer</strong>, dan <strong>channel Telegram crypto</strong>. Kami tidak terafiliasi dengan Discord Inc, Telegram FZ-LLC, maupun Meta Platforms Inc. Seluruh nama dagang, logo, dan rujukan eksternal merupakan hak milik sepenuhnya dari masing-masing pemegang merek asli.
        </p>
        <p>
          Kami berupaya menyaring scam, junk link, dan spam bot demi menghadirkan lingkungan belajar digital Indonesia yang kondusif, beretika, dan berorientasi jangka panjang demi kemajuan sumber daya manusia tanah air.
        </p>
        <div className="pt-4 text-center text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; 2026 KomunitasKita.id - Direktori Komunitas Indonesia Terbesar. All Rights Reserved.</span>
          <span className="font-mono text-[10px]">v1.0.0-MVP (No-Auth, High-Performance Mode)</span>
        </div>
      </div>
    </footer>
  );
}
