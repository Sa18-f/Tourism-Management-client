
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="lg:mt-10 mt-5 lg:mb-20 flex flex-col lg:flex-row gap-5">
            <div className='flex flex-col justify-center'>
                <h1 className='lg:text-6xl text-3xl font-bold'>Explore Your World!!</h1>
                <p className='lg:my-6 my-2 text-[#333333] lg:text-lg'>Your Gateway to Global Exploration: Simplify your travel planning and uncover hidden gems worldwide with <span className="text-sky-600 font-bold">JourneyMingle</span>. Start your journey today!</p>
                <Link to="/allSpots">
                    <button className='rounded-[10px] bg-sky-600 py-3 px-5 lg:mt-4 lg:text-lg font-semibold text-sm text-white btn-outline'>Explore Now</button>
                </Link>
            </div>
            <div className="lg:w-[750px] w-full">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <img className="lg:h-[500px] rounded-lg" src="https://i.ibb.co/zG6cfY0/istockphoto-1406270929-612x612.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="lg:h-[500px] rounded-lg" src="https://i.ibb.co/TPmSr5t/christine-roy-ir5-MHI6r-Pg0-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="lg:h-[500px] rounded-lg" src="https://i.ibb.co/W3BJ3V4/sorasak-UIN-p-Ff-J7c-unsplash.jpg"
                            alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Header;