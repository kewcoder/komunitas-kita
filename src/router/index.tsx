import React, { createContext, useContext, useState, useEffect } from "react";

export type RouteType = "home" | "category" | "community" | "claim" | "vip" | "search";

export interface RouteState {
  type: RouteType;
  slug?: string;
}

// Parse pathname dynamically to handle clean hierarchical URLs
export function parseCurrentLocation(): RouteState {
  const path = window.location.pathname;

  if (path === "/" || path === "") {
    return { type: "home" };
  }

  if (path === "/search" || path.startsWith("/search")) {
    return { type: "search" };
  }

  if (path === "/komunitas-vip" || path.startsWith("/komunitas-vip")) {
    return { type: "vip" };
  }

  const categoryMatch = path.match(/^\/kategori\/([^/]+)/);
  if (categoryMatch) {
    return { type: "category", slug: categoryMatch[1] };
  }

  const communityMatch = path.match(/^\/komunitas\/([^/]+)/);
  if (communityMatch) {
    return { type: "community", slug: communityMatch[1] };
  }

  const claimMatch = path.match(/^\/claim\/([^/]+)/);
  if (claimMatch) {
    return { type: "claim", slug: claimMatch[1] };
  }

  // Fallback to home for nested anomalies
  return { type: "home" };
}

interface RouterContextProps {
  currentRoute: RouteState;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextProps | undefined>(undefined);

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<RouteState>(parseCurrentLocation());

  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = parseCurrentLocation();
      setCurrentRoute(nextRoute);
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to: string) => {
    // Push modern clean URL format
    window.history.pushState(null, "", to);
    setCurrentRoute(parseCurrentLocation());
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  key?: string | number;
  title?: string;
}

export function Link({ to, children, onClick, className, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser handle middle clicks, cmd+clicks, etc.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
