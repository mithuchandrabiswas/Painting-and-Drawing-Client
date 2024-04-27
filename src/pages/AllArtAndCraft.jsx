import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
    const loadedCrafts = useLoaderData();
    const [allCraft,setAllCraft] = useState(loadedCrafts)
    console.log(loadedCrafts);
    return (
        <div>
            <h1>All Art And craft: {allCraft.length}</h1>
            
        </div>
    );
};

export default AllArtAndCraft;