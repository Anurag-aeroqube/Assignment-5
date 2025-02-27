import React, { useState } from 'react';
import {
    NavigationMenu,
 
    NavigationMenuItem,
  
    NavigationMenuList,
   
} from "@/components/ui/navigation-menu";

import {  Home, BookOpen, User, Castle,WandSparkles } from "lucide-react"; 
import { Button } from '../ui/button';

const Navbar = () => {
    // State to track which button was clicked
    const [activeButton, setActiveButton] = useState<string | null>(null);

    // Function to change the button variant
    const changeClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='flex sticky top-0 z-14 justify-center shadow-2xl border-b h-16 slg:pace-x-4 bg-background/90 space-x-2 mx-auto '>
            <NavigationMenu className=' '>
                <NavigationMenuList className='gap-x-5'>

                <NavigationMenuItem>   
                       <span className='text-xl sm:inline-block font-bold'>⚡ Potter API Explorer</span>
                    </NavigationMenuItem>

                    <NavigationMenuItem>   
                        <Button 
                        className='text-sm'
                            variant={activeButton === 'Home' ? 'default' : 'ghost'} 
                            onClick={() => changeClick('Home')}
                        >
                           <Home/> Home
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem>   
                        <Button 
                            
                            variant={activeButton === 'Books' ? 'default' : 'ghost'} 
                            onClick={() => changeClick('Books')}
                        >
                            <BookOpen/>Books
                        </Button>
                    </NavigationMenuItem>


                    <NavigationMenuItem>   
                        <Button 
                            variant={activeButton === 'Characters' ? 'default' : 'ghost'} 
                            onClick={() => changeClick('Characters')}
                        >
                            <User/>Characters
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem>   
                        <Button 
                            variant={activeButton === 'Spells' ? 'default' : 'ghost'} 
                            onClick={() => changeClick('Spells')}
                        >
                            <WandSparkles/>Spells
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem>   
                        <Button 
                            variant={activeButton === 'Houses' ? 'default' : 'ghost'} 
                            onClick={() => changeClick('Houses')}
                        >
                           <Castle/> Houses
                        </Button>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;
