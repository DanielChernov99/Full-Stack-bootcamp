import React from 'react';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
        {/* add a link to each of these */}
        <Link to="wiki/potions">
          <CategoryCard id="potions" categoryData={categories[0]} />
        </Link>
        <Link to="wiki/charms">
          <CategoryCard id="charms" categoryData={categories[1]} />
        </Link>

      {categories.slice(2).map((category,index) => (
          <CategoryCard key={index} categoryData={category} />
        ))}
    </div>
  );
}

export default CategoryList;
