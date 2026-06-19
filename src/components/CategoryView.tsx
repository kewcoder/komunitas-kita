import React, { useState } from "react";
import { Link } from "../router";
import { CATEGORIES, COMMUNITIES } from "../data";
import { CommunityCard } from "./CommunityCard";
import { CategoryIcon } from "./IconResolver";
import { ArrowLeft, Compass, Info, Flame, Sparkles } from "lucide-react";

interface CategoryViewProps {
  slug: string;
}

export function CategoryView({ slug }: CategoryViewProps) {
  const [selectedSub, setSelectedSub] = useState<string>("all");

  // Find the category info
  const category = CATEGORIES.find((c) => c.slug === slug);

  // If category is not in list
  if (!category) {
    return (
      <div className="text-center max-w-md mx-auto py-12 px-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Kategori Tidak Ditemukan</h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Kategori yang Anda cari tidak terdaftar atau telah dipindahkan ke kanal taksonomi lain.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-lg transition-all"
        >
          <ArrowLeft size={14} />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    );
  }

  // Filter communities in category
  const categoryCommunities = COMMUNITIES.filter((c) => c.category === slug);

  // Filter based on selected subcategory
  const displayedCommunities = selectedSub === "all"
    ? categoryCommunities
    : categoryCommunities.filter((c) => c.subcategory === selectedSub);

  return (
    <div className="space-y-12">
      {/* Back and Breadcrumbs Navigation bar */}
      <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-450 font-semibold">
        <Link to="/" className="hover:text-brand transition-colors">
          Beranda
        </Link>
        <span>/</span>
        <span className="text-neutral-950 font-bold">Kategori {category.name}</span>
      </div>

      {/* SEO Header Block wrapper */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-150 p-4 sm:p-7 md:p-10 space-y-4 sm:space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-neutral-950 text-white flex items-center justify-center shrink-0">
            <CategoryIcon name={category.icon} size={24} className="sm:w-[32px] sm:h-[32px]" />
          </div>
          <div className="space-y-1 text-left">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest bg-brand-light text-brand px-2 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg font-bold border border-brand/10">
              Direktori Rujukan
            </span>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight leading-tight mt-1">
              Komunitas {category.name} Terbaik
            </h1>
          </div>
        </div>

        {/* 2-3 SEO Description Paragraphs */}
        <div className="prose prose-sm font-semibold text-neutral-500 leading-relaxed space-y-3 text-left border-t border-neutral-100 pt-4 sm:pt-6">
          {category.seoDescription.split("\n\n").map((para, index) => (
            <p key={index} className="text-xs sm:text-sm">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Communities Directory Grid section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-150 pb-4 gap-4">
          <h2 className="text-lg font-bold text-gray-950 flex items-center gap-1.5">
            <Flame size={18} className="text-brand animate-pulse" />
            <span>{category.name} Groups Directory</span>
          </h2>
          <span className="text-xs font-semibold text-brand bg-brand-light px-2.5 py-1 rounded-md border border-brand/10 self-start md:self-auto">
            Ditemukan {displayedCommunities.length} hasil aktif
          </span>
        </div>

        {/* Dynamic subcategory filtering pills */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="bg-neutral-50 border border-neutral-150/80 rounded-xl p-3.5 sm:p-4 text-left">
            <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-2 sm:mb-2.5">
              Saring Bidang Granular:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setSelectedSub("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  selectedSub === "all"
                    ? "bg-neutral-950 text-white border-neutral-950 shadow-xs"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-350 hover:bg-neutral-50"
                }`}
              >
                Semua ({categoryCommunities.length})
              </button>
              {category.subcategories.map((sub) => {
                const subcount = categoryCommunities.filter((c) => c.subcategory === sub).length;
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSelectedSub(sub)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      selectedSub === sub
                        ? "bg-neutral-950 text-white border-neutral-950 shadow-xs"
                        : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-350 hover:bg-neutral-50"
                    }`}
                  >
                    {sub} ({subcount})
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {displayedCommunities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-5 duration-200">
            {displayedCommunities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        ) : (
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-12 text-center max-w-sm mx-auto space-y-4">
            <div className="w-12 h-12 bg-brand-light text-brand rounded-full flex items-center justify-center mx-auto">
              <Sparkles size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-gray-950 text-sm">Grup Belum Tersedia</h3>
              <p className="text-xs text-neutral-450 max-w-xs mx-auto leading-relaxed font-semibold">
                Kategori sub-bidang ini sedang dalam masa penginputan. Bantu kami mengisinya dengan mendaftarkan forum/grup Anda!
              </p>
            </div>
            <button
              onClick={() => setSelectedSub("all")}
              className="inline-block bg-neutral-950 hover:bg-brand text-white font-bold text-xs px-4.5 py-2.5 rounded-lg cursor-pointer transition-colors"
            >
              Kembali ke Semua Grup
            </button>
          </div>
        )}
      </div>

      {/* SEO Internal Linking back link block */}
      <div className="bg-neutral-950 rounded-2xl p-4 sm:p-6 text-white text-left flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border border-neutral-800">
        <div className="space-y-1">
          <h3 className="font-bold text-xs sm:text-sm">Miliki grup atau channel dalam kategori {category.name}?</h3>
          <p className="text-[10px] sm:text-xs text-neutral-400 font-semibold">Verifikasikan kepemilikan Anda untuk memantau trafik & memperbarui tautan undangan.</p>
        </div>
        <Link
          to="/"
          className="bg-brand hover:bg-brand-dark font-bold text-[11px] sm:text-xs text-white px-4 py-2.5 rounded-lg shrink-0 transition-colors text-center active:scale-95"
        >
          Klaim Sekarang &rarr;
        </Link>
      </div>
    </div>
  );
}
