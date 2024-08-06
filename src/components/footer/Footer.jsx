// src/ProductCategories.js
import React from 'react';
import dairyProducts from '../../assets/img/dairy-products.png';
// import vegetablesFruits from './assets/img/vegetables-fruits.png';
// import spicesSeasonings from './assets/img/spices-seasonings.png';
// import honey from './assets/img/honey.png';
// import flour from './assets/img/flour.png';

const categories = [
  { image: dairyProducts, title: 'Dairy Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { image: dairyProducts, title: 'Vegetables & Fruits', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { image: dairyProducts, title: 'Spices & Seasonings', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { image: dairyProducts, title: 'Honey', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { image: dairyProducts, title: 'Flour', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const ProductCategories = () => {
  return (
    <div className=" rounded-md p-4 flex justify-around m-10">
      {categories.map((category, index) => (
        <div key={index} className="text-center mx-4">
          <img src={category.image} alt={category.title} className="w-24 h-24 mx-auto mb-4" />
          <h3 className="font-semibold">{category.title}</h3>
          <p className="text-gray-500">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
