"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  showLogo?: boolean;
  theme?: "default" | "character" | "guides" | "community" | "play" | "space" | "cantina";
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  showLogo = true,
  theme = "default",
}: HeroSectionProps) {
  const heroClass = `hero-section${theme !== "default" ? `-${theme}` : ""} relative`;

  return (
    <section className={heroClass}>
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container mx-auto px-4 z-20 relative flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`md:w-${showLogo ? '2/3' : 'full'} text-center md:text-right mt-8 md:mt-0 order-1 md:order-2`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl text-white mb-6">
              {subtitle}
            </h2>
            <p className="text-white mb-6">Free-to-play</p>
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
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="play-button">
                <Play className="mr-2 h-4 w-4" />
                {ctaText}
              </Link>
            )}
          </div>
          {/* Desktop logo */}
          {showLogo && (
            <div className="md:w-1/3 flex justify-center md:justify-start order-2 md:order-1 hidden md:flex">
              <Image
                src="https://ext.same-assets.com/906812322/908964572.png"
                alt="Star Wars Galaxies Logo"
                width={300}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
