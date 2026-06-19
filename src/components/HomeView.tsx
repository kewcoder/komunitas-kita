import React, { useState } from "react";
import { Link, useRouter } from "../router";
import { CATEGORIES, COMMUNITIES } from "../data";
import { CategoryIcon } from "./IconResolver";
import { Sparkles, Award, Clock, ArrowRight, ShieldCheck, Heart, Search } from "lucide-react";

export function HomeView() {
  const { navigate } = useRouter();
  const [query, setQuery] = useState("");

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 0) {
      // Instantly migrate the user to the search page as they start entering content
      navigate(`/search?q=${encodeURIComponent(val)}`);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="space-y-12 sm:space-y-16 px-1 sm:px-0">
      {/* 1. Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 pt-6 sm:pt-10">
        <div className="inline-flex items-center gap-1.5 bg-brand-light border border-brand/25 text-brand text-[10px] sm:text-xs px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-bold max-w-full text-center">
          <Sparkles size={12} className="text-brand animate-pulse shrink-0" />
          <span className="truncate">Direktori Komunitas Terbesar di Indonesia (Juni 2026)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-950 tracking-tight leading-tight sm:leading-none">
          Temukan Komunitas Online <br className="hidden sm:inline" />
          <span className="text-brand">
            Pilihan Terbaik
          </span>{" "}
          di Indonesia
        </h1>

        <p className="text-gray-500 text-xs sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-semibold">
          Satu-satunya mesin pencari & direktori untuk menemukan grup Discord, Telegram, dan WhatsApp tepercaya yang dikurasi manual oleh pakar industri.
        </p>
      </section>

      {/* 2. Main Search Input Redirection Widget */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-150 p-6 sm:p-8 shadow-xs text-center space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
              <Search className="text-brand w-5 h-5" />
            </div>
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyPress}
              placeholder="Cari kata kunci grup (crypto, AI, coding, dll)..."
              className="w-full pl-12 pr-28 py-3.5 sm:py-4 bg-neutral-50 border border-neutral-200 focus:border-brand focus:bg-white rounded-xl text-neutral-950 placeholder-neutral-450 focus:outline-none focus:ring-4 focus:ring-brand/5 text-sm sm:text-base font-semibold transition-all shadow-xs"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-5 bg-neutral-950 hover:bg-brand text-white font-bold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer"
            >
              Cari Grup
            </button>
          </form>

          {/* Quick search hints / tags under the bar */}
          <div className="flex flex-wrap items-center gap-2 justify-center text-xs text-neutral-500 font-bold">
            <span className="text-neutral-400 font-extrabold text-[11px]">Paling Banyak Dicari:</span>
            {["crypto", "AI", "coding", "design", "startup"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
                className="bg-neutral-50 hover:bg-brand-light hover:text-brand border border-neutral-200 hover:border-brand/20 px-2.5 py-0.5 rounded-md text-[11px] transition-all cursor-pointer"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 7 Categories List Grid */}
      <section className="space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center justify-center sm:justify-start gap-2">
            <CompassIcon className="text-brand w-5 h-5 sm:w-6 sm:h-6" />
            <span>Jelajahi 7 Kategori Komunitas Utama</span>
          </h2>
          <p className="text-[11px] sm:text-xs text-gray-500 font-semibold">
            Pilih dari sub-minat terkurasi secara langsung untuk menemukan koneksi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const count = COMMUNITIES.filter((c) => c.category === cat.slug).length;
            return (
              <div
                key={cat.slug}
                className="group p-5 sm:p-6 bg-white rounded-2xl border border-gray-150 shadow-xs hover:border-brand hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-200 shrink-0">
                      <CategoryIcon name={cat.icon} size={20} />
                    </div>
                    <div>
                      <Link to={`/kategori/${cat.slug}`}>
                        <h3 className="font-bold text-gray-950 text-base sm:text-lg group-hover:text-brand transition-colors">
                          {cat.name}
                        </h3>
                      </Link>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed font-semibold">
                    {cat.tagline}
                  </p>

                  {/* New Granular Subcategories List Block */}
                  {cat.subcategories && cat.subcategories.length > 0 && (
                    <div className="pt-3 border-t border-neutral-100/70 space-y-2">
                      <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider block">
                        Bidang Granular:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.subcategories.map((sub) => (
                          <button
                            key={sub}
                            type="button"
                            onClick={() => navigate(`/search?q=${encodeURIComponent(sub)}`)}
                            className="bg-neutral-50 hover:bg-brand-light hover:text-brand border border-neutral-200 hover:border-brand/20 px-2.2 py-0.8 rounded-md text-[10.5px] font-bold text-neutral-550 transition-all cursor-pointer text-left truncate max-w-full"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs pt-3.5 border-t border-neutral-100 mt-auto">
                  <span className="font-bold text-gray-450 bg-neutral-50 border border-neutral-150/70 px-2.5 py-0.5 rounded-md text-[11px]">
                    {count > 0 ? `${count} grup aktif` : "Segera hadir"}
                  </span>
                  <Link
                    to={`/kategori/${cat.slug}`}
                    className="text-brand font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5 text-xs"
                  >
                    Buka Direktori <ArrowRight size={12} className="ml-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Deep Human SEO Intro Content Block */}
      <section className="border-t border-gray-150 pt-12 max-w-4xl mx-auto space-y-5 text-gray-650 leading-relaxed">
        <h2 className="text-xl font-bold text-gray-950">
          Mencari Grup Komunitas di Indonesia Kian Mudah & Aman
        </h2>
        <p className="text-sm">
          Menemukan grup diskusi online yang berkualitas di platform populer seperti Discord, Telegram, maupun WhatsApp sering kali menimbulkan tantangan tersendiri. Banyak sekali bertebaran tautan undangan usang, spam bot meresahkan, hingga skema penipuan investasi terselubung. Di sinilah <strong>KomunitasKita</strong> hadir sebagai solusi rujukan tepercaya bagi warganet Indonesia.
        </p>
        <p className="text-sm">
          Melalui platform direktori ini, kami menerapkan standardisasi kurasi bertingkat yang diuji secara berkala oleh tim moderator kami. Kami memastikan setiap grup memiliki basis pengguna aktif yang nyata, iklim obrolan yang ramah pemula, serta bebas dari aktivitas ilegal. Baik Anda seorang <strong>programmer pemula yang ingin belajar coding</strong>, <strong>trader crypto yang mencari komunitas tepercaya</strong>, desainer visual, ataupun pegiat fitness, kami berkomitmen menjadi kompas navigasi sosial digital Anda di Indonesia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs font-medium text-gray-550 border-t border-gray-155">
          <div className="flex gap-2.5 items-start">
            <ShieldCheck size={20} className="text-brand shrink-0" />
            <div className="text-left">
              <h4 className="font-bold text-gray-950 mb-0.5">Kurasi Tepercaya</h4>
              <p className="text-[11px] text-gray-450">Setiap link diverifikasi aktif dan aman dari penipuan.</p>
            </div>
          </div>
          <div className="flex gap-2.5 items-start">
            <Heart size={20} className="text-brand shrink-0" />
            <div className="text-left">
              <h4 className="font-bold text-gray-950 mb-0.5">Berpusat pada Minat</h4>
              <p className="text-[11px] text-gray-450">Navigasi bento grid mempercepat pencarian kategori spesifik.</p>
            </div>
          </div>
          <div className="flex gap-2.5 items-start">
            <Award size={20} className="text-brand shrink-0" />
            <div className="text-left">
              <h4 className="font-bold text-gray-950 mb-0.5">Sistem Klaim Mandiri</h4>
              <p className="text-[11px] text-gray-450">Pemilik grup dapat memverifikasi kepemilikan kapan saja.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline placeholder icon
function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-6 h-6 ${className}`}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}
