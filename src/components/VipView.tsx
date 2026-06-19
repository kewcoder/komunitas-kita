import React, { useState } from "react";
import { Link } from "../router";
import { COMMUNITIES } from "../data";
import { CommunityCard } from "./CommunityCard";
import { Sparkles, Trophy, CheckCircle, Flame, DollarSign, HelpingHand, Award } from "lucide-react";

export function VipView() {
  // Get VIP communities
  const vipList = COMMUNITIES.filter((c) => c.is_vip);

  const [bookingFormData, setBookingFormData] = useState({
    name: "",
    groupName: "",
    contact: "",
    package: "gold_sponsorship",
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Marketing partnership tiers
  const MONETIZATION_TIERS = [
    {
      name: "Starter Bronze",
      price: "Rp 149.000 / bln",
      icon: "Award",
      accent: "border-neutral-200 text-neutral-800 bg-neutral-51",
      benefits: [
        "Index teratas di halaman kategori",
        "Badge perak terverifikasi",
        "Link abadi anti-kadaluwarsa",
        "Email support 1x24 jam",
      ],
    },
    {
      name: "Golden Executive",
      price: "Rp 299.000 / bln",
      icon: "Trophy",
      accent: "border-brand/40 text-brand bg-brand-light ring-2 ring-brand/10",
      isPopular: true,
      benefits: [
        "Highlight di beranda utama (Carousel)",
        "Spesial Badge Emas VIP",
        "Analisa performa traffic klik bulanan",
        "WhatsApp prioritas support",
        "Optimasi deskripsi meta SEO",
      ],
    },
    {
      name: "Ultimate Platinum",
      price: "Rp 599.000 / bln",
      icon: "Flame",
      accent: "border-neutral-200 text-neutral-900 bg-neutral-51/60",
      benefits: [
        "Semua fitur Golden Executive",
        "Review editorial tertulis 500 kata",
        "Broadcast promo di buletin bulanan",
        "Integrasi feed event harian",
        "Konsultasi HR/Growth partner gratis",
      ],
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[VIP Partnership Request Sent]", bookingFormData);
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingFormData({
        name: "",
        groupName: "",
        contact: "",
        package: "gold_sponsorship",
      });
    }, 4000);
  };

  return (
    <div className="space-y-16 text-left">
      {/* Hero promo heading */}
      <section className="text-center max-w-4xl mx-auto space-y-4 pt-4 md:pt-8 animate-fade-in">
        <div className="inline-flex items-center gap-1.5 bg-brand-light border border-brand/20 text-brand text-xs px-3.5 py-1 text-[11px] rounded-full font-bold">
          <Sparkles size={11} className="text-brand animate-spin-slow" />
          <span>BOOST VISIBILITAS GRUP ONLINE ANDA SEKARANG</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
          Dapatkan <span className="text-brand font-extrabold">&ldquo;VIP Partner Status&rdquo;</span>
          <br className="hidden sm:inline" /> untuk Akselerasi Member
        </h1>
        <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-bold">
          Tingkatkan jangkauan organik grup Discord, Telegram, atau WhatsApp Anda di Google Search. Raih ratusan klik pengguna berkualitas setiap harinya.
        </p>
      </section>

      {/* Featured Listing Sections */}
      <section className="space-y-6">
        <div className="border-b border-neutral-150 pb-4">
          <h2 className="text-xl font-bold text-neutral-950 flex items-center gap-2">
            <Sparkles className="text-brand" size={20} />
            <span>Aktif VIP Partner Listings</span>
          </h2>
          <p className="text-xs text-neutral-450 font-bold">
            Komunitas premium yang memiliki kredibilitas terverifikasi tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vipList.map((c) => (
            <CommunityCard key={c.id} community={c} />
          ))}
        </div>
      </section>

      {/* Monetization / Pricing Tiers Grid */}
      <section className="space-y-8">
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-2xl font-black text-neutral-950 flex items-center gap-2">
            <Trophy className="text-brand" size={22} />
            <span>Paket Visibilitas Komunitas Kita</span>
          </h2>
          <p className="text-xs text-neutral-450 font-bold">
            Dapatkan dukungan kurasi maksimal untuk target pertumbuhan komunitas Anda secara sehat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MONETIZATION_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-2xl sm:rounded-3xl border flex flex-col justify-between space-y-6 relative ${
                tier.isPopular ? "border-brand shadow-xs ring-1 ring-brand/10 bg-white" : "border-neutral-150 bg-white shadow-xs"
              }`}
            >
              {tier.isPopular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand text-white font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                  ★ Rekomendasi
                </span>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-neutral-950 text-base">{tier.name}</h4>
                  <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                    {tier.icon === "Trophy" ? (
                      <Trophy size={16} />
                    ) : tier.icon === "Flame" ? (
                      <Flame size={16} />
                    ) : (
                      <Award size={16} />
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-xl font-extrabold text-neutral-950 block">{tier.price}</span>
                  <span className="text-[10px] text-neutral-400 font-bold block mt-0.5">TERMASUK PAJAK PENDAPATAN</span>
                </div>

                <ul className="space-y-3 pt-4 border-t border-neutral-100 text-xs font-bold text-neutral-600">
                  {tier.benefits.map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed text-left">
                      <CheckCircle size={14} className="text-brand shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#bookingForm"
                onClick={() => {
                  const packageValue =
                    tier.name === "Ultimate Platinum"
                      ? "platinum_sponsorship"
                      : tier.name === "Golden Executive"
                      ? "gold_sponsorship"
                      : "bronze_sponsorship";
                  setBookingFormData((prev) => ({ ...prev, package: packageValue }));
                  document.getElementById("bookingForm")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full py-2.5 rounded-lg text-center text-xs font-bold transition-transform cursor-pointer ${
                  tier.isPopular
                    ? "bg-brand hover:bg-brand-dark text-white active:scale-95"
                    : "bg-neutral-950 hover:bg-brand text-white"
                }`}
              >
                Pesan Paket Ini
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form CTA section */}
      <section id="bookingForm" className="bg-neutral-950 text-white rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 shadow-md">
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-left">
            <div className="inline-block bg-brand-light/20 text-brand border border-brand/35 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-widest">
              Mitra Promosi
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
              Konsultasikan Rencana Pertumbuhan Komunitas Anda
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm font-semibold leading-relaxed">
              Butuh paket kustomisasi untuk several forum sekaligus? Hubungkan tim kemitraan kami dng mengisi formulir rujukan di samping. Respon langsung via WA dalam 15 menit.
            </p>

            <div className="flex gap-4 items-center pt-2 border-t border-neutral-800 text-xs font-bold font-mono text-neutral-400">
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-brand" />
                <span>Invoice Resmi</span>
              </div>
              <div className="flex items-center gap-1 flex-1">
                <CheckCircle size={14} className="text-brand" />
                <span>Proses Cepat &lt; 2 Jam</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-neutral-900 p-6 rounded-2xl border border-neutral-150 shadow-inner">
            {bookingSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-16 h-16 bg-brand-light text-brand rounded-full flex items-center justify-center mb-1">
                  <CheckCircle size={32} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-lg text-neutral-950">Permohonan Keterangan Terkirim</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto font-semibold">
                    Kemitraan Anda sedang diproses oleh Tim Admin Iklan KomunitasKita.id. Mohon tunggu sapaan kami via WA segera!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-1">
                      Nama Koordinator <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="misal: Ronald Silalahi"
                      value={bookingFormData.name}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-brand focus:ring-4 focus:ring-brand/10 text-xs focus:outline-none font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-1">
                      Nama Grup Chat <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="misal: AI Creators Bali"
                      value={bookingFormData.groupName}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, groupName: e.target.value })}
                      className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-brand focus:ring-4 focus:ring-brand/10 text-xs focus:outline-none font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-1">
                      No WhatsApp / Kontak <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={bookingFormData.contact}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, contact: e.target.value })}
                      className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-brand focus:ring-4 focus:ring-brand/10 text-xs focus:outline-none font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-1">
                      Pilihan Paket Iklan
                    </label>
                    <select
                      value={bookingFormData.package}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, package: e.target.value })}
                      className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-brand focus:ring-4 focus:ring-brand/10 text-xs bg-white focus:outline-none font-extrabold"
                    >
                      <option value="bronze_sponsorship">Starter Bronze (Rp 149k)</option>
                      <option value="gold_sponsorship">Golden Executive (Rp 299k)</option>
                      <option value="platinum_sponsorship">Ultimate Platinum (Rp 599k)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-neutral-950 hover:bg-brand text-white rounded-lg text-xs font-bold transition-transform cursor-pointer active:scale-[0.98]"
                >
                  Ajukan Pertemuan Kemitraan Promo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
