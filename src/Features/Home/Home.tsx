import React, { useState } from 'react'
import Navbar from '@/components/Header/Navbar'
import {Button} from '@/components/ui/button'
import {   Book,BookOpen,User } from "lucide-react"; 
import Homecard from './ui/Homecard'
import { NavLink } from "react-router-dom";

const Home = () => {
  
   const [activeButton, setActiveButton] = useState<string | null>(null);
  
      // Function to change the button variant
      const changeClick = (buttonName: string) => {
          setActiveButton(buttonName);
      };
  return (
    <div className=''>
      <div className='sticky top-0'>
     
      </div>
     

      <section className='  w-[92%]  py-10 mx-auto'>
        <header className="flex flex-col items-center text-center mb-12">
          <div className='relative mb-4'>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur" ></div>
            <div className="relative bg-background rounded-full p-6">
              <span className='text-4xl'>⚡</span>
            </div>  
          </div>

          <h1 className='font-extrabold md:text-5xl text-4xl w-[85%] md:w-full mb-4 tracking-tight'>Potter API Explorer</h1>

          <div className='lg:w-[55%] w-[85%] text-lg text-muted-foreground mx-auto mb-6'>
          <p>Discover the magical world of Harry Potter through our interactive API explorer. Browse books, characters, spells, and houses from the wizarding world.</p>
          </div>

          <div className='flex md:flex-row flex-col space-y-5 justify-center gap-x-6'>


           <NavLink to='/books' >
           <Button variant='default' size='lg' className='cursor-pointer'><BookOpen onClick={() => changeClick('Home')}/>Explore Books  </Button>
           </NavLink> 

           <NavLink to='/characters'>
    <Button variant='outline' size='lg' className="cursor-pointer">
        <User /> Meet Characters
    </Button>
</NavLink>

          
          
                            
          </div>
         
        </header>


        <div className='lg:w-full md:w-full sm:w-[85%] mx-auto'>
        
          <Homecard></Homecard>
        </div>
      </section>

    </div>

  )
}

export default Home