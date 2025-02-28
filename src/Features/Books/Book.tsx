import React, { useEffect, useState } from 'react';
import Bookcard from '@/ui/Bookscard';

type Book = {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
};

const Book = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        console.error('API Error:', err);
        setError('Failed to load books.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p className="text-center  text-gray-500">Loading books...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="py-10">
      <section className="w-full mx-auto">
        <header className="w-[80%] mx-auto text-center">
          <h1 className="text-4xl font-bold font-Inter">Harry Potter Books</h1>
          <p className="mt-5 text-lg font-Inter text-muted-foreground">
            Explore the complete Harry Potter book series by J.K. Rowling.
          </p>
        </header>
      </section>

      <section className="mt-12 w-full mx-auto">
        <div className="w-[92%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Bookcard key={book.number} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Book;
