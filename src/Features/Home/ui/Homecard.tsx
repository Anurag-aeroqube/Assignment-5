import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import {  BookOpen, User, Castle,WandSparkles } from "lucide-react"; 
import { NavLink } from "react-router-dom";



const Homecard = () => {
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:gap-6 gap-7'>

            <section className='rounded-lg relative text-card-foreground shadow-sm  '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>

                <Card className='lg:h-[356px] xl:h-[288px] md:h-[268px'>
                    <CardHeader>
                        <CardTitle className='text-2xl font-semibold font-inter'><BookOpen className='inline xl:w-[8%] w-[10%] mx-auto mb-1'/> Books</CardTitle>
                        <CardDescription className='font-semibold text-sm font-Inter' >Explore the Harry Potter book series</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='font-Inter'>
                            Discover details about all seven books in the Harry Potter series, including summaries and publication dates.</p>
                    </CardContent>
                    <CardFooter className=' items-center'>
                    <NavLink to='/books'>
                        <Button className='w-full mx-auto hover:cursor-pointer' variant='ghost' >View Books</Button>
                        </NavLink>
                    </CardFooter>
                </Card>

            </section>



            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className=' absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>

            <Card className=''>
                <CardHeader className=''>
                    <CardTitle className='text-2xl font-semibold font-Inter'> <User className='inline xl:w-[8%] w-[10%] mx-auto mb-1'/> Characters</CardTitle>
                    <CardDescription className='font-semibold font-Inter text-sm'>Meet the wizards and witches</CardDescription>
                </CardHeader>
                <CardContent className='px-7'>
                    <p className='font-Inter'>Browse through the characters from the Harry Potter universe, including their backgrounds and affiliations.</p>
                </CardContent>
                <CardFooter>
                    <NavLink to='/characters'>
                    <Button className='w-full mx-auto hover:cursor-pointer' variant='ghost'>View Characters</Button>

                    </NavLink>
                   
                </CardFooter>
            </Card>
            </section>


            <section className='rounded-lg relative text-card-foreground shadow-sm'>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>

            <Card className=''>
                <CardHeader>
                    <CardTitle className='text-2xl font-semibold'><WandSparkles className='inline xl:w-[8%] w-[10%] mx-auto mb-1'/> Spells</CardTitle>
                    <CardDescription className='font-semibold'>Learn magical incantations</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Discover the various spells used in the wizarding world, their effects, and how they're cast.</p>
                </CardContent>
                <CardFooter>
                <NavLink to='/spells'>
                    <Button className='w-full mx-auto mb-6 hover:cursor-pointer' variant='ghost'>View Spells</Button>
                    </NavLink>
                </CardFooter>
            </Card>
            </section>



            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>

            <Card>
                <CardHeader>
                    <CardTitle className='text-2xl font-semibold'><Castle className='inline xl:w-[8%] w-[10%] mx-auto mb-1'/> Houses</CardTitle>
                    <CardDescription className='font-semibold'>Explore Hogwarts houses</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Learn about the four houses of Hogwarts School of Witchcraft and Wizardry and their unique traits.</p>
                </CardContent>
                <CardFooter>
                <NavLink to='/houses'>
                    <Button className='w-full mx-auto mb-6 hover:cursor-pointer' variant='ghost'>View Houses</Button>
                    </NavLink>
                </CardFooter>
            </Card>
            </section>


        </div>
    )
}

export default Homecard