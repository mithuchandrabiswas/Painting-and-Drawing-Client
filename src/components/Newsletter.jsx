
const Newsletter = () => {
    return (
        <div className='flex justify-center items-center flex-col md:flex-row bg-[#4e87c0] p-2 md:p-6 rounded-md gap-5'>
            <div className='w-full md:w-1/3'>
                <img src="https://i.ibb.co/9NRGnqh/Newsletter-300x150.png" alt="" />
            </div>
            <div className='w-full md:w-2/3 space-y-2'>
                <h1 className='text-sm md:text-lg font-bold text-gray-800'>Subscribe to our Newsletters</h1>
                <p className='text-xs md:text-sm text-gray-600'>Want to get special offers before they run out? Subcribe to our email to get excusive discout offers.</p>
                <div className="md:join">
                    <input className="input input-xs md:input-sm input-bordered join-item" placeholder="Email" />
                    <button className="btn btn-xs md:btn-sm join-item rounded-r-full">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;