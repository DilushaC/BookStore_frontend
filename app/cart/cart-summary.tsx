import React from 'react';
import { Button } from '@mantine/core';

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="border-b pb-4 mb-4">
        <p className="text-gray-500">Subtotals:</p>
        <p className="text-xl font-semibold">${subtotal.toFixed(2)}</p>
      </div>
      <div className="pb-4 mb-4">
        <p className="text-gray-500">Totals:</p>
        <p className="text-2xl font-bold text-green-600">${subtotal.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Shipping & taxes calculated at checkout</p>
      </div>
      <Button fullWidth size="md" color="green">
        Proceed to checkout
      </Button>
    </div>
  );
};

export default CartSummary;
