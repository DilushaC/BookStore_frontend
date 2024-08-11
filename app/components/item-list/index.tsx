import React, { useEffect } from 'react';
import ItemCard from '../item-card';
import useBookStore from "../../store/books.store";

const ItemGrid: React.FC = () => {

    const { books, loading, error, fetchBooks } = useBookStore();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    // if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {books.map((book, index) => (
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
