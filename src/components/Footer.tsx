"use client";

import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2023);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="main-footer">
      <div className="container mx-auto px-4 py-4">
        <p className="text-gray-400 text-sm">
          Copyright SWGInfinity 2023-{currentYear} All Right Reserved
        </p>
      </div>
    </footer>
  );
}
