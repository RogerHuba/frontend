let currentHeroClass: string | null = null;

export function getRandomHeroClass(): string {
  if (currentHeroClass === null) {
    // Only generate random on client-side
    if (typeof window !== 'undefined') {
      const randomHero = Math.floor(Math.random() * 7) + 1;
      currentHeroClass = `hero-${randomHero}`;
    } else {
      // Default hero class for server-side rendering
      currentHeroClass = 'hero-1';
    }
  }
  return currentHeroClass;
}

export function resetHeroClass(): void {
  currentHeroClass = null;
}