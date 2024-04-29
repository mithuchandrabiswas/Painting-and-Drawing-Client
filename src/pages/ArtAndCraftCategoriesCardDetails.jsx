import { AiFillLike } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdEmail, MdOutlinePriceChange } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";



const ArtAndCraftCategoriesCardDetails = () => {
    const loadedData = useLoaderData();
    const { id } = useParams();

    // Find Single Data
    const singleData = loadedData.find(item => item._id == id);
    console.log(singleData);
    const { image, craftName, subCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName } = singleData;
    console.log(singleData);
    return (
        <div className="py-4 px-3 flex flex-col md:flex-row bg-red-50 rounded">
            <div className="relative md:w-1/2 mb-5 md:mb-0">
                <img className="rounded w-full h-full" src={image} alt="" />
                <span className="absolute top-0 right-2 text-red-600 text-xs rounded-md">{stockStatus}</span>
            </div>
            <div className="px-1 md:px-4 space-y-2 md:w-1/2">
                <span className="bg-blue-200 px-2 py-1 rounded-lg text-[#111] font-bold text-xs lg:text-lg text-left">{subCategory}</span>
                <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-y-2">
                    <div className="flex justify-between  gap-1">
                        <FaRegUserCircle />
                        <p className="flex items-center gap-1 text-xs text-gray-600">  {userName}</p>
                    </div>
                    <div className="flex justify-between gap-1">
                        <MdEmail />
                        <p className="flex items-center gap-1 text-xs text-gray-600">{email}</p>
                    </div>
                </div>
                <h3 className="text-sm md:text-md font-bold text-[#5a7f81]">{craftName}</h3>
                <h3 className="text-xs lg:text-base font-bold">{shortDescription}</h3>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1 text-xs text-gray-600">  <AiFillLike /> {rating}</p>
                    <p className="flex items-center gap-1 text-xs text-gray-600"><MdOutlinePriceChange />${price}</p>
                </div>
                <div className="flex justify-between  items-start md:items-center flex-col md:flex-row gap-y-1">
                    <div className="flex justify-between items-center gap-1">
                        <span className="text-xs lg:text-sm">Customization:</span>
                        <p className="text-orange-400 text-sm font-bold">{customization}</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <IoIosTime />
                        <p className="text-xs lg:text-sm">{processingTime}min</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtAndCraftCategoriesCardDetails;