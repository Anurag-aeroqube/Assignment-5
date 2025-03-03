
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SpellCard from "./SpellCard.tsx"
import { useState } from "react"
type SpellsType = {
  "spell": string,
  "use": string,
  "index": number
}
const SpellTab: React.FC<{ spells: SpellsType[] }> = ({ spells }) => {

  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <Tabs defaultValue="All" onValueChange={setSelectedTab} className="">
      <TabsList className="w-full  mb-6  ">
        <div className="flex flex-wrap  w-full ">
          <TabsTrigger className="w-1/3 cursor-pointer  mx-auto px-3" value="All">All Spells</TabsTrigger>
          <TabsTrigger className="w-1/3 cursor-pointer  mx-auto px-3" value="Charms">Charms</TabsTrigger>
          <TabsTrigger className="w-1/3 cursor-pointer  mx-auto px-3" value="Curses">Curses</TabsTrigger>
        </div>


      </TabsList>
      <TabsContent value="All"><div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
        {spells.map((spell) => (
          <SpellCard spell={spell} />
        ))}
      </div> 
      </TabsContent>
      <TabsContent value="Charms"><div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
        {spells.filter(f => f.index % 2 != 0).map((spell) => (
          <SpellCard spell={spell} />
        ))}
      </div> 
      </TabsContent>
      <TabsContent value="Curses"><div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
        {spells.filter(f => f.index % 2 == 0).map((spell) => (
          <SpellCard spell={spell} />
        ))}

      </div> </TabsContent>



    </Tabs>
  )
}

export default SpellTab
