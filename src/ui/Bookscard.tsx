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
import { Home, BookOpen, User, Castle, WandSparkles } from "lucide-react";
import placeholder from '../assets/Books/placeholder.svg'

const Bookscard = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 '>

            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl font-semibold font-Inter leading-none tracking-tight mt-2'> Harry Potter and the Philosopher's Stone </CardTitle>
                        <CardDescription className=''>
                            <p >
                                <div className='font-Inter inline-block border rounded-full px-2.5 py-0.5 text-xs font-semibold  text-white'>26 June 1997</div>
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=''>
                        <figure className='flex flex-row gap-5'>
                            <div className=''>
                                <img src={placeholder} className='w-34 h-48 object-cover  rounded-md'></img>
                            </div>
                            <p className='md:w-1/2 lg:w-[65%] my-auto font-Inter text-sm text-muted-foreground'> Harry Potter discovers his magical heritage on his 11th birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.</p>
                        </figure>
                    </CardContent>
                    <CardFooter className='mt-2'>
                        <p className='font-Inter text-muted-foreground text-xs text-left'>Book 1 in the series</p>
                    </CardFooter>
                </Card>
            </section>



            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl font-semibold font-Inter leading-none tracking-tight mt-2'> Harry Potter and the Chamber of Secrets </CardTitle>
                        <CardDescription className=''>
                            <p >
                                <div className='font-Inter inline-block border rounded-full px-2.5 py-0.5 text-xs font-semibold  text-white'>26 June 1997</div>
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=''>
                        <figure className='flex flex-row gap-5'>
                            <div className='md:w-1/2 lg:w-[35%]'>
                                <img src={placeholder} className='h-[190px] object-cover  rounded-md'></img>
                            </div>
                            <p className='md:w-1/2 lg:w-[65%] my-auto font-Inter text-sm text-muted-foreground'> Harry returns to Hogwarts for his second year, only to find the school plagued by a series of mysterious attacks..</p>
                        </figure>
                    </CardContent>
                    <CardFooter className='mt-2'>
                        <p className='font-Inter text-muted-foreground text-xs text-left'>Book 1 in the series</p>
                    </CardFooter>
                </Card>
            </section>



            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl font-semibold font-Inter leading-none tracking-tight'> Harry Potter and the Philosopher's Stone </CardTitle>
                        <CardDescription className=''>
                            <p >
                                <div className='font-Inter inline-block border rounded-full px-2.5 py-0.5 text-xs font-semibold  text-white'>26 June 1997</div>
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=''>
                        <figure className='flex flex-row gap-5'>
                            <div className='md:w-1/2 lg:w-[35%]'>
                                <img src={placeholder} className='h-[190px] object-cover  rounded-md'></img>
                            </div>
                            <p className='md:w-1/2 lg:w-[65%] my-auto font-Inter text-sm text-muted-foreground'> Harry Potter discovers his magical heritage on his 11th birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.</p>
                        </figure>
                    </CardContent>
                    <CardFooter className='mt-2'>
                        <p className='font-Inter text-muted-foreground text-xs text-left'>Book 1 in the series</p>
                    </CardFooter>
                </Card>
            </section>

            <section className='rounded-lg relative text-card-foreground shadow-sm '>
                <div className='absolute h-2 left-0 top-0 w-full rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-600'></div>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl font-semibold font-Inter leading-none tracking-tight'> Harry Potter and the Philosopher's Stone </CardTitle>
                        <CardDescription className=''>
                            <p >
                                <div className='font-Inter inline-block border rounded-full px-2.5 py-0.5 text-xs font-semibold  text-white'>26 June 1997</div>
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=''>
                        <figure className='flex flex-row gap-5'>
                            <div className='md:w-1/2 lg:w-[35%]'>
                                <img src={placeholder} className='h-[190px] object-cover  rounded-md'></img>
                            </div>
                            <p className='md:w-1/2 lg:w-[65%] my-auto font-Inter text-sm text-muted-foreground'> Harry Potter discovers his magical heritage on his 11th birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.</p>
                        </figure>
                    </CardContent>
                    <CardFooter className='mt-2'>
                        <p className='font-Inter text-muted-foreground text-xs text-left'>Book 1 in the series</p>
                    </CardFooter>
                </Card>
            </section>

        </div>
    )
}

export default Bookscard