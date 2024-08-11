import React from 'react';

interface BookImageProps {
    src: string;
    alt: string;
}

const BookImage: React.FC<BookImageProps> = ({ src, alt }) => {
    return (
        <div className="w-full h-full p-8 rounded-lg flex justify-center items-center">
            <img src={src} alt={alt} className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
    );
};

export default BookImage;
