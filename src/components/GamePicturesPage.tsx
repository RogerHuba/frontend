'use client'

import React, { useState, useMemo } from 'react'
import { Search, Star, Image, Frame, Trophy, Palette, Camera } from 'lucide-react'
import { PageLayout } from '@/components/PageLayout'
import picturesData from '@/data/pictures.json'

interface Frame {
  type: string
  imageUrl: string
  materials: string[]
}

interface Picture {
  name: string
  description: string
  frames: Frame[]
}

interface Collection {
  name: string
  totalPieces: number
  description: string
  frameVariations: string[]
  rarity: string
  pictures: Picture[]
}

interface Category {
  name: string
  description: string
  collections: Collection[]
}

const rarityColors = {
  'Common': 'text-gray-600 bg-gray-100',
  'Rare': 'text-blue-600 bg-blue-100', 
  'Legendary': 'text-purple-600 bg-purple-100'
}

const rarityStars = {
  'Common': 1,
  'Rare': 3,
  'Legendary': 5
}

const categoryIcons = {
  'Battle Series': Trophy,
  'Perspective Series': Palette,
  'Event Commemoratives': Star,
  'Community Captures': Camera
}

export default function GamePicturesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRarity, setSelectedRarity] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedCollections, setExpandedCollections] = useState<Set<string>>(new Set())
  const [expandedPictures, setExpandedPictures] = useState<Set<string>>(new Set())

  const categories: Category[] = picturesData.categories

  const filteredCategories = useMemo(() => {
    return categories.map(category => ({
      ...category,
      collections: category.collections.filter(collection => {
        const matchesSearch = collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            collection.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            collection.pictures.some(picture => 
                              picture.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              picture.description.toLowerCase().includes(searchTerm.toLowerCase())
                            )
        
        const matchesRarity = selectedRarity === 'all' || collection.rarity === selectedRarity
        const matchesCategory = selectedCategory === 'all' || category.name === selectedCategory
        
        return matchesSearch && matchesRarity && matchesCategory
      })
    })).filter(category => category.collections.length > 0)
  }, [categories, searchTerm, selectedRarity, selectedCategory])

  const toggleCollection = (collectionName: string) => {
    const newExpanded = new Set(expandedCollections)
    if (newExpanded.has(collectionName)) {
      newExpanded.delete(collectionName)
    } else {
      newExpanded.add(collectionName)
    }
    setExpandedCollections(newExpanded)
  }

  const togglePicture = (pictureName: string) => {
    const newExpanded = new Set(expandedPictures)
    if (newExpanded.has(pictureName)) {
      newExpanded.delete(pictureName)
    } else {
      newExpanded.add(pictureName)
    }
    setExpandedPictures(newExpanded)
  }

  const totalCollections = categories.reduce((acc, cat) => acc + cat.collections.length, 0)
  const totalPictures = categories.reduce((acc, cat) => 
    acc + cat.collections.reduce((colAcc, col) => colAcc + col.totalPieces, 0), 0)
  const totalFrameVariations = categories.reduce((acc, cat) => 
    acc + cat.collections.reduce((colAcc, col) => colAcc + col.frameVariations.length, 0), 0)

  const renderStars = (rarity: string) => {
    const count = rarityStars[rarity as keyof typeof rarityStars] || 1
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < count ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    )
  }

  return (
    <PageLayout title="Game Pictures" subtitle="Discover and collect in-game artwork including epic battle series, commemorative event pictures, and community screenshots">
      {/* Under Construction Notice */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/50 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h3 className="text-xl font-bold text-yellow-400">Under Construction</h3>
            </div>
            <p className="text-gray-300 mb-2">
              The Game Pictures gallery is currently being developed. The data shown below is for demonstration purposes only.
            </p>
            <p className="text-gray-400 text-sm">
              We're working on creating a comprehensive collection of in-game artwork, battle series, and community screenshots. Check back soon!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-full">{/* Override the max-width constraint for this page */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Collections</p>
                <p className="text-2xl font-bold text-blue-400">{totalCollections}</p>
              </div>
              <Frame className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Pictures</p>
                <p className="text-2xl font-bold text-green-400">{totalPictures}</p>
              </div>
              <Image className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Frame Variations</p>
                <p className="text-2xl font-bold text-purple-400">{totalFrameVariations}</p>
              </div>
              <Palette className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Categories</p>
                <p className="text-2xl font-bold text-yellow-400">{categories.length}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search pictures and collections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Rarities</option>
              <option value="Common">Common</option>
              <option value="Rare">Rare</option>
              <option value="Legendary">Legendary</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories and Collections */}
        <div className="space-y-8">
          {filteredCategories.map(category => {
            const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Image
            
            return (
              <div key={category.name} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-700">
                  <div className="flex items-center space-x-3 mb-2">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </div>
                  <p className="text-gray-300">{category.description}</p>
                </div>

                <div className="p-6 space-y-4">
                  {category.collections.map(collection => (
                    <div key={collection.name} className="border border-gray-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleCollection(collection.name)}
                        className="w-full p-4 bg-gray-800 hover:bg-gray-750 transition-colors text-left flex items-center justify-between"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold">{collection.name}</h3>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${rarityColors[collection.rarity as keyof typeof rarityColors]}`}>
                              {collection.rarity}
                            </span>
                            {renderStars(collection.rarity)}
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{collection.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{collection.totalPieces} pieces</span>
                            <span>Frames: {collection.frameVariations.join(', ')}</span>
                          </div>
                        </div>
                        <div className={`transform transition-transform ${expandedCollections.has(collection.name) ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {expandedCollections.has(collection.name) && (
                        <div className="border-t border-gray-700 bg-gray-850">
                          <div className="p-4 space-y-3">
                            {collection.pictures.map(picture => (
                              <div key={picture.name} className="border border-gray-600 rounded-lg overflow-hidden">
                                <button
                                  onClick={() => togglePicture(picture.name)}
                                  className="w-full p-3 bg-gray-800 hover:bg-gray-750 transition-colors text-left flex items-center justify-between"
                                >
                                  <div>
                                    <h4 className="font-medium text-blue-300">{picture.name}</h4>
                                    <p className="text-sm text-gray-400 mt-1">{picture.description}</p>
                                    <span className="text-xs text-gray-500 mt-1 block">{picture.frames.length} frame variant{picture.frames.length !== 1 ? 's' : ''}</span>
                                  </div>
                                  <div className={`transform transition-transform ${expandedPictures.has(picture.name) ? 'rotate-180' : ''}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </div>
                                </button>

                                {expandedPictures.has(picture.name) && (
                                  <div className="border-t border-gray-600 bg-gray-800 p-4">
                                    <h5 className="text-sm font-medium text-yellow-300 mb-3">Available Frame Variations:</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                      {picture.frames.map((frame, frameIndex) => (
                                        <div key={frameIndex} className="bg-gray-700 rounded-lg p-3 border border-gray-600">
                                          <div className="flex items-center space-x-2 mb-2">
                                            <Frame className="w-4 h-4 text-yellow-400" />
                                            <span className="font-medium text-yellow-300">{frame.type}</span>
                                          </div>
                                          <div className="text-xs text-gray-300">
                                            <p className="mb-1">Materials Required:</p>
                                            <ul className="space-y-1">
                                              {frame.materials.map((material, matIndex) => (
                                                <li key={matIndex} className="text-gray-400">• {material}</li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Image className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No pictures found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
