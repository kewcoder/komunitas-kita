import React, { useState, useMemo, useEffect } from "react";
import { Community } from "../types";
import { COMMUNITIES, CATEGORIES } from "../data";
import { CommunityCard } from "./CommunityCard";
import { Search, Sparkles, SlidersHorizontal, Share2, Sparkle, AlertCircle } from "lucide-react";

interface SearchEngineProps {
  initialQuery?: string;
  onSelectCommunity?: (slug: string) => void;
}

export function SearchEngine({ initialQuery = "", onSelectCommunity }: SearchEngineProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Suggestions for users to click
  const SEARCH_SUGGESTIONS = [
    "grup telegram crypto",
    "discord AI Indonesia",
    "grup belajar coding",
    "startup found",
    "freelance wa",
    "design figma"
  ];

  // Powerful search parsing matching Indonesian intent
  const filteredCommunities = useMemo(() => {
    let result = [...COMMUNITIES];

    // Apply platform select pills
    if (selectedPlatform !== "all") {
      result = result.filter((c) => c.platform === selectedPlatform);
    }

    // Apply type select pills
    if (selectedType !== "all") {
      result = result.filter((c) => c.type === selectedType);
    }

    if (!searchQuery.trim()) {
      return result;
    }

    const queryTerms = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);

    return result.filter((community) => {
      // Create a search document score or boolean flags
      const name = community.name.toLowerCase();
      const desc = community.description.toLowerCase();
      const cat = community.category.toLowerCase();
      const plat = community.platform.toLowerCase();
      const type = community.type.toLowerCase();
      const longDesc = (community.long_description || "").toLowerCase();

      // Check if ALL query terms match in any of fields
      return queryTerms.every((term) => {
        // Natural language mapping for Indonesian queries
        if (term === "grup" || term === "group" || term === "channel" || term === "community" || term === "komunitas") {
          return true; // ignore generic query words to prevent filtering out match on specific terms
        }
        if (term === "gratis" || term === "mura") {
          return type === "free";
        }
        if (term === "berbayar" || term === "premium" || term === "vip") {
          return type === "paid" || community.is_vip;
        }
        if (term === "wa" || term === "watsap") {
          return plat === "whatsapp";
        }
        if (term === "tele") {
          return plat === "telegram";
        }
        if (term === "dc") {
          return plat === "discord";
        }
        if (term === "desain") {
          return cat === "creative-design" || name.includes("desain") || desc.includes("desain");
        }
        if (term === "belajar" || term === "kuliah" || term === "sekolah") {
          return name.includes("belajar") || desc.includes("belajar");
        }
        if (term === "kerja" || term === "loker" || term === "karir") {
          return cat === "career-freelance" || name.includes("karir") || desc.includes("karir") || desc.includes("loker");
        }

        return (
          name.includes(term) ||
          desc.includes(term) ||
          cat.includes(term) ||
          plat.includes(term) ||
          type.includes(term) ||
          longDesc.includes(term)
        );
      });
    });
  }, [searchQuery, selectedPlatform, selectedType]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  const handleClearFilters = () => {
    setSelectedPlatform("all");
    setSelectedType("all");
    setSearchQuery("");
  };

  return (
    <div className="space-y-8">
      {/* Central Search Card Box */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-150 p-4 sm:p-6 md:p-8 shadow-xs">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none text-gray-400">
              <Search className="text-brand w-4.5 h-4.5 sm:w-5.2 sm:h-5.2" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata kunci (crypto, AI, coding, dll)..."
              className="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-4 bg-neutral-50 border border-neutral-200 focus:border-brand focus:bg-white rounded-lg sm:rounded-xl text-neutral-950 placeholder-neutral-450 focus:outline-none focus:ring-4 focus:ring-brand/5 text-xs sm:text-[15px] font-semibold transition-all shadow-xs select-auto"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3.5 sm:pr-4 flex items-center text-neutral-400 hover:text-brand text-lg sm:text-xl font-bold cursor-pointer"
              >
                &times;
              </button>
            )}
          </div>

          {/* Suggested Clickables */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-center sm:justify-start text-[10px] sm:text-xs text-gray-500">
            <span className="font-bold text-neutral-400 flex items-center gap-1">
              <Sparkles size={11} className="text-brand animate-spin-slow" />
              Saran:
            </span>
            {SEARCH_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="bg-neutral-154/40 hover:bg-brand-light hover:text-brand hover:border-brand/20 transition-all cursor-pointer px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-neutral-200 text-neutral-800 text-[10px] sm:text-[11px] font-bold"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Quick Filters Options */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              {/* Platform Filter */}
              <div className="flex rounded-lg sm:rounded-xl bg-neutral-100 p-0.5 border border-neutral-200/50 text-[10px] sm:text-xs overflow-x-auto whitespace-nowrap scrollbar-none">
                {["all", "discord", "telegram", "whatsapp"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPlatform(p)}
                    className={`flex-1 sm:flex-none px-2.5 py-1 rounded-md sm:rounded-lg font-bold capitalize cursor-pointer transition-all ${
                      selectedPlatform === p
                        ? "bg-white text-brand shadow-xs font-extrabold"
                        : "text-neutral-500 hover:text-neutral-950"
                    }`}
                  >
                    {p === "all" ? "Semua Platform" : p}
                  </button>
                ))}
              </div>

              {/* Fee filter */}
              <div className="flex rounded-lg sm:rounded-xl bg-neutral-100 p-0.5 border border-neutral-200/50 text-[10px] sm:text-xs overflow-x-auto whitespace-nowrap scrollbar-none">
                {["all", "free", "paid"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`flex-1 sm:flex-none px-2.5 py-1 rounded-md sm:rounded-lg font-bold capitalize cursor-pointer transition-all ${
                      selectedType === t
                        ? "bg-white text-brand shadow-xs font-extrabold"
                        : "text-neutral-500 hover:text-neutral-950"
                    }`}
                  >
                    {t === "all" ? "Semua Biaya" : t === "free" ? "Gratis" : "Berbayar"}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear filters or filter count feedback */}
            {(selectedPlatform !== "all" || selectedType !== "all" || searchQuery !== "") && (
              <button
                onClick={handleClearFilters}
                className="text-[11px] sm:text-xs font-bold text-brand hover:text-brand-dark cursor-pointer flex items-center justify-center sm:justify-start gap-1 p-2 sm:p-0 rounded-lg bg-brand-light sm:bg-transparent border border-brand/20 sm:border-none hover:bg-brand-light"
              >
                <span>Reset Filter</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Header block */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-neutral-950 flex items-center gap-2">
          <span>Hasil Kurasi</span>
          <span className="bg-brand-light text-brand text-xs px-2.5 py-0.5 rounded-lg border border-brand/10 font-black">
            {filteredCommunities.length} Grup
          </span>
        </h3>
        {searchQuery && (
          <span className="text-xs text-neutral-405 font-bold">
            Mencari kata kunci: &ldquo;{searchQuery}&rdquo;
          </span>
        )}
      </div>

      {/* Grid of Results */}
      {filteredCommunities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      ) : (
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-12 text-center max-w-lg mx-auto flex flex-col items-center justify-center space-y-4 shadow-xs">
          <div className="w-12 h-12 bg-brand-light text-brand rounded-full flex items-center justify-center">
            <AlertCircle size={22} />
          </div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-neutral-950 text-base">Grup Komunitas Tidak Ditemukan</h4>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed font-semibold">
              Kami belum memiliki grup yang cocok dengan &ldquo;{searchQuery}&rdquo;. Segera ajukan permohonan agar tim kurator kami mengindeks komunitas pilihan Anda!
            </p>
          </div>
          <button
            onClick={handleClearFilters}
            className="mt-2 bg-neutral-950 hover:bg-neutral-900 text-white font-bold text-xs px-4.5 py-2.5 rounded-lg cursor-pointer transition-colors active:scale-95"
          >
            Lihat Semua Komunitas
          </button>
        </div>
      )}
    </div>
  );
}
