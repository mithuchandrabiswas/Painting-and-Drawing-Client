import { useContext } from "react";
import { AuthContext } from "../provider/AuthContextProvider";

const AddCraftItem = () => {
    const {user} = useContext(AuthContext)

    const handleAddCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const userName = form.user_name.value;
        // const SubCategory = form.sub_category.value;
        console.log(`Sub Category is ${email} ${userName}`);
    }
    return (
        <div>
            <h1>Add a Craft</h1>
            <div className="card shrink-0 my-2 md:my-5 shadow-2xl bg-[#71707080]">
                <form onSubmit={handleAddCraft} className="card-body p-4">
                    {/* row-1 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Craft Image</span>
                            </label>
                            <input type="text" placeholder="Image url..." className="input input-sm input-bordered" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Craft Name</span>
                            </label>
                            <input type="text" placeholder="Type your full name" className="input input-sm input-bordered" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            {/* <input type="text" placeholder="dropdown..." className="input input-sm input-bordered" /> */}
                            <select name="sub_category" id="" className="px-2 py-1 rounded-md">
                                <option value="">Select your sub-category</option>
                                <option value="">Wooden Furniture & Sculptures</option>
                                <option value="">Wooden Home Decor</option>
                                <option value="">Wooden Utensils and Kitchenware</option>
                                <option value="">Jute Home Decor</option>
                                <option value="">Jute Kitchenware & utensils</option>
                                <option value="">Jute and wooden jewellery</option>
                            </select>
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Type your full name" className="input input-sm input-bordered" />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <textarea rows={4} cols={4} placeholder="Short description..."></textarea>
                        </div>
                    </div>

                    {/* row-4 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating please..." className="input input-sm input-bordered" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <select name="" id="" className="px-2 py-1 rounded-md">
                                <option value="">Select your customization option</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                    </div>

                    {/* row-5 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Processing_time</span>
                            </label>
                            <input type="text" placeholder="Processing-time.." className="input input-sm input-bordered" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <select name="" id="" className="px-2 py-1 rounded-md">
                                <option value="">Stock Status</option>
                                <option value="">In stock</option>
                                <option value="">Made to Order</option>
                            </select>
                        </div>
                    </div>

                    {/* row-6 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} className="input input-sm input-bordered" disabled/>
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="user_name" defaultValue={user.displayName} className="input input-sm input-bordered" disabled />
                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Craft</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;