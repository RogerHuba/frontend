'use client'

import React, { useState } from 'react'
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

const GamePicturesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)
  const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null)

  const categories: Category[] = picturesData.categories

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null)
      setSelectedCollection(null)
      setSelectedPicture(null)
    } else {
      setSelectedCategory(categoryName)
      setSelectedCollection(null)
      setSelectedPicture(null)
    }
  }

  const handleCollectionClick = (collectionName: string) => {
    if (selectedCollection === collectionName) {
      setSelectedCollection(null)
      setSelectedPicture(null)
    } else {
      setSelectedCollection(collectionName)
      setSelectedPicture(null)
    }
  }

  const handlePictureClick = (picture: Picture) => {
    setSelectedPicture(selectedPicture?.name === picture.name ? null : picture)
  }

  const selectedCategoryData = categories.find(cat => cat.name === selectedCategory)
  const selectedCollectionData = selectedCategoryData?.collections.find(col => col.name === selectedCollection)

  return (
    <PageLayout title="InGame Picture Gallery" subtitle="Discover rare collectible artwork from across the galaxy">
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Picture Categories</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-yellow-900/20 border-yellow-400'
                      : 'bg-gray-900/50 border-gray-700 hover:border-yellow-400/50'
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {category.description}
                  </p>
                  <div className="mt-2 text-xs text-gray-400">
                    {category.collections.length} collection{category.collections.length !== 1 ? 's' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collections */}
          {selectedCategory && selectedCategoryData && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                {selectedCategory} Collections
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {selectedCategoryData.collections.map((collection) => (
                  <div
                    key={collection.name}
                    className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                      selectedCollection === collection.name
                        ? 'bg-blue-900/20 border-blue-400'
                        : 'bg-gray-900/50 border-gray-700 hover:border-blue-400/50'
                    }`}
                    onClick={() => handleCollectionClick(collection.name)}
                  >
                    <h3 className="text-lg font-semibold mb-2 text-blue-300">
                      {collection.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {collection.description}
                    </p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">
                        {collection.totalPieces} pieces
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      Frames: {collection.frameVariations.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pictures */}
          {selectedCollection && selectedCollectionData && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                {selectedCollection} Pictures
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {selectedCollectionData.pictures.map((picture) => (
                  <div
                    key={picture.name}
                    className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                      selectedPicture?.name === picture.name
                        ? 'bg-purple-900/20 border-purple-400'
                        : 'bg-gray-900/50 border-gray-700 hover:border-purple-400/50'
                    }`}
                    onClick={() => handlePictureClick(picture)}
                  >
                    <h3 className="text-lg font-semibold mb-2 text-purple-300">
                      {picture.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {picture.description}
                    </p>
                    <div className="text-xs text-gray-400">
                      {picture.frames.length} frame variation{picture.frames.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Picture Frames */}
          {selectedPicture && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                {selectedPicture.name} - Frame Variations
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedPicture.frames.map((frame, index) => (
                  <div
                    key={`${frame.type}-${index}`}
                    className="bg-gray-900/50 border border-gray-700 rounded-lg p-4"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2 text-green-300">
                        {frame.type}
                      </h3>
                      {/* Picture Preview */}
                      <div className="bg-gray-800 rounded-lg p-4 mb-3 aspect-square flex items-center justify-center border-2 border-dashed border-gray-600">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-2 bg-gray-700 rounded-lg flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-gray-400 text-sm">Picture Preview</p>
                          <p className="text-gray-500 text-xs">{frame.imageUrl}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-gray-300">
                        Required Materials:
                      </h4>
                      <ul className="space-y-1">
                        {frame.materials.map((material, materialIndex) => (
                          <li
                            key={materialIndex}
                            className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
                          >
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Help Text */}
          {!selectedCategory && (
            <div className="text-center mt-12">
              <p className="text-gray-400">
                Select a picture category above to browse collectible artwork and their frame variations.
              </p>
            </div>
          )}

          {selectedCategory && !selectedCollection && (
            <div className="text-center mt-8">
              <p className="text-gray-400">
                Choose a collection to view individual pictures and their frame options.
              </p>
            </div>
          )}

          {selectedCollection && !selectedPicture && (
            <div className="text-center mt-8">
              <p className="text-gray-400">
                Click on a picture to see all available frame variations and required crafting materials.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

export default GamePicturesPage
