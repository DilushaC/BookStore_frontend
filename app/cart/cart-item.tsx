import React from 'react';
import { Button } from '@mantine/core';
import { Trash } from 'tabler-icons-react';

interface CartItemProps {
  image: string;
  title: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ image, title, price, quantity, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center space-x-4">
        <img src={image} alt={title} className="w-16 h-24 rounded-lg shadow-md" />
        <div>
          <p className="font-semibold">{title}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="font-semibold">${price.toFixed(2)}</p>
        <div className="flex items-center">
          <Button variant="subtle" size="xs" onClick={onDecrease}>-</Button>
          <p className="mx-2">{quantity}</p>
          <Button variant="subtle" size="xs" onClick={onIncrease}>+</Button>
        </div>
        <p className="font-semibold">${(price * quantity).toFixed(2)}</p>
        <Button variant="subtle" color="red" onClick={onRemove}>
          <Trash size={18} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
