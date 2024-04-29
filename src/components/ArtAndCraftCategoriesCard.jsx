
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoIosTime } from "react-icons/io";

const ArtAndCraftCategoriesCard = ({ singleCategoryData }) => {
    const { _id, image, craftName, subCategory, shortDescription, price, rating, processingTime } = singleCategoryData;
    // console.log(singleCategoryData);


    return (
        <div className="shadow-sm space-y-1 py-4 px-2 border">
            <div className="relative">
                <img className="rounded w-full h-[40vh]" src={image} alt="" />
            </div>
            <div className="pl-2 pt-1 text-left  rounded-md space-y-2">
                <h3 className="text-sm md:text-md font-bold">{craftName}</h3>
                <button className="text-red-600 text-xs lg:text-lg text-left">{subCategory}</button>
                <p className="text-sm md:text-md">{shortDescription}</p>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1 text-xs text-gray-600">  <AiFillLike /> {rating}</p>
                    <p className="flex items-center gap-1 text-xs text-gray-600"><MdOutlinePriceChange />${price}</p>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <IoIosTime />
                    <p>{processingTime}min</p>
                </div>
            </div>
            <Link to={`/artAndCraftCategoriesCardDetails/${_id}`} className="btn btn-sm btn-secondary w-full">View Details</Link>
        </div>
    );
};

export default ArtAndCraftCategoriesCard;