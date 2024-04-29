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
    const [crafts, setCrafts] = useState(filteredMyCrafts)

    return (
        <div>
            <div className="text-center">
                <select name="" id="">
                    <option value="">Sort by Customization</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>
            </div>
            <div className="bg-gray-100 p-4">
                <div className='py-2 md:py-4'>
                    <h1 className='text-center text-lg md:text-2xl font-bold text-[#101010]'>My all art and craft</h1>
                    <p></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {
                        crafts.map(singleCraft => <MyArtAndCraftCard key={singleCraft._id} singleCraft={singleCraft} crafts={crafts} setCrafts={setCrafts}></MyArtAndCraftCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyArtAndCraft;