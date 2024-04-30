import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyArtAndCraftCard from "../components/MyArtAndCraftCard";
import { AuthContext } from "../provider/AuthContextProvider";

const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const loadedCrafts = useLoaderData();
    
    // Filter crafts based on user email
    const filteredMyCrafts = loadedCrafts.filter(singleCraft => singleCraft.email === user.email);
    console.log(filteredMyCrafts);
    
    // State to hold crafts and sorted crafts
    const [crafts, setCrafts] = useState(filteredMyCrafts);
    const [sortCrafts, setSortCraft] = useState(filteredMyCrafts);

    // Function to handle sorting
    const handleSort = (e) => {
        const value = e.target.value;
        let sortedCrafts = [];
        if (value === "Yes") {
            sortedCrafts = [...crafts].filter(craft => craft.customization === "Yes");
        } else if (value === "No") {
            sortedCrafts = [...crafts].filter(craft => craft.customization === "No");
        } else {
            sortedCrafts = crafts; // Reset to original crafts if sorting option is empty
        }
        setSortCraft(sortedCrafts);
    };

    return (
        <div>
            <div className="text-center">
                <select name="" id="" onChange={handleSort}>
                    <option value="">Sort by Customization</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="bg-gray-100 p-4">
                <div className='py-2 md:py-4'>
                    <h1 className='text-center text-lg md:text-2xl font-bold text-[#101010]'>My all art and craft</h1>
                    <p></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {
                        // Map over sortCrafts to display sorted crafts
                        sortCrafts.map(singleCraft => 
                            <MyArtAndCraftCard 
                                key={singleCraft._id} 
                                singleCraft={singleCraft} 
                                crafts={crafts} 
                                setCrafts={setCrafts} 
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyArtAndCraft;
