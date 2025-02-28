import React, { useEffect, useState } from "react";
import Bookscard from "../ui/Bookscard";

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

const Books: React.FC = () => {

        const [books, setBooks] = useState<Book[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [error] = useState<string | null>(null);
      
        useEffect(() => {
          const fetchBooks = async () => {
            try {
              setLoading(true);
              const response = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
              if (!response.ok) {
                throw new Error("Failed to fetch books");
              }
              const data = await response.json();
      
              setBooks(data); 
            } catch (err) {
              console.error(" API Error:", err);
            //   setError(err);
            } finally {
              setLoading(false);
            }
          };
      
          fetchBooks();
        }, []);
        console.log(books);
  

  if (loading) return <p className="text-center text-gray-500"> Loading books...</p>;
  if (error) return <p className="text-center text-red-500"> Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6"> Harry Potter Books</h1>
        {
            books &&
            <Bookscard books={books} />
        }
      
    </div>
  );
};

export default Books;
