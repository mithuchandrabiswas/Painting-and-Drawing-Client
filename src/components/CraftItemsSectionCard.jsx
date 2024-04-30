import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const CraftItemsSectionCard = ({ singleCraft }) => {
    const { _id, image, craftName, subCategory, price, rating, stockStatus } = singleCraft;
    // console.log(singleCraft);

    return (
        <Fade cascade damping={0.1} direction="left">
            <div className="shadow-sm space-y-1 py-4 px-2 border">
                <div className="relative">
                    <img className="rounded w-full h-[40vh]" src={image} alt="" />
                    <span className="absolute top-1 right-2 text-red-500 bg-slate-50 px-2 rounded-md text-xs">{stockStatus}</span>
                </div>
                <div className="pl-2 pt-1 text-left  rounded-md space-y-2">
                    <button className="text-red-600 text-xs lg:text-lg text-left">{subCategory}</button>
                    <h3 className="text-sm md:text-md font-bold">{craftName}</h3>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-1 text-xs text-gray-600">  <AiFillLike /> {rating}</p>
                        <p className="flex items-center gap-1 text-xs text-gray-600"><MdOutlinePriceChange />${price}</p>
                    </div>
                </div>
                <Link to={`/crafitemstdetails/${_id}`} className="btn btn-sm btn-secondary w-full">View Details</Link>
            </div>
        </Fade>
    );
};

export default CraftItemsSectionCard;