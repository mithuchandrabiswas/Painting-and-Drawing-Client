// import { Link } from "react-router-dom";


// const SubCategoriesCard = ({ singleSubCategory }) => {
//     const { _id, image, subcategory_Name, short_description } = singleSubCategory;
//     console.log(singleSubCategory);


//     return (



//         <Link to={`/Sub/${subcategory_Name}`}>
//             <div className="space-y-1 py-4 px-2 shadow-lg bottom-5">
//                 <div className="relative">
//                     <img className="rounded w-full h-[40vh]" src={image} alt="" />
//                     <span className="absolute top-1 right-2 text-red-500 bg-slate-50 px-2 rounded-md">{_id}</span>
//                 </div>
//                 <div className="pl-2 pt-1 text-left  rounded-md space-y-2">
//                     <button className="text-red-600">{subcategory_Name}</button>
//                     <p className="text-sm">{short_description}</p>

//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default SubCategoriesCard;


import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SubCategoriesCard = ({ singleSubCategory }) => {
    const { _id, image, subcategory_Name, short_description } = singleSubCategory;



    return (
        <Fade direction="right" delay={0.2}>
            <Link to={{ pathname: `/Sub/${subcategory_Name}`, state: { subCategoryData: singleSubCategory } }}>
                <div className="space-y-1 py-4 px-2 shadow-lg bottom-5">
                    <div className="relative">
                        <img className="rounded w-full h-[40vh]" src={image} alt="" />
                    </div>
                    <div className="pl-2 pt-1 text-left  rounded-md space-y-2">
                        <button className="text-red-600">{subcategory_Name}</button>
                        <p className="text-xs md:text-sm">{short_description}</p>
                    </div>
                </div>
            </Link>
        </Fade>
    );
};

export default SubCategoriesCard;
