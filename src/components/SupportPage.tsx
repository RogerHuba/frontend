"use client";

import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Search, HelpCircle, DownloadCloud, Shield, Users, MessageSquare } from "lucide-react";

type FAQCategory = "general" | "installation" | "gameplay" | "account" | "technical";

interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

export function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | "all">("all");

  const toggleQuestion = (index: number) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  const faqs: FAQ[] = [
    {
      question: "What is SWG Infinity?",
      answer: "SWG Infinity is a Pre-Combat Upgrade (PreCU) Star Wars Galaxies emulator, providing players with an authentic experience of Star Wars Galaxies as it existed before the controversial Combat Upgrade. We offer a stable environment with custom content and quality-of-life improvements while maintaining the core gameplay that made SWG beloved.",
      category: "general",
    },
    {
      question: "Is SWG Infinity free to play?",
      answer: "Yes, SWG Infinity is completely free to play. We are supported by voluntary donations from our community, but there is no requirement to pay anything to enjoy the full game experience. ",
      category: "general",
    },
    {
      question: "How do I download and install SWG Infinity?",
      answer: "To play SWG Infinity, you'll need to download our custom launcher from the 'Play Now' section of our website. The launcher will guide you through the installation process, downloading all necessary game files and keeping them up-to-date automatically.",
      category: "installation",
    },
    {
      question: "Do I need the original Star Wars Galaxies discs?",
      answer: "You do need to own the disks but do not need the disks to install the game through the launcher. Our launcher contains everything you need to play SWG Infinity and will handle all downloads and installation automatically.",
      category: "installation",
    },
    {
      question: "What are the system requirements?",
      answer: "SWG runs on most modern systems without issue. Minimum requirements: Windows 7 or newer, 4GB RAM, 20GB free disk space, and a dedicated graphics card with 1GB VRAM. Recommended: 8GB RAM, SSD storage, and a graphics card with 2GB VRAM or better.",
      category: "technical",
    },
    {
      question: "How do I create an account?",
      answer: "You can create a free account directly through our launcher when you first start it up, or through the account creation section on our website. You'll need to provide a valid email address for verification.",
      category: "account",
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the launcher login screen or on our website. A password reset link will be sent to your registered email address.",
      category: "account",
    },
    {
      question: "How do I become a Jedi?",
      answer: "Becoming a Jedi in SWG Infinity follows a modified version of The Village path. You'll need to find the Force Sensitive Village on Dathomir, complete various tasks and trials, and progress through four phases of Force training. See our detailed Jedi Unlock guide for more information.",
      category: "gameplay",
    },
    {
      question: "Can I have multiple accounts?",
      answer: "By default, each player is allowed one account. However, you can apply for additional accounts through our Multiple Account Request system. All requests are manually reviewed.",
      category: "account",
    },
    {
      question: "The game won't launch. What should I do?",
      answer: "First, ensure your launcher is up-to-date. Try running the launcher as Administrator. If that doesn't work, try the repair option in the launcher settings. If you're still having issues, check our Discord for support.",
      category: "technical",
    },
    {
      question: "How do I join a guild?",
      answer: "You can join guilds by receiving an invitation from a guild leader or officer. To find guilds recruiting, check the Community section of our forums, the #guild-recruitment channel on our Discord, or simply ask in general chat in-game. Many guilds are happy to welcome new members.",
      category: "gameplay",
    },
    {
      question: "How often is SWG Infinity updated?",
      answer: "We release major content updates approximately every 2-3 months, with smaller patches and bugfixes deployed weekly or bi-weekly, althrough not on a fixed schedule. We announce all updates on our Discord server, with patch notes detailing all changes.",
      category: "general",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    // Category filter
    if (selectedCategory !== "all" && faq.category !== selectedCategory) {
      return false;
    }

    // Search filter
    if (searchQuery.trim() !== "") {
      const normalizedQuery = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(normalizedQuery) ||
        faq.answer.toLowerCase().includes(normalizedQuery)
      );
    }

    return true;
  });

  const categories = [
    { id: "all", label: "All FAQs", icon: HelpCircle },
    { id: "general", label: "General", icon: HelpCircle },
    { id: "installation", label: "Installation", icon: DownloadCloud },
    { id: "gameplay", label: "Gameplay", icon: Users },
    { id: "account", label: "Account", icon: Shield },
    { id: "technical", label: "Technical", icon: MessageSquare },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <div className="bg-[url('https://ext.same-assets.com/906812322/2240799338.jpeg')] bg-cover bg-center py-16">
          <div className="container mx-auto px-4">
            <div className="bg-black/70 p-8 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Support Center</h1>
              <p className="text-gray-300">Find answers to common questions or contact our team</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

                <div className="mb-8">
                  <div className="relative mb-6">
                    <input
                      id="faq-search"
                      name="faqSearch"
                      type="text"
                      className="w-full bg-[rgba(13,13,30,0.6)] pl-10 pr-4 py-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      placeholder="Search for answers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Search className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => {
                      const CategoryIcon = category.icon;
                      return (
                        <button
                          key={category.id}
                          className={`px-4 py-2 rounded-full flex items-center text-sm ${
                            selectedCategory === category.id || (category.id === "all" && selectedCategory === "all")
                              ? "bg-blue-500 text-white"
                              : "bg-[rgba(20,30,60,0.6)] text-gray-300 hover:bg-[rgba(30,40,70,0.6)]"
                          }`}
                          onClick={() => setSelectedCategory(category.id as FAQCategory | "all")}
                        >
                          <CategoryIcon className="h-4 w-4 mr-2" />
                          {category.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-10">
                    <HelpCircle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                    <p className="text-gray-300">
                      Try adjusting your search or filter to find what you're looking for, or contact our support team for help.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <div key={faq.question} className="border border-gray-700 rounded-lg overflow-hidden">
                        <button
                          className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none ${
                            expandedQuestion === index ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)]"
                          }`}
                          onClick={() => toggleQuestion(index)}
                        >
                          <h3 className="text-lg font-medium text-white pr-4">{faq.question}</h3>
                          {expandedQuestion === index ? (
                            <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {expandedQuestion === index && (
                          <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                            <p className="text-gray-300">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <DiscordSection />
      <ServerInfoFooter />
    </main>
  );
}
