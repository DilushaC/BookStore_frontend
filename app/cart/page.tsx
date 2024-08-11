"use client";
import React, { useState } from 'react';
import CartItem from './cart-item';
import CartSummary from './cart-summary';
import { Button } from '@mantine/core';
import MainLayout from "../components/main-layout";

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: 'All The Light We Cannot See', price: 24.99, quantity: 1, image: 'https://apps.npr.org/best-books/assets/synced/covers/2023/0593378016.jpg' },
        { id: 2, title: 'Where The Crawdads Sing', price: 34.99, quantity: 1, image: 'https://apps.npr.org/best-books/assets/synced/covers/2023/0593378016.jpg' }
    ]);

    const increaseQuantity = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <MainLayout>
            <div className="mt-5 mb-5 flex justify-center p-6 w-12/12">
                <div className="w-10/12 grid grid-cols-3 gap-6">
                    <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                                onIncrease={() => increaseQuantity(item.id)}
                                onDecrease={() => decreaseQuantity(item.id)}
                                onRemove={() => removeItem(item.id)}
                            />
                        ))}
                        <div className="mt-4">
                            <div className="flex items-center space-x-4">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="border px-4 py-2 rounded-lg flex-grow"
                                />
                                <Button color="green" size="md">
                                    Apply
                                </Button>
                            </div>
                        </div>
                    </div>
                    <CartSummary subtotal={subtotal} />
                </div>
            </div>
        </MainLayout>
    );
};

export default Cart;
