import React from 'react';
import ItemCard from '../item-card';

interface ItemPropsType {
    title: string;
    author: string;
    price: string;
    image: string;
    rating: number;
}

const items: ItemPropsType[] = [
    {
        title: 'All The Light We Cannot See',
        author: 'By Anthony Doerr',
        price: '24.99',
        image: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
        rating: 4,
    },
    {
        title: 'Where The Crawdads Sing',
        author: 'By Delia Owens',
        price: '34.99',
        image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/book/m/f/8/the-hidden-hindu-original-imagu7s9hp4zmwky.jpeg?q=90&crop=false',
        rating: 5,
    },
    {
        title: 'Rich People Problems',
        author: 'By Kevin Kwan',
        price: '18.50',
        image: 'https://apps.npr.org/best-books/assets/synced/covers/2023/0593378016.jpg',
        rating: 4,
    },
    {
        title: 'Where The Crawdads Sing',
        author: 'By Delia Owens',
        price: '34.99',
        image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/book/m/f/8/the-hidden-hindu-original-imagu7s9hp4zmwky.jpeg?q=90&crop=false',
        rating: 5,
    },
    {
        title: 'All The Light We Cannot See',
        author: 'By Anthony Doerr',
        price: '24.99',
        image: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
        rating: 4,
    }
];

const ItemGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {items.map((book, index) => (
                <ItemCard
                    key={index}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    image={book.image}
                    rating={book.rating}
                />
            ))}
        </div>
    );
};

export default ItemGrid;
