// store.ts
import create from 'zustand';
import {devtools} from 'zustand/middleware';

interface Book {
    title: string;
    author: string;
    price: string;
    image: string;
    rating: number;
}

interface BookStore {
  books: Book[];
  loading: boolean;
  error: string | null;
  fetchBooks: () => Promise<void>;
}
const useBookStore = create<BookStore>()(
    devtools((set) => ({
      books: [],
      loading: false,
      error: null,
      fetchBooks: async () => {
        set({ loading: true, error: null });
        try {
        //   const response = await fetch('/api/books');
        //   if (!response.ok) throw new Error('Network response was not ok');
        //   const data = await response.json();
        const data = [
            {
                title: 'All The Light We Cannot See',
                author: 'By Anthony Doerr',
                price: '24.99',
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
                image: 'https://apps.npr.org/best-books/assets/synced/covers/2023/0593378016.jpg',
                rating: 4,
            }
          ];
          set({ books: data, loading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Unknown error',
            loading: false,
          });
        }
      },
    }), { name: "BookStore" })
  );
  
  export default useBookStore;
