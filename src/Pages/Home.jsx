import { NavLink } from 'react-router';
import 'swiper/css';
import SwiperSlider from '../Components/Carosel/SwiperSlider';
const Home = () => {
    return (

        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Pay Bills
                        <span className="dark:text-[#E93F56] px-2">At</span>ease
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Billing and payment done easy with us.
                        <br className="hidden md:inline lg:hidden" />Secure, fast, and made for people who don’t have time for nonsense.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <NavLink to='/bills' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#E93F56] dark:text-gray-50">My Bills</NavLink>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <SwiperSlider></SwiperSlider>
                </div>

            </div>
        </section>
    );
};

export default Home;