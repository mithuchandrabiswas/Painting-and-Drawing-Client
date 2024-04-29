import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyArtAndCraftCard from "../components/MyArtAndCraftCard";
import { AuthContext } from "../provider/AuthContextProvider";

const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const loadedCrafts = useLoaderData();
    // console.log(loadedCrafts);

    const filteredMyCrafts = loadedCrafts.filter(singleCraft => singleCraft.email == user.email);
    console.log(filteredMyCrafts);
    const [crafts,setCrafts] = useState(filteredMyCrafts)

    return (
        <div>
            <h1>All Art And craft: {crafts.length}</h1>
            <h2 className="text-center font-bold">Apply Dropdown list for filter based of customization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {
                    crafts.map(singleCraft => <MyArtAndCraftCard key={singleCraft._id} singleCraft={singleCraft} crafts={crafts} setCrafts={setCrafts}></MyArtAndCraftCard>)
                }
            </div>

        </div>
    );
};

export default MyArtAndCraft;