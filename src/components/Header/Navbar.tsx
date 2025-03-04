import {
    NavigationMenu,
    
} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";
import ThemeToggle from "../Themetoggle";
import { Home, BookOpen, User, Castle, WandSparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex sticky top-0 z-14 lg:justify-center  shadow-2xl border-b h-16 bg-background/90 space-x-2 mx-auto px-4'>
           
            <NavigationMenu className='flex w-full lg:justify-between   gap-x-5 lg:gap-x-3  lg:items-center'>
                <NavLink to="/home">
                    <span className='text-xl font-bold'>⚡ Potter API Explorer</span>
                </NavLink>
                
                {/* Desktop Menu */}
                <div className='hidden lg:flex gap-x-2'>
                    <NavLink to="/home" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`}>
                        <span className='text-sm flex items-center'><Home size={14} className="inline mr-1" /> Home</span>
                    </NavLink>
                    <NavLink to="/books" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`}>
                        <span className='text-sm flex items-center'><BookOpen size={14} className="inline mr-1" /> Books</span>
                    </NavLink>
                    <NavLink to="/characters" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`}>
                        <span className='text-sm flex items-center'><User size={14} className="inline mr-1" /> Characters</span>
                    </NavLink>
                    <NavLink to="/spells" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`}>
                        <span className='text-sm flex items-center'><WandSparkles size={14} className="inline mr-1" /> Spells</span>
                    </NavLink>
                    <NavLink to="/houses" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`}>
                        <span className='text-sm flex items-center'><Castle size={14} className="inline mr-1" /> Houses</span>
                    </NavLink>
                </div>

                {/* Theme Toggle & Mobile Menu Button */}
                <div className='flex lg:items-center lg:ml-0 sm:ml-[450px] ml-16 mx-auto gap-x-4'>
                    <ThemeToggle />
                    <button className="lg:hidden p-2 rounded-md" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </NavigationMenu>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full bg-background shadow-lg border-l transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out w-64 lg:hidden flex flex-col items-center py-4`}> 
                <button className="self-end p-4" onClick={() => setMenuOpen(false)}>
                    <X size={24} />
                </button>
                <NavLink to="/home" className={({ isActive }) => `w-full text-center py-2 ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`} onClick={() => setMenuOpen(false)}>
                    <span className='text-sm flex items-center'><Home size={18} className="inline mr-2" /> Home</span>
                </NavLink>
                <NavLink to="/books" className={({ isActive }) => `w-full text-center py-2 ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`} onClick={() => setMenuOpen(false)}>
                    <span className='text-sm flex items-center'><BookOpen size={18} className="inline mr-2" /> Books</span>
                </NavLink>
                <NavLink to="/characters" className={({ isActive }) => `w-full text-center py-2 ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`} onClick={() => setMenuOpen(false)}>
                    <span className='text-sm flex items-center'><User size={18} className="inline mr-2" /> Characters</span>
                </NavLink>
                <NavLink to="/spells" className={({ isActive }) => `w-full text-center py-2 ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`} onClick={() => setMenuOpen(false)}>
                    <span className='text-sm flex items-center'><WandSparkles size={18} className="inline mr-2" /> Spells</span>
                </NavLink>
                <NavLink to="/houses" className={({ isActive }) => `w-full text-center py-2 ${isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted dark:hover:bg-secondary"}`} onClick={() => setMenuOpen(false)}>
                    <span className='text-sm flex items-center'><Castle size={18} className="inline mr-2" /> Houses</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;