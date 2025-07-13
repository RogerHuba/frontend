"use client";

import { useState, useEffect } from 'react';

export function useRandomHero() {
  const [heroClass, setHeroClass] = useState<string>('hero-1');

  useEffect(() => {
    // Generate random number between 1 and 7
    const randomHero = Math.floor(Math.random() * 7) + 1;
    console.log('Random hero selected:', randomHero);
    setHeroClass(`hero-${randomHero}`);
  }, []);

  console.log('Using hero class:', heroClass);
  return heroClass;
}