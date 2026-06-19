import React from "react";
import { Community } from "../types";
import { Link } from "../router";
import { MessageSquare, ShieldCheck, Users, ExternalLink, Star } from "lucide-react";
import { MOCK_REVIEWS } from "../data";

interface CommunityCardProps {
  community: Community;
  key?: string | number;
}

export function CommunityCard({ community }: CommunityCardProps) {
  // Calculate average rating
  const communityReviews = MOCK_REVIEWS.filter(r => r.communitySlug === community.slug);
  const totalC = communityReviews.length;
  const avgRating = totalC > 0 
    ? (communityReviews.reduce((sum, r) => sum + r.rating, 0) / totalC).toFixed(1)
    : "0.0";

  // Get platform icon and colors
  const getPlatformStyle = (p: string) => {
    switch (p) {
      case "discord":
        return {
          bg: "bg-neutral-50 border-neutral-200 text-neutral-800",
          tag: "bg-neutral-950 text-white",
          label: "Discord",
        };
      case "telegram":
        return {
          bg: "bg-neutral-50 border-neutral-200 text-neutral-800",
          tag: "bg-neutral-950 text-white",
          label: "Telegram",
        };
      case "whatsapp":
        return {
          bg: "bg-neutral-50 border-neutral-200 text-neutral-800",
          tag: "bg-neutral-950 text-white",
          label: "WhatsApp",
        };
      default:
        return {
          bg: "bg-neutral-50 border-neutral-200 text-neutral-850",
          tag: "bg-neutral-950 text-white",
          label: "Grup Chat",
        };
    }
  };

  const platform = getPlatformStyle(community.platform);

  return (
    <div
      className="relative bg-white rounded-2xl border border-neutral-150 shadow-xs transition-all duration-305 hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="p-5 flex flex-col h-full justify-between">
        <div className="space-y-3.5 text-left">
          {/* Metadata badges row */}
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Platform Badge */}
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${platform.bg}`}>
              {platform.label}
            </span>

            {/* Price Badge */}
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                community.type === "free"
                  ? "bg-neutral-50 text-neutral-700 border-neutral-200"
                  : "bg-brand-light text-brand border-brand/20"
              }`}
            >
              {community.type === "free" ? "Gratis" : "Berbayar"}
            </span>

            {/* Category badge link */}
            <span className="text-[10px] font-bold px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full border border-neutral-2 bg-neutral-50 uppercase tracking-wider">
              {community.category}
            </span>
          </div>

          {/* Heading */}
          <h3 className="font-bold text-gray-950 group text-left">
            <Link
              to={`/komunitas/${community.slug}`}
              className="hover:text-brand transition-colors block text-base md:text-lg leading-snug font-bold"
            >
              {community.name}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-xs line-clamp-3 leading-relaxed font-semibold">
            {community.description}
          </p>

          {/* Member count & Rating indicators row */}
          <div className="flex flex-wrap items-center gap-2">
            {community.member_count && (
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-550 bg-neutral-50 px-2.5 py-1 rounded-lg border border-neutral-100">
                <Users size={11} className="text-gray-400" />
                <span>{community.member_count} Anggota</span>
              </div>
            )}

            {totalC > 0 && (
              <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-700 bg-neutral-50 px-2.5 py-1 rounded-lg border border-neutral-200">
                <Star size={11} className="fill-brand text-brand" />
                <span>{avgRating} ({totalC} ulasan)</span>
              </div>
            )}
          </div>

          {/* Core features if provided */}
          {community.features && community.features.length > 0 && (
            <div className="pt-2 border-t border-dashed border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                Kelebihan Grup:
              </span>
              <div className="flex flex-wrap gap-1">
                {community.features.slice(0, 3).map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-neutral-50 text-neutral-700 border border-neutral-150 rounded px-1.5 py-0.5 font-semibold"
                  >
                    • {feat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Link Row */}
        <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
          <Link
            to={`/komunitas/${community.slug}`}
            className="text-xs font-bold text-brand hover:text-brand-dark transition-colors flex items-center gap-1"
          >
            <span>Selengkapnya</span>
          </Link>

          <a
            href={community.invite_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-950 hover:bg-brand text-white font-bold text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all duration-150 active:scale-95"
          >
            <span>Join Grup</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
