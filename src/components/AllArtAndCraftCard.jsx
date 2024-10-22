import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import AllArtAndCraftCardDetails from "../pages/AllArtAndCraftCardDetails";
import { AiFillLike } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";

const AllArtAndCraftCard = ({ singleCraft }) => {
    const { _id, image, craftName, subCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName } = singleCraft;
    // console.log(singleCraft);


    return (
        <div className="shadow-sm space-y-1 py-4 px-2 border">
            <div className="relative">
                <img className="rounded w-full h-[40vh]" src={image} alt="" />
                <span className="absolute top-1 right-2 text-red-500 bg-slate-50 px-2 rounded-md text-xs">{stockStatus}</span>
            </div>
            <div className="pl-2 pt-1 text-left  rounded-md space-y-2">
                <button className="text-red-600 text-xs lg:text-lg text-left">{subCategory}</button>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1 text-xs text-gray-600">  <AiFillLike /> {rating}</p>
                    <p className="flex items-center gap-1 text-xs text-gray-600"><MdOutlinePriceChange />${price}</p>
                </div>
            </div>
            <Link to={`/allartandcraftdetails/${_id}`} className="btn btn-sm btn-secondary w-full">View Details</Link>
        </div>
    );
};

export default AllArtAndCraftCard;