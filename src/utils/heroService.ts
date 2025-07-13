let currentHeroClass: string | null = null;

export function getRandomHeroClass(): string {
  if (currentHeroClass === null) {
    const randomHero = Math.floor(Math.random() * 7) + 1;
    currentHeroClass = `hero-${randomHero}`;
  }
  return currentHeroClass;
}

export function resetHeroClass(): void {
  currentHeroClass = null;
}