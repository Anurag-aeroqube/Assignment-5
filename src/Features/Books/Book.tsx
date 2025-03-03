import  { useEffect } from "react";
import Bookcard from "@/ui/Bookscard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "@/redux/slices/booksSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { useLoading } from "@/Context/LoadingProvider";

const Book = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books, error } = useSelector((state: RootState) => state.books);
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    dispatch(fetchBooks()).finally(stopLoading);
  }, [dispatch]);

 
 
  if (error) return <p className="text-center text-red-500 text-xl">Error: {error}</p>;

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
            <Bookcard key={book.number} book={book} /> // bookcard me bookes:bookes[] nii likhna hai
          ))}
        </div>
      </section>
    </div>
  );
};


export default Book;
