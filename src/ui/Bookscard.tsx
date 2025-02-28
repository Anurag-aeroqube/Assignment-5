import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import placeholder from '../assets/Books/placeholder.svg'
import { Badge } from "@/components/ui/badge"



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

type Bookdata = {
    book: Book;
};




const Bookscard: React.FC<Bookdata> = ({book}) => {

    const limitDescription=(description:string,limit:number)=>{
        return description.split(" ").splice(0,limit).join(" ");
    }

    

    // checkingg data is present or not
    if (!book) {
        return <p className="text-white text-2xl">No books available</p>;
    }

    return (
        <div className=' '>

            <section key={book.index} className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>
                <Card className="lg:h-[425px]">
                    <CardHeader>
                        <CardTitle className='text-2xl font-semibold font-Inter leading-none tracking-tight mt-2'>
                            {book.title}
                        </CardTitle>
                        <CardDescription>
                            <Badge variant="outline" className='rounded-full'>
                                {book.releaseDate}
                            </Badge>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <figure className='flex md:flex-row   flex-col  lg:gap-5 gap-4'>
                            <div className="xl:w-[60%] w-[95%] mx-auto flex justify-center sm:justify-start items-center">
                                <img src={book.cover} className='w-34 h-48  object-cover rounded-md' alt="Book Cover" />
                            </div>
                            <p className='w-[80%] md:w-[90%] xl:w-full lg:w-[90%] my-auto font-Inter text-sm text-muted-foreground'>
                                {limitDescription(book.description,20)}
                            </p>
                        </figure>
                    </CardContent>
                    <CardFooter className='mt-2'>
                        <p className='font-Inter text-muted-foreground text-xs text-left'>
                            Book {book.number} in the series
                        </p>
                    </CardFooter>
                </Card>
            </section>
           
        </div>
    );
};




export default Bookscard 