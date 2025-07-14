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
      { name: "Quest Guides", href: "/guides/quest-guides" },
      { name: "Dungeon Guides", href: "/guides/dungeon-guides" },
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
    href: "/support-2",
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
    if (activeDropdown === itemName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemName);
    }
  };

  // Close dropdown when clicking outside
  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  // Close dropdowns when clicking anywhere
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  return (
    <header className="main-nav fixed top-0 left-0 right-0 z-[100] py-2 md:py-3">
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
                  <div key={item.name} className="relative flex-shrink-0 z-50">
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
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0 ml-3 lg:ml-3 xl:ml-4 2xl:ml-4">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/906812322/2537617269.png"
                alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                width={75}
                height={40}
                className="lg:w-[80px] lg:h-[42px] xl:w-[90px] xl:h-[48px] 2xl:w-[100px] 2xl:h-[53px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center flex-1 justify-between ml-3 lg:ml-4 xl:ml-5 2xl:ml-6 min-w-0">
            <div className="border-l border-gray-600 h-12 pl-3 lg:pl-4 xl:pl-5 2xl:pl-6 flex-1 min-w-0 flex items-center overflow-visible">
              <ul className="flex space-x-0.5 lg:space-x-1 xl:space-x-2 2xl:space-x-3 justify-center w-full min-w-0 relative">
                {navItems.map((item) => (
                  <li key={item.name} className="relative flex-shrink-0 min-w-0 z-50">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={(e) => toggleDropdown(item.name, e)}
                          className="text-white hover:text-gray-300 cursor-pointer text-xs lg:text-sm xl:text-sm 2xl:text-base font-semibold py-2 px-0.5 lg:px-1 xl:px-1.5 2xl:px-2 flex items-center tracking-tight whitespace-nowrap min-w-0 relative z-50"
                        >
                          <span className="truncate">{item.name}</span>
                          <ChevronDown
                            className={`ml-1 h-3 lg:h-4 w-3 lg:w-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
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
                      <Link href={item.href} className="text-white hover:text-gray-300 text-xs lg:text-sm xl:text-sm 2xl:text-base font-semibold py-2 px-0.5 lg:px-1 xl:px-1.5 2xl:px-2 tracking-tight transition-colors whitespace-nowrap flex items-center min-w-0">
                        <span className="truncate">{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Status Panel */}
            <div className="border-l border-gray-600 h-12 pl-3 lg:pl-4 xl:pl-5 2xl:pl-6 flex items-center space-x-1.5 lg:space-x-2 xl:space-x-3 2xl:space-x-4 flex-shrink-0">
              <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg px-2.5 lg:px-3 xl:px-4 2xl:px-5 py-2 w-[155px] lg:w-[165px] xl:w-[180px] 2xl:w-[195px] flex items-center justify-center flex-shrink-0 h-10">
                <ServerStatus showRefresh={false} />
              </div>
              <div className="flex flex-row space-x-1 lg:space-x-1.5 xl:space-x-2 2xl:space-x-3 flex-shrink-0 h-10 items-center">
                <a href="https://discord.gg/jyakeRJ" target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-2 lg:px-2.5 xl:px-3 2xl:px-4 py-2 rounded-lg flex items-center justify-center space-x-1 lg:space-x-1.5 xl:space-x-1.5 2xl:space-x-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 w-[70px] lg:w-[78px] xl:w-[88px] 2xl:w-[98px] text-xs lg:text-sm h-10">
                  <MessageCircle className="h-3 lg:h-4 w-3 lg:w-4" />
                  <span>Discord</span>
                </a>
                <Link href="/play-now" className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-2 lg:px-2.5 xl:px-3 2xl:px-4 py-2 rounded-lg flex items-center justify-center space-x-1 lg:space-x-1.5 xl:space-x-1.5 2xl:space-x-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 w-[70px] lg:w-[78px] xl:w-[88px] 2xl:w-[98px] text-xs lg:text-sm h-10">
                  <Play className="h-3 lg:h-4 w-3 lg:w-4" />
                  <span>Play Now</span>
                </Link>
              </div>
            </div>
          </nav>
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
