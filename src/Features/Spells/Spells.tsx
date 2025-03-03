
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import SpellTab from "./ui/SpellTab";


type SpellType = { 
  spell: string;
  use: string;
  index: number;
};

const Spells = () => {
    const [spells, setSpells] = useState<SpellType[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      const [err, setError] = useState<string | null>(null);
      const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getSpells = async () => {
    
      try {
        setLoading(true);
       
        const response = await fetch('https://potterapi-fedeperin.vercel.app/en/spells');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setSpells(data);
      } catch (err) {
        console.error('API Error:', err);
        setError('Failed to load books.');
      } finally {
        setLoading(false);
      }
    };

    getSpells();
  }, []);

  if (loading) return <p className="text-center  text-gray-500">Loading Spells...</p>;
  const filteredSpells = spells.filter((spell) =>
    spell.spell.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (err) return <p className="text-center text-red-500">Error: {err}</p>;
  return (
    <section className="w-[95%] mx-auto py-10 px-8">
      <article className="flex flex-col items-center text-center mb-16">
        <h1 className="text-3xl tracking-tight font-bold lg:text-4xl mb-4">
          Magical Spells
        </h1>
        <p className="tracking-wide text-lg text-muted-foreground max-w-[700px] mb-8">
          Discover the incantations and effects of spells from the wizarding world.
        </p>
        <div className="w-full max-w-md">
          <Input
            placeholder="Search spells..."
            className="h-[40px] border border-input rounded-md px-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </article>

      <article className="w-full">
          <SpellTab spells={filteredSpells} />
      </article>
    </section>
  );
};

export default Spells;
