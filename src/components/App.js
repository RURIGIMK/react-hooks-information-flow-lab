import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [items, setItems] = useState([
    { id: 1, name: 'Apples', category: 'fruits', inCart: false },
    { id: 2, name: 'Milk', category: 'dairy', inCart: false },
    { id: 3, name: 'Bread', category: 'bakery', inCart: false },
    // Add more items as needed
  ]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (itemId) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, inCart: !item.inCart } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList 
        items={items} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
        addToCart={addToCart} 
      />
    </div>
  );
}

export default App;
