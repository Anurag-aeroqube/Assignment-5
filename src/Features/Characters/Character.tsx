import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import Charactercard from "@/ui/Charactercard";
import { fetchCharacters } from "@/redux/slices/characterSlice";
import { useLoading } from '@/Context/LoadingProvider';
import { RootState, AppDispatch } from "@/redux/store";

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

const Character = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { characters, error } = useSelector((state: RootState) => state.characters);
    const { startLoading, stopLoading } = useLoading();
  
    useEffect(() => {
      startLoading();
      dispatch(fetchCharacters()).finally(stopLoading);
    }, [dispatch]);

   
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    // House-wise filtering function
    const filterCharactersByHouse = (house: string) => {
        return characters.filter((character) => character.hogwartsHouse === house);
    };

    return (
        <div className="w-full py-10 ">
            <div className="w-[92%] mx-auto ">
                {/* Header */}
                <section>
                    <header className="flex flex-col items-center text-center mb-12 mx-auto">
                        <p className="text-3xl lg:text-4xl font-bold mb-4 text-center">Harry Potter Characters</p>
                        <p className="max-w-[700px] text-lg text-muted-foreground">
                            Meet the witches, wizards, and magical creatures from the wizarding world.
                        </p>
                    </header>
                </section>

                {/* Tabs Section */}
                <section className="w-full mb-8 ">
                    <Tabs defaultValue="all" className="">
                    <TabsList className="w-full flex  sm:grid sm:grid-cols-5 overflow-x-auto whitespace-nowrap mb-6 h-10 scrollbar-hide">
    <TabsTrigger value="all" className="h-8 min-w-[50px] flex-shrink-0">All</TabsTrigger>
    <TabsTrigger value="Gryffindor" className="h-8 min-w-[70px] flex-shrink-0">Gryffindor</TabsTrigger>
    <TabsTrigger value="Slytherin" className="h-8 min-w-[70px] flex-shrink-0">Slytherin</TabsTrigger>
    <TabsTrigger value="Ravenclaw" className="h-8 min-w-[70px] flex-shrink-0">Ravenclaw</TabsTrigger>
    <TabsTrigger value="Hufflepuff" className="h-8 min-w-[70px] flex-shrink-0">Hufflepuff</TabsTrigger>
</TabsList>



                        {/* All Characters Tab */}
                        <TabsContent value="all">
                            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                                {characters.map((character) => (
                                    <Charactercard key={character.index} character={character} />
                                ))}
                            </div>
                        </TabsContent>

                        {/* Gryffindor */}
                        <TabsContent value="Gryffindor">
                            <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6">
                                {filterCharactersByHouse("Gryffindor").map((character) => (
                                    <Charactercard key={character.index} character={character} />
                                ))}
                            </div>
                        </TabsContent>

                        {/* Slytherin */}
                        <TabsContent value="Slytherin">
                            <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6">
                                {filterCharactersByHouse("Slytherin").map((character) => (
                                    <Charactercard key={character.index} character={character} />
                                ))}
                            </div>
                        </TabsContent>

                        {/* Ravenclaw */}
                        <TabsContent value="Ravenclaw">
                            <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6">
                                {filterCharactersByHouse("Ravenclaw").map((character) => (
                                    <Charactercard key={character.index} character={character} />
                                ))}
                            </div>
                        </TabsContent>

                        {/* Hufflepuff */}
                        <TabsContent value="Hufflepuff">
                            <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6">
                                {filterCharactersByHouse("Hufflepuff").map((character) => (
                                    <Charactercard key={character.index} character={character} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>
            </div>
        </div>
    );
};

export default Character;
