

const FAQ = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-2 my-4 border-t sm:border-t-0">
            <div className="w-full md:w-1/3 flex items-center justify-center"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <img className="h-full" src="https://dreamsestate.dreamstechnologies.com/html/assets/img/faq-img.jpg" alt="" />
            </div>
            <div className="w-full md:w-2/3 space-y-2"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <h1 className="text-sm md:text-xl font-bold">Frequently Asked Questions</h1>
                <hr className="w-10 border-4  border-orange-600" />
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        What types of properties do you specialize in?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">We specialize in hotels, motels, luxury villas, and various other hospitality establishments.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        How do you assist property owners in maximizing their returns?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">We offer tailored strategies for each property type, including strategic marketing, property management, and revenue optimization.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        What criteria do you consider when evaluating potential investment properties?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">Factors like location, market demand, property condition, and growth potential are key considerations for hotels, motels, luxury villas, and other properties.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        What sets your brokerage firm apart?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">Our expertise spans across different property types, with specialized teams for hotels, motels, luxury villas, and a proven track record of successful transactions.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        How can I list my property with your firm?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">You can list your hotel, motel, luxury villa, or other property by contacting us directly or filling out our online form.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        What financing options are available for purchasing hospitality properties?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">Financing options vary depending on the property type, including traditional mortgages for hotels, SBA loans for motels, and private investors for luxury villas. We provide tailored assistance based on your needs.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;