import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";

const MyArtAndCraftCardDetails = () => {
    const allCraft = useLoaderData();
    const { id } = useParams();
    console.log(allCraft);
    const singleCraft = allCraft.find(item => item._id == id);
    const { _id, image, craftName, subCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName } = singleCraft;
    console.log(singleCraft);
    return (
        <div className="py-4 px-2 flex flex-col md:flex-row bg-red-50">
            {/* <Helmet>
                <title>HospitalityHub | Estate Details</title>
            </Helmet> */}
            <div className="relative md:w-1/2 mb-5 md:mb-0">
                <img className="rounded w-full h-full" src={image} alt=""/>
                <span className="absolute top-0 right-2 text-red-600">{stockStatus}</span>
            </div>
            <div className="px-1 md:px-4 space-y-2 md:w-1/2">
                <span className="bg-blue-200 px-2 py-1 rounded-lg text-[#111] font-bold">{subCategory}</span>
                <h3 className="text-base md:text-lg font-bold">{shortDescription}</h3>
                {/* <p className="text-xs md:text-sm text-[#1313138b]">{}</p> */}
                <div className="flex items-center gap-2">
                    <CiLocationOn className="text-red-400 font-bold text-lg"> </CiLocationOn>
                    <p className="flex items-center gap-2 text-xs text-gray-600">  {rating}</p>
                </div>
                <div className="flex flex-col justify-between md:flex-row">
                    <p className="text-orange-400 font-bold">{customization}</p>
                    <p className="text-sm text-red-600">{price}<span className="text-xs text-[#1313138b]">(Include all Texes & Fees)</span></p>
                </div>
            </div>

        </div>
    );
};

export default MyArtAndCraftCardDetails;