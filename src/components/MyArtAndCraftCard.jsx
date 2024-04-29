import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
// import MyArtAndCraftCardDetails from "../pages/MyArtAndCraftCardDetails";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MyArtAndCraftCardDetails from "../pages/MyArtAndCraftCardDetails";


const MyArtAndCraftCard = ({ singleCraft, crafts, setCrafts }) => {
    const { _id, image, craftName, subCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName } = singleCraft;
    // console.log(singleCraft);

    // const [crafts,setCrafts] = useState([])

    // const handleAllViewDetails = (singleCraft) => {
    //     // console.log(singleCraft);
    // }

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirm');
                fetch(`https://painting-and-drawing-server.vercel.app/addcrafts/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your craft has been deleted.",
                                icon: "success"
                            })
                            const remaining = crafts.filter(craft => singleCraft._id !== _id);
                            setCrafts(remaining);

                        } else {
                            console.log("No documents matched the query. Deleted 0 documents.");
                        }
                    })
            }
        });
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
            
            <div className="flex justify-between">
                <Link to={`/myartandcraftdetails/${_id}`}>
                    <button className="btn btn-xs join-item">View Details</button>
                </Link>
                <Link to={`/updatecraft/${_id}`}>
                    <button className="btn btn-xs join-item">Update</button>
                </Link>

                <button onClick={() => handleDelete(_id)} className="btn btn-xs join-item">Delete</button>
            </div>
        </div>
    );
};

export default MyArtAndCraftCard;