import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
        {/* add a link to each of these */}
        <CategoryCard id="potions" categoryData={categories[0]} />
        <CategoryCard id="charms" categoryData={categories[1]} />

      {categories.slice(2).map((category,index) => (
          <CategoryCard key={index} categoryData={category} />
        ))}
    </div>
  );
}

export default CategoryList;
