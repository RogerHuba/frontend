"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getRandomHeroClass } from "@/utils/heroService";

interface RandomHeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  showLogo?: boolean;
}

export function RandomHeroSection({ title, subtitle, children, className = "", showLogo = true }: RandomHeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [heroClass, setHeroClass] = useState('hero-1');
  
  useEffect(() => {
    // Use the singleton service to ensure same hero across all components
    setHeroClass(getRandomHeroClass());
    setMounted(true);
  }, []);

  return (
    <section className={`hero-section ${mounted ? heroClass : 'hero-1'} ${className}`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          <p className="text-white mb-6 md:hidden">Free-to-play</p>
          {/* Mobile logo below Free-to-play text */}
          {showLogo && (
            <div className="md:hidden flex justify-center mb-6">
              <Image
                src="https://ext.same-assets.com/906812322/908964572.png"
                alt="Star Wars Galaxies Logo"
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}