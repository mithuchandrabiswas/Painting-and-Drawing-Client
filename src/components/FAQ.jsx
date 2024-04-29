

const FAQ = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-2 my-4 border-t sm:border-t-0">
            <div className="w-full md:w-1/3 flex items-center justify-center">
                <img className="h-full" src="https://i.ibb.co/Fb9nrcS/andres-perez-se0-GXEsgt-Pk-unsplash.jpg" alt="" />
            </div>
            <div className="w-full md:w-2/3 space-y-2">
                <h1 className="text-sm md:text-xl font-bold">Frequently Asked Questions</h1>
                <hr className="w-10 border-4  border-orange-600" />
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        What materials do I need to start painting?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">We specialize in hotels, motels, luxury villas, and various other hospitality establishments.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        What's the difference between acrylic, oil, and watercolor paints?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">Slow-drying paints made with pigments suspended in oil, usually linseed oil. They offer rich colors and blending capabilities but require longer drying times and solvents for cleanup.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        How do I choose the right brush for my painting?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">The right brush depends on the type of painting you're doing and the effect you want to achieve:</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        Can I mix different types of paints together?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">Yes, you can mix different types of paints together, but it's important to consider their properties.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        How do I preserve and protect my finished artwork?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">If you're using acrylic or oil paints on canvas, you can protect your finished artwork with a varnish. Apply a varnish once the paint is completely dry to protect it from dust, UV rays, and moisture.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xs md:text-md font-medium">
                        Do you offer art classes or workshops?
                    </div>
                    <div className="collapse-content">
                        <p className="text-xs md:text-md">Yes, we offer various art classes and workshops for all skill levels. Whether you're a beginner looking to learn the basics or an experienced artist wanting to refine your techniques, we have classes tailored to your needs. Check our website or visit our store for upcoming classes and schedules.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;