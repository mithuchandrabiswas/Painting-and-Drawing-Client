import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={500}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div style={{ backgroundImage: "url('https://i.ibb.co/nCRXBkF/pexels-vecislavas-popa-1571470.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 rounded-lg bg-no-repeat bg-cover bg-center'>
                    <h1 className='font-bold z-40 text-2xl text-white text-center' data-aos="fade-down">Hotel</h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg text-center' data-aos="fade-down"> Experience luxury and comfort at Grand City Hotel. Located in the heart of downtown.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: "url('https://i.ibb.co/2thZDZY/pexels-asad-photo-maldives-1450361.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 rounded-lg bg-no-repeat bg-cover bg-center'>
                    <h1 className='font-bold z-40 text-2xl text-white text-center' data-aos="fade-down">Resort</h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg text-center' data-aos="fade-down">Escape to Tropical Paradise Resort and indulge in luxury amidst lush tropical surroundings.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: "url('https://i.ibb.co/zPFzPf0/pexels-airam-datoon-9408443.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 rounded-lg bg-no-repeat bg-cover bg-center' data-aos="zoom-out-left">
                    <h1 className='font-bold z-40 text-2xl text-white text-center' data-aos="fade-down">Motel</h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg text-center' data-aos="fade-down">Conveniently located off the highway, Highway View Motel offers comfortable rooms for travelers. </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: "url('https://i.ibb.co/n0rpcgq/pexels-asad-photo-maldives-1320686.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 rounded-lg bg-no-repeat bg-cover bg-center'>
                    <h1 className='font-bold z-40 text-2xl text-white text-center' >Luxury Villa</h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg text-center' >Indulge in luxury at our lakeside villa. With expansive living spaces, a private pool, and lake views.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;