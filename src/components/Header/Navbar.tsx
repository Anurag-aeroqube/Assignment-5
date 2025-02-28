
import {
    NavigationMenu,

    NavigationMenuItem,

    NavigationMenuList,

} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";
import ThemeToggle from "../Themetoggle";

import { Home, BookOpen, User, Castle, WandSparkles } from "lucide-react";
// import { Button } from '../ui/button';

const Navbar = () => {
    // State to track which button was clicked
    // const [activeButton, setActiveButton] = useState<string | null>(null);

    // // Function to change the button variant
    // const changeClick = (buttonName: string) => {
    //     setActiveButton(buttonName);
    // };

    return (
        <div className='flex sticky top-0 z-14 md:justify-center shadow-2xl border-b h-16 lg:space-x-5 bg-background/90 space-x-2 mx-auto '>
            <NavigationMenu className=' '>
                <NavigationMenuList className='  gap-x-5'>
                    <NavLink
                        to="/home"


                    >
                        <NavigationMenuItem className='text-xl font-bold md:text-center pl-4 mx-auto text-left' > ⚡ Potter API Explorer
                        </NavigationMenuItem>
                    </NavLink>




                    <div className='hidden md:flex gap-x-2'>
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><Home size={14} className="inline" /> Home</NavigationMenuItem>
                        </NavLink>

                        <NavLink
                            to="/books"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><BookOpen size={14} className="inline" /> Books</NavigationMenuItem>
                        </NavLink>








                        <NavLink
                            to="/characters"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><User size={14} className="inline" /> Characters</NavigationMenuItem>
                        </NavLink>


                        <NavLink
                            to="/spells"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><WandSparkles size={14} className="inline" /> Spells</NavigationMenuItem>
                        </NavLink>

                        <NavLink
                            to="/houses"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><Castle size={14} className="inline" /> Houses</NavigationMenuItem>
                        </NavLink>


                    </div>

                    <div className="flex sticky top-0 z-14 md:justify-between justify-end items-center px-4 shadow-2xl border-b h-16 bg-background/90">
                        <ThemeToggle /> {/* Add the theme toggle button here */}
                    </div>


                </NavigationMenuList>
            </NavigationMenu>
        </div >
    );
};

export default Navbar;
