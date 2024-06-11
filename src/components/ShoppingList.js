import React from 'react';
import Item from './Item';
import Filter from './Filter';

function ShoppingList({ items, selectedCategory, onCategoryChange, addToCart }) {
  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <Filter selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
