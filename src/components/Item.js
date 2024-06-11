import React from 'react';

function Item({ item, addToCart }) {
  return (
    <li className={item.inCart ? 'in-cart' : ''}>
      {item.name}
      <button onClick={() => addToCart(item.id)}>
        {item.inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
