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
import {  Home, BookOpen, User, Castle,WandSparkles } from "lucide-react"; 
import { Ghost } from 'lucide-react'


const Homecard = () => {
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:gap-4 gap-7'>

            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>

                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl font-semibold'><BookOpen className='inline w-[8%] mx-auto mb-1'/> Books</CardTitle>
                        <CardDescription className='font-semibold'>Explore the Harry Potter book series</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Discover details about all seven books in the Harry Potter series, including summaries and publication dates.</p>
                    </CardContent>
                    <CardFooter className='items-center'>
                        <Button className='w-full mx-auto' variant='ghost'>View Books</Button>
                    </CardFooter>
                </Card>

            </section>



            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className=' absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>

            <Card className=''>
                <CardHeader>
                    <CardTitle className='text-2xl font-semibold'> <User className='inline w-[8%] mx-auto mb-1'/> Characters</CardTitle>
                    <CardDescription className='font-semibold'>Meet the wizards and witches</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Browse through the characters from the Harry Potter universe, including their backgrounds and affiliations.</p>
                </CardContent>
                <CardFooter>
                    <Button className='w-full mx-auto' variant='ghost'>View Characters</Button>
                </CardFooter>
            </Card>
            </section>


            <section className='rounded-lg relative text-card-foreground shadow-sm'>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>

            <Card className=''>
                <CardHeader>
                    <CardTitle className='text-2xl font-semibold'><WandSparkles className='inline w-[8%] mx-auto mb-1'/> Spells</CardTitle>
                    <CardDescription className='font-semibold'>Learn magical incantations</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Discover the various spells used in the wizarding world, their effects, and how they're cast.</p>
                </CardContent>
                <CardFooter>
                    <Button className='w-full mx-auto mb-6' variant='ghost'>View Spells</Button>
                </CardFooter>
            </Card>
            </section>



            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>

            <Card>
                <CardHeader>
                    <CardTitle className='text-2xl font-semibold'><Castle className='inline w-[8%] mx-auto mb-1'/> Houses</CardTitle>
                    <CardDescription className='font-semibold'>Explore Hogwarts houses</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Learn about the four houses of Hogwarts School of Witchcraft and Wizardry and their unique traits.</p>
                </CardContent>
                <CardFooter>
                    <Button className='w-full mx-auto mb-6' variant='ghost'>View Houses</Button>
                </CardFooter>
            </Card>
            </section>


        </div>
    )
}

export default Homecard