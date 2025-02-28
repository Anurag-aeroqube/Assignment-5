import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

type Houses = {
    house: string;
    emoji: string;
    founder: string;
    colors: string[];
    animal: string;
    index: number;

}

type Housedata = {
    house: Houses[];
}

const houseClassMap: Record<string, string> = {
    Gryffindor: "house-gryffindor",
    Slytherin: "house-slytherin",
    Ravenclaw: "house-ravenclaw",
    Hufflepuff: "house-hufflepuff",
};



const Housescard: React.FC<Housedata> = ({ house }) => {
    return (
        <div className='mb-10'>

            <Card className='py-0 overflow-hidden'>
                <CardHeader className={`${houseClassMap[house.house] || "house-default"} pb-6 text-white`}>
                    <CardTitle className="text-3xl font-bold leading-none mt-7">{house.house}</CardTitle>
                    <CardDescription>
                        <p className="text-lg opacity-90 text-white">{house.founder}</p>
                    </CardDescription>
                </CardHeader>

                <CardContent className='grid sm:grid-cols-2  gap-6 '>
                    <section className=' flex flex-col space-y-3'>
                        <h1 className='text-lg font-semibold'>About</h1>
                        <p className='text-muted-foreground w-full'>Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colors are scarlet and gold. Minerva McGonagall is the most recent Head of Gryffindor.</p>
                        <div className='flex flex-col'>
                            <p className='font-medium mb-1'>House Traits</p>
                            <div className='flex flex-row gap-x-2'>
                                <Badge variant="outline" className='rounded-full'>Bravery</Badge>
                                <Badge variant="outline" className='rounded-full'>Courage</Badge>
                                <Badge variant="outline" className='rounded-full'>Nerve</Badge>
                                <Badge variant="outline" className='rounded-full'>Chivalry</Badge>


                            </div>

                        </div>

                    </section>

                    <section className='w-1/2 mb-3 flex flex-col space-y-4'>
                    <div>
                        <h1 className='mb-1 font-medium'>House Details</h1>
                        <footer className='text-muted-foreground text-sm space-y-1'>
                            <p>Colors: Scarlet and gold</p>
                            <p>Mascot: Lion</p>
                            <p>Element: Fire</p>
                            <p>Common Room: Gryffindor Tower</p>
                            <p>House Ghost: Nearly Headless Nick</p>                      
                        </footer>
                    </div>

                    <div>
                    <h1 className='font-medium mb-1'>Notable Members</h1>
                        <footer className='text-muted-foreground space-y-1 text-sm'>
                            <p>Harry Potter</p>
                            <p>Hermione Granger</p>
                            <p>Ron Weasley</p>
                            <p>Albus Dumbledore</p>
                                              
                        </footer>

                    </div>

                    </section>
                </CardContent>

            </Card>

        </div>
    )
}

export default Housescard