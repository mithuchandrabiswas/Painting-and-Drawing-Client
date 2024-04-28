// import React, { useContext, useEffect, useState } from 'react';
// import CraftItemsSectionCard from './CraftItemsSectionCard';
// import { AuthContext } from '../provider/AuthContextProvider';

// const CraftItemsSection = () => {
//     const [loadedData, setLoadedData] = useState([]);
//     const { loading, setLoading } = useContext(AuthContext);



//     useEffect(() => {
//         fetch('https://painting-and-drawing-server.vercel.app/addcrafts')
//             .then(res => res.json())
//             .then((data) => {
//                 // console.log(data);
//                 setLoadedData(data);
//             })
//     }, []);
//     // console.log(loadedData);
//     const sliceMaxSixData = loadedData.slice(0, 6);
//     console.log(sliceMaxSixData);
//     return (
//         <div>
//             <h1 className='text-center'>Craft Items Section: {sliceMaxSixData.length}</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
//                 {
//                     sliceMaxSixData.map(singleCraft => <CraftItemsSectionCard key={singleCraft._id} singleCraft={singleCraft}></CraftItemsSectionCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default CraftItemsSection;


import { useContext, useEffect, useState } from 'react';
import CraftItemsSectionCard from './CraftItemsSectionCard';
import { AuthContext } from '../provider/AuthContextProvider';

const CraftItemsSection = () => {
    const [loadedData, setLoadedData] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true); // Set loading state to true before fetching data
        fetch('https://painting-and-drawing-server.vercel.app/addcrafts')
            .then(res => res.json())
            .then((data) => {
                setLoadedData(data);
                setLoading(false); // Set loading state to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Ensure loading state is set to false in case of error
            });
    }, [setLoading]); // Include setLoading in dependency array to prevent stale closure

    const sliceMaxSixData = loadedData.slice(0, 6);

    return (
        <div>
            <h1 className='text-center'>Craft Items Section: {sliceMaxSixData.length}</h1>
            {loading ? (
                <div className="flex justify-center items-center gap-4">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {sliceMaxSixData.map(singleCraft => (
                        <CraftItemsSectionCard key={singleCraft._id} singleCraft={singleCraft} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CraftItemsSection;
