import React from "react";
import { RouterProvider, useRouter } from "./router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { CategoryView } from "./components/CategoryView";
import { CommunityView } from "./components/CommunityView";
import { ClaimView } from "./components/ClaimView";
import { VipView } from "./components/VipView";
import { SearchView } from "./components/SearchView";

function AppContent() {
  const { currentRoute } = useRouter();

  // Route switcher corresponding to current pathnames
  const renderActiveView = () => {
    switch (currentRoute.type) {
      case "home":
        return <HomeView />;
      case "search":
        return <SearchView />;
      case "category":
        return <CategoryView slug={currentRoute.slug || ""} />;
      case "community":
        return <CommunityView slug={currentRoute.slug || ""} />;
      case "claim":
        return <ClaimView slug={currentRoute.slug || ""} />;
      case "vip":
        return <VipView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/40 text-gray-800 flex flex-col font-sans antialiased selection:bg-indigo-200 selection:text-indigo-900">
      {/* Universal Sticky Header */}
      <Header />

      {/* Primary Layout Container */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8 sm:py-12 md:py-16">
        {renderActiveView()}
      </main>

      {/* Footer Navigation Hub */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
