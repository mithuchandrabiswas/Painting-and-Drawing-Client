
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContextProvider";
import Swal from 'sweetalert2';

const AddCraftItem = () => {
    const { user } = useContext(AuthContext)
    const [customizationValue, setCustomizationValue] = useState(null);
    const [subCategoryValue, setSubCategoryValue] = useState(null);
    const [stockStatusValue, setStockStatusValue] = useState(null);

    const handleAddCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const craftName = form.craftName.value;
        const subCategory = subCategoryValue;
        const shortDescription = form.shortDescription.value;
        const customization = customizationValue;
        const price = parseInt(form.price.value);
        const rating = parseInt(form.rating.value);
        const processingTime = parseInt(form.processingTime.value);
        const stockStatus = stockStatusValue;
        const email = form.email.value;
        const userName = form.user_name.value;

        const newCraftData = { image, craftName, subCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName }
        console.log(newCraftData);

        // Send CraftData to the server
        fetch('https://painting-and-drawing-server.vercel.app/addcrafts', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newCraftData),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    title: 'Suceess',
                    text: 'Crafts added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                  form.reset();
            }
        })
    }


    // OnChange Function
    const customizationChange = (e) => {
        const customizationValue = e.target.value;
        console.log(customizationValue);
        setCustomizationValue(customizationValue);
    }

    const subCategoryChange = (e) => {
        const subCategory = e.target.value;
        console.log(subCategory);
        setSubCategoryValue(subCategory)
    }
    const stockStatusChange = (e) => {
        const stockStatus = e.target.value;
        console.log(stockStatus);
        setStockStatusValue(stockStatus);
    }

    return (
        <div className="bg-green-50 my-4 p-1 rounded-md">
            <div className='py-2 md:py-4'>
                <h1 className='text-center text-lg md:text-2xl font-bold text-[#101010]'>Craft Items Section</h1>
                <p></p>
            </div>
            <div className="card shrink-0 my-2 md:my-5 shadow-2xl bg-[#71707080]">
                <form onSubmit={handleAddCraft} className="card-body p-4">
                    {/* row-1 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Craft Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Image url..." className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Craft Name</span>
                            </label>
                            <input type="text" name="craftName" placeholder="Type your full name" className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <select onChange={subCategoryChange} name="sub_category" id="" className="px-2 py-1 rounded-md text-xs">
                                <option value="">Select your sub-category</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Type your full name" className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <textarea name="shortDescription" rows={2} cols={4} className="p-2 rounded-md placeholder:text-xs" placeholder="Short description..."></textarea>
                        </div>
                    </div>

                    {/* row-4 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="Rating please..." className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <select onChange={customizationChange} name="" id="" className="px-2 py-1 rounded-md text-xs">
                                <option value="">Select your customization option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>

                    {/* row-5 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Processing_time</span>
                            </label>
                            <input type="number" name="processingTime" placeholder="Processing-time.." className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <select onChange={stockStatusChange} name="" id="" className="px-2 py-1 rounded-md text-xs">
                                <option value="">Stock Status</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                    </div>

                    {/* row-6 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} className="input input-sm input-bordered text-xs" disabled />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="user_name" defaultValue={user.displayName} className="input input-sm input-bordered text-xs" disabled />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-sm btn-primary">Add Craft</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;