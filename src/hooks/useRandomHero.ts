"use client";

import { useState, useEffect } from 'react';

export function useRandomHero() {
  const [heroClass, setHeroClass] = useState<string>('hero-1');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate random number between 1 and 7
    const randomHero = Math.floor(Math.random() * 7) + 1;
    console.log('Random hero selected:', randomHero);
    setHeroClass(`hero-${randomHero}`);
  }, []);

  console.log('Using hero class:', heroClass);
  // Return default hero class until mounted to prevent hydration mismatch
  return mounted ? heroClass : 'hero-1';
}