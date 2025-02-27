import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from 'react'
import Charactercard from '@/ui/Charactercard'

const Character = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-[92%] mx-auto'>
                <section>
                    <header className=' flex  flex-col items-center text-center mb-12 mx-auto'>
                        <p className='text-3xl lg:text-4xl font-bold mb-4 text-center'>Harry Potter Characters</p>
                        <p className='max-w-[700px] text-lg text-muted-foreground'>Meet the witches, wizards, and magical creatures from the wizarding world.</p>
                    </header>
                </section>

                <section className="w-full mb-8 ">
                    <Tabs defaultValue="account" className="">
                        <TabsList className="w-full h-10 ">
                            <TabsTrigger value="all" className="px-30">All</TabsTrigger>
                            <TabsTrigger value="Gryffindor" className="px-25">Gryffindor</TabsTrigger>
                            <TabsTrigger value="Slytherin" className="px-25">Slytherin</TabsTrigger>
                            <TabsTrigger value="Ravenclaw" className="px-25">Ravenclaw</TabsTrigger>
                            <TabsTrigger value="Hufflepuff" className="px-25">Hufflepuff</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account"> </TabsContent>
                        <TabsContent value="password"></TabsContent>
                    </Tabs>
                </section>
                <Charactercard />

            </div>


        </div>
    )
}

export default Character
