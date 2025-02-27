import React, { useState } from 'react';
import {
    NavigationMenu,

    NavigationMenuItem,

    NavigationMenuList,

} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";

import { Home, BookOpen, User, Castle, WandSparkles } from "lucide-react";
import { Button } from '../ui/button';

const Navbar = () => {
    // State to track which button was clicked
    const [activeButton, setActiveButton] = useState<string | null>(null);

    // Function to change the button variant
    const changeClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='flex sticky top-0 z-14 justify-center shadow-2xl border-b h-16 lg:space-x-4 bg-background/90 space-x-2 mx-auto '>
            <NavigationMenu className=' '>
                <NavigationMenuList className='gap-x-5'>

                    <NavigationMenuItem>
                        <NavLink to='/'>
                        <span className='text-xl  font-bold'>⚡ Potter API Explorer</span>

                        </NavLink>
                       
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavLink to='/'>
                            <Button
                                className='text-sm'
                                variant={activeButton === 'Home' ? 'default' : 'ghost'}
                                onClick={() => changeClick('Home')}
                            >
                                <Home /> Home
                            </Button>
                        </NavLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavLink to='/books'>
                            <Button
                                className='text-sm'
                                variant={activeButton === 'Books' ? 'default' : 'ghost'}
                                onClick={() => changeClick('Books')}
                            >
                                <BookOpen/> Books
                            </Button>
                        </NavLink>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <NavLink to='/characters'>
                            <Button
                                variant={activeButton === 'Characters' ? 'default' : 'ghost'}
                                onClick={() => changeClick('Characters')}
                            >
                                <User />Characters
                            </Button>
                        </NavLink>



                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavLink to="/spells">
                            <Button
                                variant={activeButton === 'Spells' ? 'default' : 'ghost'}
                                onClick={() => changeClick('Spells')}
                            >
                                <WandSparkles />Spells
                            </Button>

                        </NavLink>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <Button
                            variant={activeButton === 'Houses' ? 'default' : 'ghost'}
                            onClick={() => changeClick('Houses')}
                        >
                            <Castle /> Houses
                        </Button>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;
