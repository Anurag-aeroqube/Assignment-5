import React from 'react'
import Bookcard from '@/ui/Bookscard'

const Book = () => {
  return (
    <div className='py-10'>

        <section className='w-full mx-auto '>
            <header className='w-[80%]   mx-auto'>
                <div className=' text-center   mx-auto'> 
                <h1 className='text-4xl font-bold font-Inter '>Harry Potter Books</h1>
                <p className='mt-5 text-lg font-Inter text-muted-foreground'>Explore the complete Harry Potter book series by J.K. Rowling.</p>
                </div>             
            </header>
        </section>

        <section className='mt-12 w-full mx-auto '>
            <div className='w-[92%] mx-auto'>
                <Bookcard/>

            </div>
        </section>
    </div>
  )
}

export default Book