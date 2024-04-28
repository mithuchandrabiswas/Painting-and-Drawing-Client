import React, { useEffect, useState } from 'react';
import CraftItemsSectionCard from './CraftItemsSectionCard';

const CraftItemsSection = () => {
    const [loadedData,setLoadedData] = useState([]);
    useEffect(() => {
        fetch('https://painting-and-drawing-server.vercel.app/addcrafts')
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            setLoadedData(data);
        })
    },[]);
    // console.log(loadedData);
    const sliceMaxSixData = loadedData.slice(0,6);
    console.log(sliceMaxSixData);
    return (
        <div>
            <h1 className='text-center'>Craft Items Section: {sliceMaxSixData.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {
                    sliceMaxSixData.map(singleCraft => <CraftItemsSectionCard key={singleCraft._id} singleCraft={singleCraft}></CraftItemsSectionCard>)
                }
            </div>
        </div>
    );
};

export default CraftItemsSection;