import React from 'react';
import { Badge } from '@mantine/core';

interface BookDetailsProps {
    title: string;
    author: string;
    publishedDate: string;
    price: string;
    rating: number;
    categories: string[];
}

const BookDetails: React.FC<BookDetailsProps> = ({ title, author, publishedDate, price, rating, categories }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700 mb-1">By {author}</p>
            <p className="text-gray-500 mb-4">Published ; {publishedDate}</p>

            <p className="text-green-600 text-2xl font-semibold mb-4">${price}</p>

            <div className="flex items-center mb-4">
                <div className="text-yellow-500 text-xl">
                    {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
                </div>
            </div>

            <div className="mb-4">
                <p className="text-gray-700 mb-2">Category :</p>
                <div className="flex space-x-2">
                    {categories.map((category) => (
                        <Badge key={category} color="green" variant="light">
                            {category}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
