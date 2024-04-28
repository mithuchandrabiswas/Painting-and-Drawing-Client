import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllArtAndCraftCard from "../components/AllArtAndCraftCard";

const AllArtAndCraft = () => {
    const loadedCrafts = useLoaderData();
    const [allCraft,setAllCraft] = useState(loadedCrafts)
    console.log(loadedCrafts);
    return (
        <div>
            <h1>All Art And craft: {allCraft.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {
                    allCraft.map(singleCraft => <AllArtAndCraftCard key={singleCraft._id} singleCraft={singleCraft}></AllArtAndCraftCard>)
                }
            </div>
            
        </div>
    );
};

export default AllArtAndCraft;