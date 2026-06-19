export interface Community {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  subcategory?: string;
  platform: "discord" | "telegram" | "whatsapp";
  type: "free" | "paid";
  invite_link: string;
  is_vip: boolean;
  member_count?: string;
  languages?: string[];
  features?: string[];
  long_description?: string;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  seoDescription: string;
  subcategories?: string[];
}

export interface ClaimSubmission {
  id: string;
  communitySlug: string;
  name: string;
  contact: string;
  message: string;
  ownershipProof?: string;
  timestamp: string;
}

export interface Review {
  id: string;
  communitySlug: string;
  reviewerName: string;
  rating: number; // 1 to 5
  reviewText: string;
  timestamp: string; // Indonesian friendly e.g. "2 hari lalu", "1 minggu lalu"
  isVerifiedMember?: boolean;
}
