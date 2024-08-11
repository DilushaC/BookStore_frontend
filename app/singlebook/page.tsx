"use client";
import React from 'react';
import BookImage from './book-image';
import BookDetails from './book-details';
import ActionButtons from './action-buttons';
import BookTabs from './book-tabs';
import MainLayout from '../components/main-layout';
import RelatedProducts from './related-products';

const SelectedBook: React.FC = () => {
    return (
        <MainLayout>
            <div className="flex items-center justify-center mt-5 mb-5 w-full h-full">
                <div className="bg-white grid grid-cols-1 shadow-lg rounded-lg p-6 space-x-6 w-10/12 h-full">
                    <div className='flex'>
                        <div className="w-1/3 bg-gray-100">
                            <BookImage src="https://rukminim2.flixcart.com/image/400/400/xif0q/book/m/f/8/the-hidden-hindu-original-imagu7s9hp4zmwky.jpeg?q=90&crop=false" alt="All the light we cannot see" />
                        </div>
                        <div className="w-2/3 px-5">
                            <BookDetails
                                title="All the light we cannot see"
                                author="Anthony Doerr"
                                publishedDate="1 July 2016"
                                price="24.99"
                                rating={4}
                                categories={['Religion', 'Spirituality', 'Novels']}
                            />
                            <ActionButtons />
                        </div>
                    </div>
                    <div>
                        <BookTabs />
                    </div>
                </div>
            </div>
            <div className='mt-5 flex items-center justify-center w-12/12'>
                <div className='mt-5 px-8 w-10/12'>
                    <h1 className='ml-2 mb-4'>Related Products</h1>
                    <RelatedProducts />
                </div>
            </div>
        </MainLayout>

    );
};

export default SelectedBook;
