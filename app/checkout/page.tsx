"use client";
import React from 'react';
import CheckoutForm from './checkout-form';
import MainLayout from '../components/main-layout';


const Checkout: React.FC = () => {
    return (
        <MainLayout>
            <div>
                <CheckoutForm/>
            </div>
        </MainLayout>

    );
};

export default Checkout;
