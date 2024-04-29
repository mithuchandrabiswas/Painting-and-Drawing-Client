import { useEffect } from "react";
import { useState } from "react";
import SubCategoriesCard from "./SubCategoriesCard";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContextProvider";

const ArtAndCraftCategoriesSection = () => {
    const [subCategories, setSubCategories] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true)
        fetch('https://painting-and-drawing-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSubCategories(data);
                setLoading(false)
            })
    }, [setLoading]);
    // console.log(subCategories);
    return (
        <div className="bg-green-50 my-4 md:my-8 p-1 rounded-md">
            <div className='py-2 md:py-4'>
                <h1 className='text-center text-lg md:text-2xl font-bold text-[#101010]'>Art And Category Section</h1>
                <p></p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center gap-4">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {
                        subCategories.map(singleSubCategory => <SubCategoriesCard key={singleSubCategory._id} singleSubCategory={singleSubCategory}></SubCategoriesCard>)
                    }
                </div>
            )}


        </div>
    );
};

export default ArtAndCraftCategoriesSection;




// import { useEffect, useState } from "react";
// import SubCategoriesCard from "./SubCategoriesCard";

// const ArtAndCategorySection = () => {
//     const [subCategories, setSubCategories] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('https://painting-and-drawing-server.vercel.app/categories')
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setSubCategories(data);
//                 setIsLoading(false);
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setIsLoading(false);
//             });
//     }, []);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>Art And Category Section: {subCategories.length}</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
//                 {subCategories.map(singleSubCategory => (
//                     <SubCategoriesCard
//                         key={singleSubCategory._id}
//                         singleSubCategory={singleSubCategory}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ArtAndCategorySection;
