import React, { useState } from "react";
import { Link, useRouter } from "../router";
import { Search, Sparkles, Plus, CheckCircle, HelpCircle, Mail } from "lucide-react";

export function Header() {
  const { navigate } = useRouter();
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "programming",
    platform: "discord",
    type: "free",
    invite_link: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Community registered for verification:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddModal(false);
      setFormData({
        name: "",
        category: "programming",
        platform: "discord",
        type: "free",
        invite_link: "",
        description: "",
      });
    }, 3000);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-gray-950 group"
          >
            <div className="w-8 h-8 bg-black hover:bg-brand rounded-md flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-all">
              <div className="w-3 h-3 bg-brand rounded-xs transform rotate-45"></div>
            </div>
            <span className="text-lg sm:text-xl font-black text-gray-950 tracking-tight">
              Komunitas<span className="text-brand">Kita</span>
            </span>
          </Link>



          {/* Call to Actions */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hiaribahtiar@gmail.com"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-700 hover:text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-xs"
            >
              <Mail size={15} className="text-neutral-500" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Add Community Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="bg-slate-900 px-6 py-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Daftarkan Komunitas Anda</h3>
                <p className="text-xs text-slate-400">Verifikasi manual oleh tim dalam 1x24 jam</p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xl font-bold px-2"
              >
                &times;
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center flex flex-col items-center justify-center space-y-3">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-650 rounded-full flex items-center justify-center mb-2 animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h4 className="font-bold text-xl text-gray-950">Pengajuan Terkirim!</h4>
                <p className="text-sm text-gray-650 max-w-xs">
                  Terima kasih! Komunitas <strong>{formData.name}</strong> Anda telah masuk ke sistem antrean verifikasi manual kami.
                </p>
                <p className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-105">
                  Status: Menunggu Review Kurator SEO
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Nama Komunitas <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="misal: Python Developer Indonesia"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Kategori <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
                    >
                      <option value="programming">Programming</option>
                      <option value="ai">Artificial Intelligence (AI)</option>
                      <option value="crypto">Crypto & Web3</option>
                      <option value="business">Business & Startup</option>
                      <option value="gaming">Gaming</option>
                      <option value="design">Design & UI/UX</option>
                      <option value="education">Education</option>
                      <option value="fitness">Fitness</option>
                      <option value="creator">Creator</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="career">Career</option>
                      <option value="entertainment">Entertainment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Platform Grup <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
                    >
                      <option value="discord">Discord</option>
                      <option value="telegram">Telegram</option>
                      <option value="whatsapp">WhatsApp Group</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Tipe Akses <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: "free" })}
                        className={`flex-1 py-1.5 px-3 border rounded-lg text-xs font-medium cursor-pointer ${
                          formData.type === "free"
                            ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                            : "bg-white border-gray-200 text-gray-600"
                        }`}
                      >
                        Gratis (Free)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: "paid" })}
                        className={`flex-1 py-1.5 px-3 border rounded-lg text-xs font-medium cursor-pointer ${
                          formData.type === "paid"
                            ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                            : "bg-white border-gray-200 text-gray-600"
                        }`}
                      >
                        Berbayar (Paid)
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Link Undangan / Join <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://t.me/... atau https://discord.gg/..."
                      value={formData.invite_link}
                      onChange={(e) => setFormData({ ...formData, invite_link: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Deskripsi Singkat (SEO Friendly)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tuliskan misi grup, syarat bergabung, dan aktivitas menarik komunitas Anda secara singkat dan jelas..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-lg text-sm font-semibold cursor-pointer text-center"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold cursor-pointer text-center"
                  >
                    Kirim untuk Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
