"use client";

import { PageLayout } from "@/components/PageLayout";
import { Package, Construction } from "lucide-react";

export function HeritagePage() {
  return (
    <PageLayout
      title="Heritage Schematics"
      subtitle="Discover rare and unique schematics from SWG Infinity's history"
      heroClass="hero-section-heritage"
    >
      {/* Under Construction Notice */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/50 rounded-lg p-8 mb-8">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Construction className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">Heritage Schematics Coming Soon</h2>
            <p className="text-gray-300 max-w-2xl">
              We're working on bringing you a comprehensive collection of rare and unique heritage schematics 
              from SWG Infinity's rich history. This section will feature legacy items, special event rewards, 
              and historically significant crafting blueprints.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Preview */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <Package className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Legacy Schematics</h3>
          <p className="text-gray-400">
            Rare blueprints from SWG's early days, including discontinued and special event items.
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <Package className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Event Rewards</h3>
          <p className="text-gray-400">
            Special schematics awarded during server events and milestone celebrations.
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <Package className="w-12 h-12 text-green-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Historical Items</h3>
          <p className="text-gray-400">
            Significant crafting blueprints that shaped the server's economy and culture.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
