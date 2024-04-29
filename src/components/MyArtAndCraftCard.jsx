import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdOutlinePriceChange } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";


const MyArtAndCraftCard = ({ singleCraft, crafts, setCrafts }) => {
    const { _id, image, craftName, subCategory,price, rating, stockStatus} = singleCraft;
    // console.log(singleCraft);

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
                            const remaining = crafts.filter(craft => craft._id !== _id);
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

            <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-1 h-10">
                <Link to={`/myartandcraftdetails/${_id}`}>
                    <button className="btn btn-xs btn-outline w-full text-xs h-full">View Details</button>
                </Link>
                <Link to={`/updatecraft/${_id}`}>
                    <button className="btn btn-xs btn-outline w-full">Update</button>
                </Link>

                <Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-outline w-full">Delete</button>
                </Link>
            </div>
        </div>
    );
};

export default MyArtAndCraftCard;