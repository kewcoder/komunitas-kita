import React, { useEffect, useState } from "react";
import { SearchEngine } from "./SearchEngine";
import { Sparkles } from "lucide-react";
import { useRouter } from "../router";

export function SearchView() {
  const { currentRoute } = useRouter();

  // Extract query from URL search parameters
  const getQueryFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("q") || "";
  };

  const [query, setQuery] = useState(getQueryFromUrl());

  // Sync state if Route context or location changes
  useEffect(() => {
    setQuery(getQueryFromUrl());
  }, [currentRoute]);

  return (
    <div className="space-y-8 sm:space-y-12 text-left">
      <section className="text-center max-w-4xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-1.5 bg-brand-light border border-brand/20 text-brand text-xs px-3.5 py-1 rounded-full font-bold">
          <Sparkles size={11} className="text-brand animate-spin-slow" />
          <span>MESIN PENCARI KOMUNITAS AKTIF</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
          Cari Komunitas Online Terkurasi
        </h1>
        <p className="text-neutral-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-bold">
          Temukan grup WhatsApp, Telegram, dan Discord teratas secara instan berdasarkan kata kunci tepercaya.
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <SearchEngine initialQuery={query} />
      </section>
    </div>
  );
}
