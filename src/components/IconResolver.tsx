import React from "react";
import {
  Coins,
  Code,
  Sparkles,
  Briefcase,
  Gamepad2,
  Palette,
  GraduationCap,
  Dumbbell,
  Video,
  Heart,
  UserCheck,
  Tv,
} from "lucide-react";

interface IconResolverProps {
  name: string;
  className?: string;
  size?: number;
}

export function CategoryIcon({ name, className = "", size = 24 }: IconResolverProps) {
  switch (name) {
    case "Coins":
      return <Coins className={className} size={size} />;
    case "Code":
      return <Code className={className} size={size} />;
    case "Sparkles":
      return <Sparkles className={className} size={size} />;
    case "Briefcase":
      return <Briefcase className={className} size={size} />;
    case "Gamepad2":
      return <Gamepad2 className={className} size={size} />;
    case "Palette":
      return <Palette className={className} size={size} />;
    case "GraduationCap":
      return <GraduationCap className={className} size={size} />;
    case "Dumbbell":
      return <Dumbbell className={className} size={size} />;
    case "Video":
      return <Video className={className} size={size} />;
    case "Heart":
      return <Heart className={className} size={size} />;
    case "UserCheck":
      return <UserCheck className={className} size={size} />;
    case "Tv":
      return <Tv className={className} size={size} />;
    default:
      return <Sparkles className={className} size={size} />;
  }
}
