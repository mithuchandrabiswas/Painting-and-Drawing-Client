import {useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyArtAndCraftCard from "../components/MyArtAndCraftCard";
import { AuthContext } from "../provider/AuthContextProvider";

const MyArtAndCraft = () => {
    const {user} = useContext(AuthContext);
    const loadedCrafts = useLoaderData();
    const [allCraft,setAllCraft] = useState(loadedCrafts)
    // console.log(loadedCrafts);
    const filteredMyCrafts = allCraft.filter(singleCraft => singleCraft.email == user.email);
    console.log(filteredMyCrafts);
    return (
        <div>
            <h1>All Art And craft: {filteredMyCrafts.length}</h1>
            <h2 className="text-center font-bold">Apply Dropdown list for filter based of customization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {
                    filteredMyCrafts.map(singleCraft => <MyArtAndCraftCard key={singleCraft._id} singleCraft={singleCraft}></MyArtAndCraftCard>)
                }
            </div>
            
        </div>
    );
};

export default MyArtAndCraft;