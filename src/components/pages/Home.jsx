import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard";
import Footer from "../Footer";
import { useEffect } from "react";
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { AiOutlineGlobal } from 'react-icons/ai';
import { RiSecurePaymentLine } from 'react-icons/ri';


const Home = () => {
    const companys = useLoaderData()
    console.log(companys);

    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <div className=" w-full bg-base-100 overflow-hidden">
            <div className="bg-base-100 text-base min-h-[300px]">
                {/* banner start */}
                <div className="w-full h-[900px] mx-auto bg-base-100 bg-[url('https://i.ibb.co/q7Qw6rQ/inspiration-asian-young-woman-s-portrait-dark-wall-neon-light-beautiful-female-model-with-headphones.jpg')] bg-cover">
                    <div className="pt-32 w-full h-full bg-[#FFFFFF33]">
                        <div className="mt-40 ml-20" data-aos="fade-right">
                            <h2 className="text-3xl text-white md:text-5xl font-light mb-2 ">Let&apos;s Enjoy With</h2>
                            <h1 className="text-4xl md:text-6xl font-bold text-orange-400">ELECTRO<span className="text-pink-600">MIND</span></h1>
                            <h4 className=" text-lg my-8 text-white">Up to <span className="text-4xl font-bold text-orange-400">%50</span> off, Only This Week Don&apos;t Miss !</h4>
                            <button className="bg-pink-600 text-[#fff] hover:text-pink-600 transition-all border-[1px] border-pink-600 hover:bg-transparent py-3 px-5 mt-3 rounded-full">Purches Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/*brand section start*/}
            <div className="mt-16" data-aos="zoom-out">
                <h1 className="text-5xl font-bold text-center">Our Affiliated Businesses</h1>
                <p className="text-center my-10">Click on the company logos to  view their merchandise.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 w-11/12 mx-auto mt-10">
                    {companys.slice(0, 6).map(company => <BrandCard key={company._id} company={company} />)}
                </div>

            </div>
            {/* brand section end */}

            {/* upcoming offer section start */}

            <div className="relative overflow-hidden bg-base-100 mt-44 mx-5" data-aos="zoom-in"   >
                {/* <h1 className="text-3xl text-center">  features product</h1> */}
                <div className="mb-10">
                </div>
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">See our exclusive collections.</h1>
                            <p className="mt-10 text-xl ">Purchase products at the best prices from the most reputable brands!</p>
                        </div>
                        <div>
                            <div className="mt-10">
                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img src="https://i.ibb.co/HxLFNCv/modern-blonde-woman-listening-music-headphones.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/4ZHFcD3/3794066.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/Xz9wkbF/elegant-smartphone-composition.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/5GgjfbX/Screenshot-2023-10-25-223949.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/JymbBWk/Screenshot-2023-10-25-223317.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/41xkYxn/Screenshot-2023-10-25-224307.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/txDpBkK/young-hipster-woman-pink-coat-jeans-street-with-backpack-coffee-listening-music-headphones.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="inline-block rounded-md border border-transparent bg-pink-600 px-8 py-3 text-center font-medium text-white hover:bg-pink-700">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* upcoming offer section end */}

            {/*  */}

            <div className="max-w-6xl mx-auto font-[sans-serif] bg-base-100 my-40" data-aos="zoom-out">
                <h2 className="md:text-5xl text-2xl font-extrabold text-center mb-16">Explore Our Unique Features</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                    <div className="p-4 text-center">
                        <TbTruckDelivery className="text-4xl mx-auto mb-3"></TbTruckDelivery>
                        <h3 className="text-xl font-semibold mb-2">Fast Free Shipping</h3>
                        <p className="text-sm">Around the world</p>
                    </div>
                    <div className="p-4 text-center">
                        <MdOutlineVerifiedUser className="text-4xl mx-auto mb-3"></MdOutlineVerifiedUser>
                        <h3 className="text-xl font-semibold mb-2">Authentic</h3>
                        <p className=" text-sm">Before we sell food and provide it to the consumer, we make sure it is legitimate.</p>
                    </div>
                    <div className="p-4 text-center">
                        <BiSupport className="text-4xl mx-auto mb-3"></BiSupport>
                        <h3 className="text-xl font-semibold mb-2">24/7 Supports</h3>
                        <p className=" text-sm">Contact us 24 hours</p>
                    </div>
                    <div className="p-4 text-center">
                        <GiReceiveMoney className="text-4xl mx-auto mb-3"></GiReceiveMoney>
                        <h3 className="text-xl font-semibold mb-2">100% Money Back</h3>
                        <p className="text-gray-500 text-sm">Guarantee of money retun</p>
                    </div>
                    <div className="p-4 text-center">
                        <AiOutlineGlobal className="text-4xl mx-auto mb-3"></AiOutlineGlobal>
                        <h3 className="text-xl font-semibold mb-2">Worldwide Reach</h3>
                        <p className="text-gray-500 text-sm">Make more connections with our worldwide network.
</p>
                    </div>
                    <div className="p-4 text-center">
                        <RiSecurePaymentLine className="text-4xl mx-auto mb-3"></RiSecurePaymentLine>
                        <h3 className="text-xl font-semibold mb-2">100% Secure Payment</h3>
                        <p className="text-gray-500 text-sm">Your payment are safe with us.</p>
                    </div>
                </div>
            </div>

            {/*  */}

            {/* footer */} <Footer /> {/* footer */}
        </div>
    );
};

export default Home;