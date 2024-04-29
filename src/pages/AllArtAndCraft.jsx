import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AllArtAndCraftCard from "../components/AllArtAndCraftCard";

const AllArtAndCraft = () => {
    const loadedCrafts = useLoaderData();
    const [allCraft, setAllCraft] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loadedCrafts) {
            setAllCraft(loadedCrafts);
            setLoading(false);
        }
    }, [loadedCrafts]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center gap-4">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>;
    }

    return (
        <div className="bg-green-50 my-4 p-1 rounded-md">
            <div className='py-2 md:py-4'>
                <h1 className='text-center text-lg md:text-2xl font-bold text-[#101010]'>All Art And craft</h1>
                <p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {allCraft.map(singleCraft => (
                    <AllArtAndCraftCard key={singleCraft._id} singleCraft={singleCraft} />
                ))}
            </div>
        </div>
    );
};

export default AllArtAndCraft;
