import React from "react";
import { Link, useRouter } from "../router";
import { COMMUNITIES, CATEGORIES, MOCK_REVIEWS } from "../data";
import { Review } from "../types";
import {
  Users,
  ShieldCheck,
  ExternalLink,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Award,
  Globe2,
  Lock,
  Unlock,
  MapPin,
  BookmarkCheck,
  Info,
  Star,
  MessageSquare,
  ThumbsUp,
  PenTool
} from "lucide-react";

interface CommunityViewProps {
  slug: string;
}

export function CommunityView({ slug }: CommunityViewProps) {
  const { navigate } = useRouter();
  const community = COMMUNITIES.find((c) => c.slug === slug);

  // States for reviews interactive section
  const [reviews, setReviews] = React.useState<Review[]>(() => {
    const defaultReviews = MOCK_REVIEWS.filter((r) => r.communitySlug === slug);
    const stored = localStorage.getItem(`reviews_${slug}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return [...defaultReviews, ...parsed];
        }
      } catch (e) {
        console.error("Failed to load custom reviews", e);
      }
    }
    return defaultReviews;
  });

  const [formName, setFormName] = React.useState("");
  const [formRating, setFormRating] = React.useState(5);
  const [formText, setFormText] = React.useState("");
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);
  const [reviewSubmitted, setReviewSubmitted] = React.useState(false);
  const [helpfulLikes, setHelpfulLikes] = React.useState<Record<string, number>>({});

  const toggleHelpful = (reviewId: string) => {
    setHelpfulLikes((prev) => {
      const current = prev[reviewId] || 0;
      const isLiked = current > 0;
      return {
        ...prev,
        [reviewId]: isLiked ? 0 : 1,
      };
    });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    const newReview: Review = {
      id: `custom_${Date.now()}`,
      communitySlug: slug,
      reviewerName: formName.trim(),
      rating: formRating,
      reviewText: formText.trim(),
      timestamp: "Baru saja",
      isVerifiedMember: true,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Persist custom review to localStorage
    const currentCustomStored = localStorage.getItem(`reviews_${slug}`);
    let customList = [];
    if (currentCustomStored) {
      try {
        customList = JSON.parse(currentCustomStored);
      } catch {
        customList = [];
      }
    }
    customList.push(newReview);
    localStorage.setItem(`reviews_${slug}`, JSON.stringify(customList));

    setFormName("");
    setFormRating(5);
    setFormText("");
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
    }, 4500);
  };

  const totalReviews = reviews.length;
  const avgRating = totalReviews > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : "0.0";

  // Distribution array: [5star, 4star, 3star, 2star, 1star]
  const distribution = [0, 0, 0, 0, 0];
  reviews.forEach((r) => {
    const score = Math.round(r.rating);
    if (score >= 1 && score <= 5) {
      distribution[5 - score]++;
    }
  });

  if (!community) {
    return (
      <div className="text-center max-w-md mx-auto py-12 px-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Komunitas Tidak Ditemukan</h2>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
          Uraian detail untuk grup ini belum terindeks atau dinonaktifkan sementara demi alasan kepatuhan moderasi.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-1 bg-neutral-950 hover:bg-brand text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-transform active:scale-95 duration-100 animate-in fade-in"
        >
          <ArrowLeft size={14} />
          <span>Cari Komunitas Lain</span>
        </Link>
      </div>
    );
  }

  // Find category name
  const categoryInfo = CATEGORIES.find((cat) => cat.slug === community.category);

  // Platform badges styling
  const getPlatformColors = (p: string) => {
    switch (p) {
      case "discord":
        return "bg-neutral-950 text-white";
      case "telegram":
        return "bg-neutral-950 text-white";
      case "whatsapp":
        return "bg-neutral-950 text-white";
      default:
        return "bg-neutral-950 text-white";
    }
  };

  return (
    <div className="space-y-10">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-neutral-450 font-semibold">
        <Link to="/" className="hover:text-brand transition-colors">
          Beranda
        </Link>
        <ChevronRight size={14} />
        {categoryInfo && (
          <>
            <Link to={`/kategori/${community.category}`} className="hover:text-brand transition-colors">
              {categoryInfo.name}
            </Link>
            <ChevronRight size={14} />
          </>
        )}
        <span className="text-neutral-950 font-bold truncate max-w-[200px]">{community.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT COLUMN: Deep description and information boards */}
        <div className="lg:col-span-2 space-y-8 text-left">
          {/* Main heading block */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-150 p-6 md:p-8 space-y-4 shadow-xs">

            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-snug">
              {community.name}
            </h1>

            {/* Badges line */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Platform badge */}
              <span className={`text-xs font-bold px-3 py-1 rounded-full capitalize ${getPlatformColors(community.platform)}`}>
                {community.platform} Group
              </span>

              {/* Fee badge */}
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                community.type === "free"
                  ? "bg-neutral-50 text-neutral-800 border-neutral-200"
                  : "bg-brand-light text-brand border-brand/20"
              }`}>
                {community.type === "free" ? "Akses Gratis" : "Keanggotaan Premium"}
              </span>

              {/* Category Link */}
              {categoryInfo && (
                <Link
                  to={`/kategori/${community.category}`}
                  className="text-xs font-bold px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full border border-neutral-2 hover:bg-brand-light hover:text-brand hover:border-brand/20 transition-all font-semibold uppercase tracking-wider text-[11px]"
                >
                  Kategori: {categoryInfo.name}
                </Link>
              )}
            </div>
          </div>

          {/* Deep SEO Description Paragraphs */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-150 p-6 md:p-8 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-gray-950 pb-3 border-b border-gray-50 flex items-center gap-1.5 font-bold">
              <BookmarkCheck size={20} className="text-brand" />
              <span>Tentang Komunitas</span>
            </h2>

            <div className="prose prose-sm text-neutral-600 leading-relaxed font-semibold text-sm space-y-4">
              <p>{community.description}</p>
              {community.long_description && (
                <p className="whitespace-pre-line text-xs sm:text-sm text-neutral-520 bg-neutral-51 p-4 rounded-xl border border-neutral-152 italic leading-relaxed">
                  {community.long_description}
                </p>
              )}
            </div>

            {/* Key feature list */}
            {community.features && community.features.length > 0 && (
              <div className="pt-4 space-y-3">
                <h3 className="font-bold text-xs text-neutral-400 uppercase tracking-widest">Aktivitas & Fasilitas Grup</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {community.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-neutral-700 font-bold">
                      <div className="w-5 h-5 bg-brand-light text-brand rounded-full flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Claim This Community Callbox */}
          <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl border border-dashed border-neutral-305 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <h3 className="font-bold text-neutral-950 text-lg flex items-center gap-2">
                <Award className="text-brand" size={20} />
                <span>Apakah ini Komunitas Anda?</span>
              </h3>
              <p className="text-xs text-neutral-500 max-w-md font-semibold leading-relaxed">
                Anda pemilik resmi grup <strong>{community.name}</strong>? Klaim sekarang untuk memperbarui link, memoderasi deskripsi, atau mempublikasikan rilis info produk/loker!
              </p>
            </div>
            <Link
              to={`/claim/${community.slug}`}
              className="bg-neutral-950 hover:bg-brand active:scale-95 text-white font-bold text-xs px-5 py-3 rounded-lg transition-all shrink-0"
            >
              Ini Komunitas Saya &rarr;
            </Link>
          </div>

          {/* Interactive Review Section */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-150 p-6 md:p-8 space-y-8 shadow-xs">
            <div className="border-b border-gray-100 pb-5">
              <h2 className="text-xl font-bold text-neutral-950 flex items-center gap-2">
                <MessageSquare size={22} className="text-brand" />
                <span>Ulasan & Rating Anggota</span>
              </h2>
              <p className="text-xs text-neutral-450 font-semibold mt-1">Ulasan jujur dari anggota aktif yang bergabung di platform ini.</p>
            </div>

            {/* Rating Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-neutral-50/50 p-6 rounded-xl border border-neutral-100">
              <div className="text-center md:border-r border-neutral-200/60 md:pr-6 space-y-2">
                <div className="text-5xl font-black text-neutral-950 tracking-tight">{avgRating}</div>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((starValue) => {
                    const parsedAvg = parseFloat(avgRating);
                    const fillLevel = parsedAvg >= starValue 
                      ? "fill-brand text-brand" 
                      : parsedAvg >= starValue - 0.5 
                      ? "fill-brand text-brand opacity-70" 
                      : "text-neutral-200";
                    return <Star key={starValue} size={18} className={fillLevel} />;
                  })}
                </div>
                <p className="text-xs font-bold text-neutral-450">{totalReviews} Ulasan Diverifikasi</p>
              </div>

              {/* Progress Distribution bars */}
              <div className="md:col-span-2 space-y-2">
                {distribution.map((count, index) => {
                  const starCount = 5 - index;
                  const percent = totalReviews > 0 ? (count / totalReviews) * 105 : 0;
                  return (
                    <div key={starCount} className="flex items-center gap-3 text-xs font-semibold text-neutral-500">
                      <span className="w-12 text-right flex items-center gap-1 justify-end font-bold">
                        <span>{starCount}</span>
                        <Star size={11} className="fill-brand text-brand shrink-0" />
                      </span>
                      <div className="flex-1 h-2 bg-neutral-200/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand rounded-full transition-all duration-500" 
                          style={{ width: `${Math.max(percent, count > 0 ? 8 : 0)}%` }}
                        />
                      </div>
                      <span className="w-8 text-left text-neutral-400 font-semibold">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Review Form Box */}
            <div className="bg-neutral-950 rounded-2xl p-6 text-white space-y-4 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
                <PenTool size={16} className="text-brand" />
                <h3 className="font-bold text-sm">Tulis Ulasan Anda</h3>
              </div>

              {reviewSubmitted ? (
                <div className="py-6 text-center space-y-3 animate-in fade-in zoom-in-95 duration-150">
                  <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand/25 font-bold">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-sm">Terima Kasih Atas Ulasan Anda!</p>
                    <p className="text-[11px] text-neutral-450 font-semibold">Ulasan Anda berhasil terekam dan dipublikasikan secara instan.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">Nama Lengkap</label>
                      <input 
                        type="text"
                        required
                        placeholder="misal: Gilang Ramadhan"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs font-semibold focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all text-white placeholder-neutral-600"
                      />
                    </div>

                    {/* Star selection */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">Berikan Rating</label>
                      <div className="flex items-center gap-1.5 py-1.5">
                        {[1, 2, 3, 4, 5].map((starValue) => {
                          const isActive = (hoverRating !== null ? hoverRating : formRating) >= starValue;
                          return (
                            <button
                              key={starValue}
                              type="button"
                              onClick={() => setFormRating(starValue)}
                              onMouseEnter={() => setHoverRating(starValue)}
                              onMouseLeave={() => setHoverRating(null)}
                              className="focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                            >
                              <Star 
                                size={22} 
                                className={`transition-colors duration-100 ${
                                  isActive ? "fill-brand text-brand" : "text-neutral-700"
                                }`} 
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">Rincian Komentar</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Bagikan pengalaman riil Anda bersosialisasi dan berdiskusi di grup chat ini..."
                      value={formText}
                      onChange={(e) => setFormText(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all text-white placeholder-neutral-600 resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2.5 bg-brand hover:bg-brand-dark active:scale-[0.98] text-white font-bold text-xs rounded-lg transition-transform flex items-center justify-center gap-1.5 cursor-pointer ml-auto"
                  >
                    <span>Kirim Ulasan Saya</span>
                    <PenTool size={12} />
                  </button>
                </form>
              )}
            </div>

            {/* List of reviews */}
            <div className="space-y-4">
              <h3 className="font-bold text-xs text-neutral-400 uppercase tracking-widest text-left pb-1 border-b border-neutral-100">
                Ulasan Anggota Terdaftar ({reviews.length})
              </h3>

              {reviews.length === 0 ? (
                <div className="text-center py-8 text-neutral-400 text-xs font-medium bg-neutral-50 rounded-2xl border border-neutral-150">
                  Belum ada ulasan untuk komunitas ini. Jadilah yang pertama memberikan ulasan!
                </div>
              ) : (
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {reviews.map((r) => {
                    const totalLikes = (helpfulLikes[r.id] || 0);
                    const isLiked = totalLikes > 0;
                    return (
                      <div key={r.id} className="p-5 rounded-2xl bg-neutral-51 border border-neutral-150 space-y-3 hover:border-brand/20 transition-colors duration-150 text-left">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-sm text-neutral-950">{r.reviewerName}</span>
                              {r.isVerifiedMember && (
                                <span className="text-[9px] uppercase font-bold bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded border border-neutral-200 tracking-wider">
                                  Anggota Aktif
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-neutral-400 font-bold font-sans">{r.timestamp}</p>
                          </div>

                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((starValue) => (
                              <Star 
                                key={starValue} 
                                size={12} 
                                className={starValue <= r.rating ? "fill-brand text-brand" : "text-neutral-200"} 
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-semibold">
                          {r.reviewText}
                        </p>

                        <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                          <button
                            onClick={() => toggleHelpful(r.id)}
                            className={`flex items-center gap-1.5 text-[11px] font-bold py-1 px-2.5 rounded-full transition-colors cursor-pointer ${
                              isLiked 
                                ? "bg-brand-light text-brand border border-brand/10" 
                                : "text-neutral-400 hover:text-neutral-750 hover:bg-neutral-100"
                            }`}
                          >
                            <ThumbsUp size={12} />
                            <span>Bermanfaat ({totalLikes})</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar metadata summary and primary join action click */}
        <div className="space-y-6 text-left">
          {/* Join action card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-150 p-6 shadow-xs space-y-6">
            {/* Display platform and size */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mx-auto border border-neutral-150">
                <Users size={32} className="text-brand" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-neutral-400">Total Anggota</span>
                <p className="text-2xl font-black text-neutral-950">{community.member_count || "Aktif"}</p>
              </div>
            </div>

            {/* Spec list items */}
            <div className="space-y-3.5 border-t border-b border-neutral-100 py-5 text-xs font-bold text-neutral-700">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Media Utama</span>
                <span className="px-2 py-0.5 rounded bg-neutral-100 capitalize font-bold">{community.platform}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Tipe Registrasi</span>
                <span className="px-2 py-0.5 rounded bg-neutral-100 capitalize font-bold">{community.type}</span>
              </div>
              {community.languages && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Bahasa</span>
                  <span className="font-bold text-neutral-800">{community.languages.join(", ")}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">ID Komunitas</span>
                <span className="font-mono text-neutral-400 text-[10px]">{community.id}</span>
              </div>
            </div>

            {/* Main CTA Join Button */}
            <a
              href={community.invite_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-950 hover:bg-brand text-white w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center text-sm active:scale-[0.98]"
            >
              <span>Bergabung Sekarang</span>
              <ExternalLink size={16} />
            </a>

            <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400 font-bold font-mono">
              <ShieldCheck size={14} className="text-brand" />
              <span>Link Aman & Terverifikasi</span>
            </div>
          </div>

          {/* Guidelines info card for users */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-6 text-white space-y-4">
            <h4 className="font-bold text-sm flex items-center gap-1.5">
              <Info size={16} className="text-brand animate-pulse" />
              <span>Aturan Bergabung</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 leading-relaxed font-semibold">
              <li className="flex gap-2">
                <span className="text-brand">1.</span>
                <span>Patuhi pedoman komunitas & jaga etika berkomunikasi.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand">2.</span>
                <span>Dilarang keras menyebarkan spam, judi online, dan malware.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand">3.</span>
                <span>Laporkan kepada moderator platform jika menemukan hal melanggar hukum.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
