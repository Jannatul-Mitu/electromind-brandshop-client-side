import { useEffect } from 'react';
import Footer from '../Footer';

const About = () => {

    useEffect(() => {
        document.title = 'About'
    }, []);

    return (
        <div className='pt-20' data-aos="zoom-out">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-8/12 ">
                        <img className="w-full h-full" src="https://i.ibb.co/p3JwTcP/Screenshot-2023-10-25-231330.png" alt="A group of People" />
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">About Us</h1>
                        <p className="font-normal text-base leading-6">ElectroMind is your one-stop store for the most reputable brands in the world&apos;s cutting-edge technology and inventive gadgets. Bringing you the newest and best goods to improve your digital life is something we are enthusiastic about.
                            We take great care in selecting unique gadgets that combine creativity, practicality, and flair. We have everything from the newest smartphones to smart home appliances in our extensive selection of electronics and gadgets to suit every requirement.
                        </p>
                        <br />
                        <p>
                            We think technology ought to be approachable, entertaining, and empowering. Finding the ideal gadget for your lifestyle is simple with our user-friendly web platform.
                        </p>
                        <br />
                        <p>
                            Our dedication to client pleasure doesn&apos;t end at the moment of sale. We provide knowledgeable direction and assistance during your buying experience.

                        </p>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">Our Story</h1>
                        <p className="font-normal text-base leading-6 ">It has long been known that a reader&apos;s attention will be diverted from a page&apos;s layout by its readable content. The purpose of Lorem Ipsum.First and foremost, we have given God the assurance that the English Church will always be free, have all of its rights, and enjoy unassailable liberties. This is evident from our current charter, which we have guaranteed for ourselves and our heirs.
                        </p>
                        <br />
                        <p>
                            As we embarked on this journey, we faced challenges and hurdles, but our determination only grew stronger. We tirelessly scoured the globe for the finest flavors, the most iconic names, and the most sought-after products.
                        </p>
                        <br />
                        <p>
                            Our commitment was not just to provide products but to deliver an experience, one that delighted the taste buds, stirred memories, and made life a little more convenient. We worked tirelessly to ensure that you could access these global favorites at your fingertips, no matter where you were.
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Sophia</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Emma</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">William</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Henry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;