import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";

const Company = () => {

    const company = useLoaderData();
    

    useEffect(()=>{
        document.title = 'Brand'
    },[])

    return (
        <div className="" data-aos="zoom-out">
            {company.slice(0, 1).map(com => <div key={com._id} className="pt-40">
                <h1 className="text-3xl text-center font-bold mb-10">{com.companyName}</h1>
                <div className="w-[96%] mx-auto">
                    <div className="carousel h-96">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={com.banner_2} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={com.banner_1} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={com.banner_3} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}

            {/* product */}
            <h1 className="text-2xl text-center font-bold mt-20 mb-10">Available items</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4 mb-36 w-11/12 mx-auto">

                {company.slice(1, 1000).map(product => <div key={product._id} className="card hover:scale-105 transition-all shadow rounded-sm">
                    <figure><img className="h-[200px]" src={product.photoUrl} alt="#" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.productName}</h2>
                        <div className="">
                            <h3 className="font-semibold">Brand: <span className="font-light">{product.companyName}</span> </h3>
                            <h3 className="font-semibold">Category: <span className="font-light">{product.category}</span></h3>
                            <h3 className="font-semibold">Rating: <span className="font-light">{product.rating}</span></h3>
                            <h1 className="text-xl font-bold mb-3">Price: <span className="text-2xl"><sup className="font-light text-sm">$</sup>{product.price}</span></h1>
                        </div>
                        <div className="flex gap-2 items-center justify-end">
                            <Link to={`/item/${product._id}`}><button className="badge badge-outline font-bold p-2.5 hover:text-red-600">Details</button></Link>
                           <Link to={`/update/${product._id}`}><button className="badge badge-outline font-bold p-2.5 hover:text-red-600">Update</button></Link>
                        </div>
                    </div>
                </div>)}
            </div>
            <Footer />
        </div>

    )
};

export default Company;