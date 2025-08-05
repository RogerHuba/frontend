"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, Play, ChevronDown } from "lucide-react";
import { ServerStatus } from "@/components/ServerStatus";

// Define types for nav items
interface SubmenuItem {
  name: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
}

// Define the navigation menu items
const navItems: NavItem[] = [
  {
    name: "ABOUT INFINITY",
    href: "/about-infinity",
    submenu: [
      { name: "Latest Patch Notes", href: "/patchupdates" },
      { name: "Monthly Spotlight", href: "/monthly-spotlight" },
      { name: "Infinity Specific Rules", href: "/about-infinity/infinity-specific-rules" },
      { name: "Roadmap", href: "/about-infinity/roadmap" },
      { name: "Vision and Mantras", href: "/about-infinity/vision-and-mantras" },
      { name: "Meet the team", href: "/about-infinity/meet-the-team" },
      { name: "Join the Team", href: "/join-the-team" },
    ],
  },
  {
    name: "GAMEPLAY ASSISTANCE",
    href: "/gameplay-assistance",
    submenu: [
      { name: "Profession Guides", href: "/guides/profession-guides" },
      { name: "Adventure Guides", href: "/guides/adventure-guides" },
      { name: "Treasure Hunting", href: "/guides/treasure-hunting" },
      { name: "Character Builder", href: "/character-builder" },
    ],
  },
  {
    name: "SERVER INFORMATION",
    href: "/server-information",
    submenu: [
      { name: "Cities", href: "/server-information/cities" },
      { name: "Guilds", href: "/server-information/guilds" },
      { name: "Heritage", href: "/server-information/heritage" },
      { name: "Game Pictures", href: "/server-information/game-pictures" },
      { name: "Resources", href: "/server-information/resources" },
      { name: "Schematics", href: "/server-information/schematics" },
      { name: "Galactic Civil War", href: "/server-information/galactic-civil-war" },
    ],
  },
  {
    name: "SUPPORT",
    href: "/support",
    submenu: [
      { name: "FAQ for New Players", href: "/faq" },
      { name: "New Infinity Launcher", href: "/new-launcher" },
      { name: "Multiple Account Request", href: "/multiple-account-request" },
    ],
  },
  { name: "DONATE", href: "/donate" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (itemName: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveDropdown(prev => prev === itemName ? null : itemName);
  };

  // Close dropdown when clicking outside
  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  // Close dropdowns when clicking anywhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the clicked element is part of a dropdown
      const target = event.target as Element;
      if (target && !target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="main-nav fixed top-0 left-0 right-0 z-[100] py-2 md:py-3 backdrop-blur-sm bg-black/90 transition-all duration-300">
      <div className="container mx-auto px-2 sm:px-3 md:px-4 max-w-full">
        {/* Mobile Layout (sm and below) */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Logo + Discord */}
          <div className="flex items-center space-x-1 flex-shrink-0 min-w-0 ml-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/906812322/2537617269.png"
                alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                width={60}
                height={32}
                priority
                className="w-[60px] h-[32px]"
              />
            </Link>
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-2 py-1 rounded-md flex items-center space-x-1 transition-all duration-200 font-medium shadow-lg text-xs flex-shrink-0"
            >
              <MessageCircle className="h-3 w-3" />
              <span className="hidden xs:inline">Discord</span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-white p-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0 ml-5">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/906812322/2537617269.png"
                alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                width={80}
                height={42}
                priority
                className="w-[80px] h-[42px]"
              />
            </Link>
          </div>
          {/* Compact Navigation */}
          <div className="flex items-center space-x-1 flex-1 justify-center mx-2 min-w-0 overflow-visible relative">                {navItems.map((item) => (
                  <div key={item.name} className="relative flex-shrink-0 z-50 dropdown-container">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={(e) => toggleDropdown(item.name, e)}
                          className="text-white hover:text-gray-300 cursor-pointer text-xs font-semibold py-1 px-1 flex items-center tracking-tight whitespace-nowrap relative z-50"
                        >
                      {item.name.includes(' ') ? item.name.split(' ')[0] : item.name}
                      <ChevronDown
                        className={`ml-1 h-3 w-3 text-gray-400 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div
                        className="dropdown-menu absolute left-0 mt-1 w-44 py-1 z-[9999]"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '0',
                          zIndex: 99999,
                          backgroundColor: '#0d0d30',
                          border: '1px solid #1a1a4a',
                          borderRadius: '6px',
                          display: 'block',
                          minHeight: '100px',
                          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
                        }}
                      >
                        {item.submenu.map((subItem) =>
                          subItem.external ? (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-xs text-gray-200 hover:bg-[#1a1a4a] hover:text-white"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeDropdowns}
                              style={{
                                display: 'block',
                                color: '#e5e7eb',
                                textDecoration: 'none',
                                padding: '8px 12px'
                              }}
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-xs text-gray-200 hover:bg-[#1a1a4a] hover:text-white"
                              onClick={closeDropdowns}
                              style={{
                                display: 'block',
                                color: '#e5e7eb',
                                textDecoration: 'none',
                                padding: '8px 12px'
                              }}
                            >
                              {subItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="text-white hover:text-gray-300 text-xs font-semibold py-1 px-1 tracking-tight transition-colors whitespace-nowrap">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          {/* Tablet Status Panel */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg px-2 py-1 w-[140px] flex items-center justify-center">
              <ServerStatus showRefresh={false} />
            </div>
            <div className="flex flex-col space-y-1">
              <a href="https://discord.gg/jyakeRJ" target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-2 py-1 rounded-md flex items-center justify-center space-x-1 transition-all duration-200 font-medium shadow-lg text-xs w-[70px]">
                <MessageCircle className="h-3 w-3" />
                <span>Discord</span>
              </a>
              <Link href="/play-now" className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-2 py-1 rounded-md flex items-center justify-center space-x-1 transition-all duration-200 font-medium shadow-lg text-xs w-[70px]">
                <Play className="h-3 w-3" />
                <span>Play</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:flex items-center w-full gap-2 lg:gap-3 xl:gap-4">
          {/* Logo Section - Fixed width */}
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <Image
                src="https://ext.same-assets.com/906812322/2537617269.png"
                alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                width={75}
                height={40}
                className="lg:w-[80px] lg:h-[42px] xl:w-[90px] xl:h-[48px] 2xl:w-[100px] 2xl:h-[53px] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Navigation Section - Flexible but constrained */}
          <div className="flex-1 flex justify-center min-w-0 max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto">
            <nav className="flex items-center">
              <div className="border-l border-gray-600 h-12 pl-3 lg:pl-4 xl:pl-5 2xl:pl-6">
                <ul className="flex space-x-0.5 lg:space-x-1 xl:space-x-1.5 2xl:space-x-2 min-w-0 flex-wrap justify-center">
                  {navItems.map((item) => (
                    <li key={item.name} className="relative flex-shrink-0 min-w-0 z-50 dropdown-container">
                      {item.submenu ? (
                        <>
                          <button
                            onClick={(e) => toggleDropdown(item.name, e)}
                            className="text-white hover:text-gray-300 cursor-pointer text-xs lg:text-sm xl:text-sm 2xl:text-base font-semibold py-2 px-0.5 lg:px-1 xl:px-1 2xl:px-1.5 flex items-center tracking-tight whitespace-nowrap min-w-0 relative z-50 transition-all duration-200 hover:scale-105 group"
                          >
                            <span className="truncate text-xs lg:text-sm xl:text-sm 2xl:text-base group-hover:text-yellow-400 transition-colors duration-200">{item.name}</span>
                            <ChevronDown
                              className={`ml-0.5 lg:ml-1 h-3 lg:h-3.5 w-3 lg:w-3.5 text-gray-400 transition-all duration-300 flex-shrink-0 group-hover:text-yellow-400 ${
                                activeDropdown === item.name ? 'rotate-180 text-yellow-400' : ''
                              }`}
                            />
                          </button>
                          {activeDropdown === item.name && (
                            <div
                              className="dropdown-menu absolute left-0 mt-1 w-56 py-1 z-[9999]"
                              style={{
                                position: 'absolute',
                                top: '100%',
                                left: '0',
                                zIndex: 99999,
                                backgroundColor: '#0d0d30',
                                border: '1px solid #1a1a4a',
                                borderRadius: '6px',
                                display: 'block',
                                minHeight: '100px',
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
                              }}
                            >
                              {item.submenu.map((subItem) =>
                                subItem.external ? (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a1a4a] hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeDropdowns}
                                    style={{
                                      display: 'block',
                                      color: '#e5e7eb',
                                      textDecoration: 'none',
                                      padding: '8px 16px'
                                    }}
                                  >
                                    {subItem.name}
                                  </a>
                                ) : (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a1a4a] hover:text-white"
                                    onClick={closeDropdowns}
                                    style={{
                                      display: 'block',
                                      color: '#e5e7eb',
                                      textDecoration: 'none',
                                      padding: '8px 16px'
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link href={item.href} className="text-white hover:text-gray-300 text-xs lg:text-sm xl:text-sm 2xl:text-base font-semibold py-2 px-0.5 lg:px-1 xl:px-1 2xl:px-1.5 tracking-tight transition-all duration-200 whitespace-nowrap flex items-center min-w-0 hover:scale-105 hover:text-yellow-400 group">
                          <span className="truncate relative">
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* Status Panel Section - Fixed width */}
          <div className="flex-shrink-0 flex items-center space-x-1 lg:space-x-1.5 xl:space-x-2 2xl:space-x-3">
            {/* Server Status */}
            <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg px-2 lg:px-2.5 xl:px-3 2xl:px-4 py-2 flex items-center justify-center h-10 min-w-[140px] lg:min-w-[150px] xl:min-w-[160px] 2xl:min-w-[170px] transition-all duration-300 hover:border-green-500/40 hover:bg-[#0d0d30]/80 hover:shadow-lg hover:shadow-green-500/20 group">
              <ServerStatus showRefresh={false} />
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-1 lg:space-x-1 xl:space-x-1.5 2xl:space-x-2 h-10 items-center">
              <a 
                href="https://discord.gg/jyakeRJ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-1.5 lg:px-2 xl:px-2.5 2xl:px-3 py-2 rounded-lg flex items-center justify-center space-x-1 lg:space-x-1 xl:space-x-1.5 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:shadow-[#5865F2]/30 transform hover:scale-110 hover:-translate-y-0.5 min-w-[60px] lg:min-w-[65px] xl:min-w-[75px] 2xl:min-w-[85px] text-xs lg:text-sm h-10 group"
              >
                <MessageCircle className="h-3 lg:h-3.5 w-3 lg:w-3.5 flex-shrink-0 group-hover:animate-pulse" />
                <span className="hidden lg:inline">Discord</span>
              </a>
              <Link 
                href="/play-now" 
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-1.5 lg:px-2 xl:px-2.5 2xl:px-3 py-2 rounded-lg flex items-center justify-center space-x-1 lg:space-x-1 xl:space-x-1.5 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:shadow-yellow-500/40 transform hover:scale-110 hover:-translate-y-0.5 min-w-[60px] lg:min-w-[65px] xl:min-w-[75px] 2xl:min-w-[85px] text-xs lg:text-sm h-10 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="h-3 lg:h-3.5 w-3 lg:w-3.5 flex-shrink-0 relative z-10 group-hover:animate-bounce" />
                <span className="hidden lg:inline relative z-10">Play</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0d0d30] border-t border-[#1a1a4a] mt-3">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Status Panel */}
            <div className="px-3 py-3 border-b border-[#1a1a4a] mb-3">
              <div className="flex flex-col space-y-3">
                {/* Mobile Server Status Box - Full Width */}
                <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg px-4 py-3">
                  <ServerStatus showRefresh={true} />
                </div>
                {/* Mobile Action Buttons Row */}
                <div className="flex space-x-2">
                  {/* Mobile Discord Button */}
                  <a
                    href="https://discord.gg/jyakeRJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 font-medium shadow-lg flex-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Discord</span>
                  </a>
                  {/* Mobile Play Now Button */}
                  <Link
                    href="/play-now"
                    className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 font-medium shadow-lg flex-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Play className="h-4 w-4" />
                    <span>Play Now</span>
                  </Link>
                </div>
              </div>
            </div>
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="py-2">
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      className="w-full flex justify-between items-center text-white font-medium px-3 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-6 space-y-2 mt-1">
                        {item.submenu.map((subItem) =>
                          subItem.external ? (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-1 text-sm text-gray-200 hover:text-white"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => {
                                setIsMenuOpen(false);
                                closeDropdowns();
                              }}
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-1 text-sm text-gray-200 hover:text-white"
                              onClick={() => {
                                setIsMenuOpen(false);
                                closeDropdowns();
                              }}
                            >
                              {subItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-white font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
