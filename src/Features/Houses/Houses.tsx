import React, { useEffect, useState } from 'react'
import Housescard from '@/ui/Housescard'
import { error } from 'console';



type Houses={
    house:string;
    emoji:string;
    founder:string;
    colors:string[];
    animal:string;
    index:number;

}

type Housedata={
    House:Houses[];
}

const Houses: React.FC<Housedata> = () => {

    const [houses,sethouses]=useState<Houses[]>([]);
    const [loading, setLoading]=useState<boolean>(true);
    const [err, setError]=useState<string | null>(null);

    useEffect(()=>{
        const fetchhouses =async ()=>{
            try{
                setLoading(true);
                const response= await fetch('https://potterapi-fedeperin.vercel.app/en/houses');
                if(!response.ok)
                {
                    throw new Error("failed to fetch houses");
                }
                const data=await response.json();
                sethouses(data);

            }
            catch (err) {
                console.error('API Error:', err);
                setError('Failed to load books.');
              } finally {
                setLoading(false);
              }
        };
        fetchhouses();
    },[]);

    if (loading) return <p className="text-center  text-gray-500">Loading Houses...</p>;
    if (err) return <p className="text-center text-red-500">Error: {err}</p>;
  



    return (
        <div className='w-full'>
            <div className='w-[92%] mx-auto py-10'>
                <section>
                    <div className='flex flex-col justify-center items-center mb-12'>
                        <p className='lg:text-4xl text-3xl font-bold tracking-tight mb-4'>Hogwarts Houses</p>
                        <p className="max-w-[700px] text-lg text-muted-foreground">Learn about the four houses of Hogwarts School of Witchcraft and Wizardry.</p>
                    </div>

                </section>

                <section>
                    {houses.map((house)=>(
                        <Housescard  key={house.index} house={house}/>
                    ))}
                    
                </section>

            </div>

        </div>
    )
}

export default Houses