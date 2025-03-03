import React, { useEffect} from 'react'
import Housescard from '@/ui/Housescard'
import { RootState, AppDispatch } from "@/redux/store";

import { useLoading } from '@/Context/LoadingProvider';
import { fetchHouses } from '@/redux/slices/houseSlice';
import { useDispatch, useSelector } from "react-redux";




const Houses= () => {

    const dispatch = useDispatch<AppDispatch>();
  const { houses, error } = useSelector((state: RootState) => state.houses);
  const { startLoading, stopLoading } = useLoading();

    useEffect(()=>{
      startLoading();
      dispatch(fetchHouses()).finally(stopLoading);
    },[dispatch]);

    
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  



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
                        <Housescard  key={house.index} house={house}/> //housescard me house:house[] nii likhna hai
                    ))}
                    
                </section>

            </div>

        </div>
    )
}

export default Houses