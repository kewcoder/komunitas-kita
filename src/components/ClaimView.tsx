import React, { useState } from "react";
import { Link, useRouter } from "../router";
import { COMMUNITIES } from "../data";
import { ArrowLeft, CheckCircle, Mail, Phone, ShieldCheck, AlertTriangle } from "lucide-react";

interface ClaimViewProps {
  slug: string;
}

export function ClaimView({ slug }: ClaimViewProps) {
  const { navigate } = useRouter();
  const community = COMMUNITIES.find((c) => c.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
    proof: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  if (!community) {
    return (
      <div className="text-center max-w-md mx-auto py-12 px-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 font-black">Komunitas Tidak Ditemukan</h2>
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-semibold">
          Uraian detail untuk grup ini belum terindeks atau dinonaktifkan sementara demi alasan kepatuhan moderasi.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-1 bg-neutral-950 hover:bg-brand text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-transform active:scale-95 duration-100"
        >
          <ArrowLeft size={14} />
          <span>Cari Komunitas Lain</span>
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate random Ticket ID
    const randomTicket = "KK-CLAIM-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);

    console.log(`[Form Submission - Claim request relative to ${slug}]`, {
      ticketId: randomTicket,
      communityName: community.name,
      ...formData,
      timestamp: new Date().toISOString(),
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 text-left">
      {/* Back button */}
      <div>
        <button
          onClick={() => navigate(`/komunitas/${slug}`)}
          className="inline-flex items-center gap-1 text-xs md:text-sm text-neutral-450 hover:text-brand transition-colors cursor-pointer font-bold"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Detail {community.name}</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-150 overflow-hidden shadow-xs">
        {/* Header Ribbon */}
        <div className="bg-neutral-950 px-6 py-6 md:px-8 text-white space-y-1.5">
          <span className="text-[10px] tracking-widest font-bold uppercase bg-brand text-white px-2.5 py-0.5 rounded-full">
            Claim System
          </span>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">Klaim Komunitas Anda</h1>
          <p className="text-neutral-450 text-xs font-semibold">
            Isi formulir verifikasi kepemilikan untuk mengelola listing <strong>{community.name}</strong> Anda.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-brand-light text-brand rounded-full flex items-center justify-center mb-2 font-bold animate-bounce">
              <CheckCircle size={36} />
            </div>
            <div className="space-y-1">
              <h2 className="font-extrabold text-2xl text-neutral-950">Permohonan Terkirim!</h2>
              <p className="text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed font-semibold">
                Klaim Anda untuk komunitas <strong>{community.name}</strong> sedang dalam peninjauan manual tim kurasi kami.
              </p>
            </div>

            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-150 w-full max-w-md space-y-2 text-xs font-semibold text-neutral-600 font-mono text-left">
              <div className="flex justify-between">
                <span>Kode Tiket:</span>
                <span className="text-brand font-bold">{ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span>Nama Pengaju:</span>
                <span className="text-neutral-950 font-bold">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Kontak:</span>
                <span className="text-neutral-950 font-bold">{formData.contact}</span>
              </div>
              <div className="flex justify-between">
                <span>Waktu Pengajuan:</span>
                <span className="text-neutral-400 font-bold">{new Date().toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-brand-light border border-brand/10 p-3 rounded-lg text-[11px] text-neutral-800 leading-relaxed max-w-md font-semibold">
              <ShieldCheck size={16} className="text-brand shrink-0" />
              <span>Tim kami akan menghubungi Anda melalui kontak yang dicantumkan dalam 24 jam untuk pengiriman bukti lanjutan serta verifikasi administrasi grup chat.</span>
            </div>

            <button
              onClick={() => navigate(`/komunitas/${slug}`)}
              className="mt-4 bg-neutral-950 hover:bg-brand text-white font-bold text-xs px-6 py-2.5 rounded-lg transition-transform active:scale-95"
            >
              Kembali ke Detail Grup
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Warning Box */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3 text-xs text-amber-800 leading-relaxed">
              <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left font-bold">
                <span className="font-bold">Keamanan & Integritas Peninjauan</span>
                <p className="font-semibold text-neutral-700">
                  Kami memvalidasi kepemilikan grup chat secara ketat demi mencegah pencurian link rujukan. Mohon tuliskan kontak WhatsApp atau email utama Anda dengan benar agar kurator dapat memanggil sesi konfirmasi kepemilikan grup asli.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name field */}
              <div>
                <label className="block text-xs font-bold text-neutral-450 uppercase tracking-widest mb-2">
                  Nama Lengkap Pemilik / Admin <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="misal: Heriyanto Pratama"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-brand text-sm focus:outline-none focus:ring-4 focus:ring-brand/10 font-semibold transition-all"
                />
              </div>

              {/* Contact field */}
              <div>
                <label className="block text-xs font-bold text-neutral-450 uppercase tracking-widest mb-2">
                  Nomor WhatsApp atau Email Kontak <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="misal: 0812-3456-xxxx atau admin@grup.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-brand text-sm focus:outline-none focus:ring-4 focus:ring-brand/10 font-semibold transition-all"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-xs font-bold text-neutral-450 uppercase tracking-widest mb-2">
                Pesan atau Alasan Pengajuan Klaim <span className="text-brand">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="misal: Saya ingin mengklaim hak kelola sebagai founder untuk memperbarui rincian deskripsi grup chat kami yang kedaluwarsa..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-brand text-sm focus:outline-none focus:ring-4 focus:ring-brand/10 font-semibold transition-all resize-none"
              />
            </div>

            {/* Proof of ownership text */}
            <div>
              <label className="block text-xs font-bold text-neutral-450 uppercase tracking-widest mb-1 flex items-center justify-between">
                <span>Bukti Kepemilikan (Opsional)</span>
                <span className="text-[10px] text-neutral-400 font-bold normal-case">Teks Deskripsi</span>
              </label>
              <input
                type="text"
                placeholder="misal: Masukkan link screenshot kepemilikan admin atau bukti chat bio dari pemilik grup asli..."
                value={formData.proof}
                onChange={(e) => setFormData({ ...formData, proof: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-brand text-sm focus:outline-none focus:ring-4 focus:ring-brand/10 font-semibold transition-all"
              />
            </div>

            {/* Submission buttons */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-neutral-100">
              <button
                type="button"
                onClick={() => navigate(`/komunitas/${slug}`)}
                className="px-5 py-2.5 bg-neutral-50 hover:bg-neutral-105 text-neutral-600 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-neutral-950 hover:bg-brand text-white rounded-lg text-xs sm:text-sm font-bold cursor-pointer active:scale-95 transition-all"
              >
                Kirim Pengajuan Klaim
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
