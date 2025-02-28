import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
type Character = {
    fullname: string;
    nickname: string;
    hogwartsHouse: string;
    interpretedBy: string;
    children: string[];
    image: string;
    birthdate: string;
    index: number;
};

type Characterdata = {
    character: Character,
}

const getHouseClassName = (house: string) => {
    switch (house) {
        case "Gryffindor":
            return "house-gryffindor";
        case "Slytherin":
            return "house-slytherin";
        case "Ravenclaw":
            return "house-ravenclaw";
        case "Hufflepuff":
            return "house-hufflepuff";
        default:
            return "house-default";
    }
};

const Charactercard: React.FC<Characterdata> = ({ character }) => {
    return (
        <div className="">
            <section className="rounded-lg relative text-card-foreground shadow-sm  ">
                {/* Top Gradient Bar */}
                <div className={`absolute h-2 left-0 top-0 w-full rounded-t-lg ${getHouseClassName(character.hogwartsHouse)}`}></div>
                <Card>
                    <CardHeader className='mt-3'>
                        <CardTitle className=''>
                            <section className='flex flex-row space-y-1.5 gap-4 '>
                                <div className=''>
                                    <Avatar className=''>
                                        <AvatarFallback >CN</AvatarFallback>
                                    </Avatar>
                                </div>

                                <div className='flex flex-col '>
                                    <p className='text-lg tracking-tight font-semibold'>{character.nickname}</p>
                                    <div className="flex flex-row gap-x-3 items-center">
                                        <Badge variant="outline" className="rounded-full">{character.hogwartsHouse}</Badge>
                                        <span className="text-muted-foreground  leading-none">•</span>
                                        <p className="text-sm text-muted-foreground">Student</p>
                                    </div>
                      

                                  

                                </div>

                            </section>
                        </CardTitle>
                        <CardDescription className=''>

                        </CardDescription>
                    </CardHeader>
                    <CardContent className=''>
                        <p className=' text-sm text-muted-foreground'> Harry's loyal best friend from a pure-blood wizarding family, known for his strategic mind and humor.</p>

                    </CardContent>
                    <CardFooter className=''>
                        <p className='font-Inter text-muted-foreground text-xs text-left'>Book Status :<span>Pure-blood</span> </p>
                    </CardFooter>
                </Card>
            </section>












        </div>
    )
}

export default Charactercard