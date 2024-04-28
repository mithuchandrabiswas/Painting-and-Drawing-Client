import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import CraftItemsCardDetails from "../pages/CraftItemsCardDetails";

const CraftItemsSectionCard = ({ singleCraft }) => {
    const { _id, image, craftName, subCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName } = singleCraft;
    console.log(singleCraft);

    const handleAllViewDetails = (singleCraft) => {
        console.log(singleCraft);
    }
    return (
        <div className="shadow-sm space-y-1 py-4 px-2 border">
            <div className="relative">
                <img className="rounded w-full h-[40vh]" src={image} alt="" />
                <span className="absolute top-1 right-2 text-red-500 bg-slate-50 px-2 rounded-md">{stockStatus}</span>
            </div>
            <div className="pl-2 pt-1 text-left  rounded-md space-y-2">
                <button className="text-red-600">{subCategory}</button>
                <h3 className="text-sm md:text-lg font-bold">{craftName}</h3>
                <p className="flex items-center gap-1 text-xs text-gray-600"> <CiLocationOn className="text-red-400 text-lg md:text-base"> </CiLocationOn> {rating}</p>
                <p className="text-sm">{userName}</p>
                <p className="text-red-600 text-sm">{price} <span className="text-xs text-gray-300">(Include all)</span></p>
            </div>
            <Link to={`/crafitemstdetails/${_id}`} onClick={() => handleAllViewDetails(singleCraft)} CardDetails={<CraftItemsCardDetails singleCraft={singleCraft}></CraftItemsCardDetails>} className="btn btn-sm btn-secondary w-full">View Details</Link>
        </div>
    );
};

export default CraftItemsSectionCard;