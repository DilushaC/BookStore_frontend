import React, { useState } from 'react';
import { Checkbox, Slider } from '@mantine/core';

const categories = [
  'Fiction',
  'Non-Fiction',
  'Children\'s Books',
  'Educational & Textbooks',
  'Graphic Novels & Comics',
  'Religion & Spirituality',
  'Arts & Photography',
  'Special Collections'
];

const ratings = [5, 4, 3, 2];

const Filter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>(['Graphic Novels & Comics']);
  const [selectedRating, setSelectedRating] = useState<number[]>([5, 4]);
  const [priceRange, setPriceRange] = useState<number>(1500);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prev) =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating((prev) =>
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  return (
    <div className="p-4 w-64 bg-white shadow-lg rounded-lg">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Books Category</h2>
        {categories.map((category) => (
          <div key={category} className="mb-2">
            <Checkbox
              label={category}
              checked={selectedCategory.includes(category)}
              onChange={() => handleCategoryChange(category)}
              styles={{ input: { cursor: 'pointer' }, label: { cursor: 'pointer' } }}
            />
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Books Rating</h2>
        {ratings.map((rating) => (
          <div key={rating} className="flex items-center mb-2">
            <Checkbox
              checked={selectedRating.includes(rating)}
              onChange={() => handleRatingChange(rating)}
              styles={{ input: { cursor: 'pointer' }, label: { cursor: 'pointer' } }}
            />
            <div className="ml-2 text-yellow-500">
              {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Price Range</h2>
        <Slider
          value={priceRange}
          onChange={setPriceRange}
          min={0}
          max={1500}
          step={10}
          marks={[
            { value: 0, label: '$0.00' },
            { value: 1500, label: '$1500.00' }
          ]}
          styles={{
            root: { width: '100%' },
            track: { backgroundColor: 'gray' },
            markLabel: { color: 'gray', fontSize: '0.875rem' },
            thumb: { backgroundColor: 'green' },
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
