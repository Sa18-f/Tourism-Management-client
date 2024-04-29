
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";
import { Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <div className="lg:my-5">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='my-10'>
                        <div className='relative'>
                            <img className="w-full lg:h-[580px] rounded-lg" src="https://i.ibb.co/zG6cfY0/istockphoto-1406270929-612x612.jpg" alt="" />
                        </div>
                        <div className='absolute text-center lg:top-[200px] top-[150px] lg:right-[80px] lg:w-[1000px] mx-auto'>
                            <h1 className='lg:text-6xl text-2xl font-bold text-orange-400'>Explore Your World!!</h1>
                            <p className='lg:my-6 my-2 text-sm text-white lg:text-lg'>Your Gateway to Global Exploration: Simplify your travel planning and uncover hidden gems worldwide with <span className="text-red-400 font-bold">JourneyMingle</span>. Start your journey today!</p>
                            <button className='rounded-[30px] bg-green-400 font-bold py-3 px-5 lg:mt-4 text-xl'>Explore Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='my-10'>
                        <div className='relative'>
                            <img className="w-full lg:h-[580px] rounded-lg" src="https://i.ibb.co/Y3PrWKG/ross-parmly-rf6yw-HVkrl-Y-unsplash.jpg" alt="" />
                        </div>
                        <div className='absolute text-center lg:top-[200px] top-[150px] lg:right-[80px] lg:w-[1000px] mx-auto'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>Discover, Experience, Thrive!!</h1>
                            <p className='lg:my-6 my-2 text-sm lg:text-lg'>Your Gateway to Global Exploration: Simplify your travel planning and uncover hidden gems worldwide with <span className="text-red-400 font-bold">JourneyMingle</span>. Start your journey today!</p>
                            <button className='rounded-[30px] bg-green-400 font-bold py-3 px-5 lg:mt-4 text-xl'>Explore Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='my-10'>
                        <div className='relative'>
                            <img className="w-full lg:h-[580px] rounded-lg" src="https://i.ibb.co/W3BJ3V4/sorasak-UIN-p-Ff-J7c-unsplash.jpg"
                                alt="" />
                        </div>
                        <div className='absolute text-center lg:top-[200px] top-[150px] lg:right-[80px] lg:w-[1000px] mx-auto'>
                            <h1 className='lg:text-6xl text-2xl font-bold text-white'>Unlock Your Wanderlust!!</h1>
                            <p className='lg:my-6 my-2 text-sm text-white lg:text-lg'>Your Gateway to Global Exploration: Simplify your travel planning and uncover hidden gems worldwide with <span className="text-red-400 font-bold">JourneyMingle</span>. Start your journey today!</p>
                            <button className='rounded-[30px] bg-green-400 font-bold py-3 px-5 lg:mt-4 text-xl'>Explore Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;