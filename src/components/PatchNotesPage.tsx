"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { PatchNotesSearch } from "@/components/PatchNotesSearch";
import { PatchNotesSearchResults } from "@/components/PatchNotesSearchResults";
import { ChevronRight, ChevronDown } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import patchNotesData from '@/data/patchNotes.json';
import { PatchUpdate, PatchCategory, PatchNote, MonthPatchNotes, YearPatchNotes } from '@/data/patchNotes';
import { usePatchNotesSearch } from '@/hooks/usePatchNotesSearch';

export function PatchNotesPage() {
  // Cast the imported JSON data to the proper type
  const patchNotes = patchNotesData as YearPatchNotes[];
  
  // State to track which sections are open
  const [openYears, setOpenYears] = useState<string[]>([]);
  const [openMonths, setOpenMonths] = useState<string[]>([]);
  
  // Search functionality
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    hasResults,
    filterByType,
    totalResults
  } = usePatchNotesSearch(patchNotes);
  
  // State for filtered results
  const [filteredResults, setFilteredResults] = useState(searchResults);
  
  // Update filtered results when search results change
  useEffect(() => {
    setFilteredResults(searchResults);
  }, [searchResults]);

  const handleFilterByType = (type: 'addition' | 'fix' | 'change' | 'balance' | 'content' | null) => {
    if (type) {
      setFilteredResults(filterByType(type));
    } else {
      setFilteredResults(searchResults);
    }
  };

  // Toggle year accordion
  const toggleYear = (yearId: string) => {
    setOpenYears(
      openYears.includes(yearId)
        ? openYears.filter((id) => id !== yearId)
        : [...openYears, yearId]
    );
  };

  // Toggle month accordion
  const toggleMonth = (monthId: string) => {
    setOpenMonths(
      openMonths.includes(monthId)
        ? openMonths.filter((id) => id !== monthId)
        : [...openMonths, monthId]
    );
  };

  // Function to generate formatted patch title
  const formatPatchTitle = (version: string, date: string) => {
    return `Infinity ${version} Patch Notes - ${date}`;
  };

  // Function to render patch update with appropriate styling by type
  const renderPatchUpdate = (update: PatchUpdate, index: number) => {
    let badgeColor = "";
    let badgeText = "";

    switch (update.type) {
      case "addition":
        badgeColor = "bg-green-900 text-green-200";
        badgeText = "NEW";
        break;
      case "fix":
        badgeColor = "bg-blue-900 text-blue-200";
        badgeText = "FIX";
        break;
      case "change":
        badgeColor = "bg-purple-900 text-purple-200";
        badgeText = "CHANGE";
        break;
      case "balance":
        badgeColor = "bg-yellow-900 text-yellow-200";
        badgeText = "BALANCE";
        break;
      case "content":
        badgeColor = "bg-indigo-900 text-indigo-200";
        badgeText = "CONTENT";
        break;
    }

    return (
      <div key={index} className="flex items-start mb-3">
        <span className={`inline-block rounded px-2 py-1 text-xs font-medium mr-3 flex-shrink-0 ${badgeColor}`}>
          {badgeText}
        </span>
        <div className="text-gray-300 min-w-0 flex-1">
          {(update as any).markdown ? (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              className="prose prose-invert prose-sm max-w-none"
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                em: ({ children }) => <em className="italic text-gray-200">{children}</em>,
                code: ({ children }) => <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-green-300">{children}</code>,
                ul: ({ children }) => <ul className="list-disc list-inside space-y-1 ml-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 ml-2">{children}</ol>,
                li: ({ children }) => <li className="text-gray-300">{children}</li>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-3 italic text-gray-400">{children}</blockquote>,
                h1: ({ children }) => <h1 className="text-lg font-semibold text-white mb-2">{children}</h1>,
                h2: ({ children }) => <h2 className="text-base font-semibold text-white mb-1">{children}</h2>,
                h3: ({ children }) => <h3 className="text-sm font-semibold text-white mb-1">{children}</h3>,
                a: ({ href, children }) => <a href={href} className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>
              }}
            >
              {update.description}
            </ReactMarkdown>
          ) : (
            <p>{update.description}</p>
          )}
        </div>
      </div>
    );
  };

  const renderHeading = (heading: any, level: 1 | 2 | 3 = 1) => {
    const headingClasses: Record<1 | 2 | 3, string> = {
      1: "text-xl font-semibold text-[hsl(var(--swg-accent-gold))] border-b border-[#1a1a4a] pb-2 mb-4",
      2: "text-lg font-medium text-blue-300 border-l-4 border-blue-500 pl-3 mb-3",
      3: "text-base font-medium text-green-300 border-l-2 border-green-500 pl-3 mb-2"
    };

    const marginClasses: Record<1 | 2 | 3, string> = {
      1: "",
      2: "ml-4",
      3: "ml-8"
    };

    return (
      <div key={`${heading.title}-${level}`} className={`space-y-3 ${marginClasses[level]}`}>
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className={headingClasses[level]}>
            {heading.title}
          </h4>
          {heading.tags && heading.tags.map((tag: string, tagIndex: number) => (
            <span 
              key={tagIndex} 
              className="inline-block bg-[hsl(var(--swg-accent-gold))]/20 text-[hsl(var(--swg-accent-gold))] px-2 py-1 rounded-full text-xs font-medium border border-[hsl(var(--swg-accent-gold))]/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {heading.description && (
          <div className="bg-[rgba(20,30,60,0.3)] p-4 rounded-lg border-l-4 border-[hsl(var(--swg-accent-gold))] mb-4">
            <p className="text-gray-300 italic leading-relaxed">
              {heading.description}
            </p>
          </div>
        )}
        
        {heading.updates && heading.updates.length > 0 && (
          <div className="space-y-3 mb-4">
            {heading.updates.map(renderPatchUpdate)}
          </div>
        )}
        
        {heading.subHeadings && heading.subHeadings.length > 0 && (
          <div className="space-y-4">
            {heading.subHeadings.map((subHeading: any) => {
              const nextLevel = (level < 3 ? level + 1 : 3) as 1 | 2 | 3;
              return renderHeading(subHeading, nextLevel);
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        {/* Hero Section with Random Background - No CTA Button */}
        <RandomHeroSection 
          title="Latest Patch Notes" 
          subtitle="Updates and improvements to SWG Infinity" 
          className="py-20" 
        />

        {/* Page Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-6">Patch Notes</h2>

              <p className="text-gray-300 mb-8">
                This page contains the latest updates and changes to SWG Infinity. Patch notes are organized
                by date with the most recent updates at the top. Click on a year or month to expand and view
                the details.
              </p>

              {/* Search Component */}
              <PatchNotesSearch
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                totalResults={totalResults}
                hasResults={hasResults}
                onFilterByType={handleFilterByType}
              />

              {/* Conditionally show search results or regular patch notes */}
              {searchTerm ? (
                <PatchNotesSearchResults
                  results={filteredResults}
                  searchTerm={searchTerm}
                  onFormatPatchTitle={formatPatchTitle}
                  onRenderPatchUpdate={renderPatchUpdate}
                />
              ) : (
                <>
                  {/* Latest Patch Note Featured */}
                  {patchNotes[0]?.months[0]?.patches[0] && (
                    <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mb-10">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                        <div>
                          <h3 className="text-white font-bold text-xl">
                            {formatPatchTitle(patchNotes[0].months[0].patches[0].version, patchNotes[0].months[0].patches[0].date)}
                          </h3>
                          <div className="flex items-center mt-1">
                            <span className="text-[hsl(var(--swg-accent-gold))] text-sm">
                              Original Title: {patchNotes[0].months[0].patches[0].title}
                            </span>
                          </div>
                        </div>
                        <span className="mt-2 md:mt-0 px-3 py-1 bg-[rgba(30,50,100,0.5)] rounded text-sm text-white">
                          Latest Update
                        </span>
                      </div>

                      <div className="mt-4 space-y-6">
                        {patchNotes[0].months[0].patches[0].categories?.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="space-y-3">
                            <h4 className="text-[hsl(var(--swg-accent-gold))] font-semibold text-lg border-b border-[#1a1a4a] pb-2">
                              {category.area}
                            </h4>
                            {category.description && (
                              <div className="bg-[rgba(20,30,60,0.3)] p-4 rounded-lg border-l-4 border-[hsl(var(--swg-accent-gold))] mb-4">
                                <p className="text-gray-300 italic leading-relaxed">
                                  {category.description}
                                </p>
                              </div>
                            )}
                            
                            {/* Render new hierarchical headings */}
                            {(category as any).headings && (category as any).headings.length > 0 && (
                              <div className="space-y-6">
                                {(category as any).headings.map((heading: any, headingIndex: number) => (
                                  <div key={headingIndex}>
                                    {renderHeading(heading, 1)}
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Render legacy flat updates */}
                            {category.updates && category.updates.length > 0 && (
                              <div className="space-y-3">
                                {category.updates.map(renderPatchUpdate)}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Collapsible Patch Notes by Year and Month */}
                  <div className="space-y-6">
                    {patchNotes.map((yearData) => (
                      <div key={yearData.year} className="border border-[#1a1a4a] rounded-md overflow-hidden">
                        {/* Year Header */}
                        <button
                          className="w-full flex items-center justify-between p-4 bg-[rgba(13,20,40,0.9)] text-left"
                          onClick={() => toggleYear(yearData.year)}
                        >
                          <h3 className="text-xl font-bold text-white">{yearData.year}</h3>
                          {openYears.includes(yearData.year) ? (
                            <ChevronDown className="h-5 w-5 text-[hsl(var(--swg-accent-gold))]" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-[hsl(var(--swg-accent-gold))]" />
                          )}
                        </button>

                        {/* Year Content */}
                        {openYears.includes(yearData.year) && (
                          <div className="space-y-2 p-2 bg-[rgba(13,20,40,0.6)]">
                            {yearData.months.map((monthData) => (
                              <div key={`${yearData.year}-${monthData.month}`} className="border border-[#1a1a4a] rounded-md overflow-hidden">
                                {/* Month Header */}
                                <button
                                  className="w-full flex items-center justify-between p-3 bg-[rgba(13,20,40,0.8)] text-left"
                                  onClick={() => toggleMonth(`${yearData.year}-${monthData.month}`)}
                                >
                                  <h4 className="text-lg font-semibold text-white">{monthData.month}</h4>
                                  {openMonths.includes(`${yearData.year}-${monthData.month}`) ? (
                                    <ChevronDown className="h-4 w-4 text-[hsl(var(--swg-accent-gold))]" />
                                  ) : (
                                    <ChevronRight className="h-4 w-4 text-[hsl(var(--swg-accent-gold))]" />
                                  )}
                                </button>

                                {/* Month Content */}
                                {openMonths.includes(`${yearData.year}-${monthData.month}`) && (
                                  <div className="space-y-6 p-4 bg-[rgba(13,20,40,0.4)]">
                                    {monthData.patches.map((patch) => (
                                      <div key={patch.id} className="border-b border-[#1a1a4a] pb-6 last:border-0 last:pb-0">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                          <div>
                                            <h5 className="text-white font-bold text-lg">
                                              {formatPatchTitle(patch.version, patch.date)}
                                            </h5>
                                            <div className="flex items-center mt-1">
                                              <span className="text-[hsl(var(--swg-accent-gold))] text-sm">
                                                Original Title: {patch.title}
                                              </span>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mt-4 space-y-6">
                                          {patch.categories?.map((category, categoryIndex) => (
                                            <div key={categoryIndex} className="space-y-3">
                                              <h5 className="text-[hsl(var(--swg-accent-gold))] font-semibold text-base border-b border-[#1a1a4a] pb-2">
                                                {category.area}
                                              </h5>
                                              {category.description && (
                                                <div className="bg-[rgba(20,30,60,0.3)] p-4 rounded-lg border-l-4 border-[hsl(var(--swg-accent-gold))] mb-4">
                                                  <p className="text-gray-300 italic leading-relaxed">
                                                    {category.description}
                                                  </p>
                                                </div>
                                              )}
                                              
                                              {/* Render new hierarchical headings */}
                                              {(category as any).headings && (category as any).headings.length > 0 && (
                                                <div className="space-y-6">
                                                  {(category as any).headings.map((heading: any, headingIndex: number) => (
                                                    <div key={headingIndex}>
                                                      {renderHeading(heading, 1)}
                                                    </div>
                                                  ))}
                                                </div>
                                              )}
                                              
                                              {/* Render legacy flat updates */}
                                              {category.updates && category.updates.length > 0 && (
                                                <div className="space-y-3">
                                                  {category.updates.map(renderPatchUpdate)}
                                                </div>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
                <h3 className="text-white font-semibold text-lg mb-4">Feedback Welcome</h3>
                <p className="text-gray-300">
                  We value your feedback on these changes. If you encounter any issues or have suggestions for future
                  updates, please share them with us on our Discord server.
                </p>
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
