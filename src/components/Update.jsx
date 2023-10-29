import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";

const Update = () => {
    const previousData = useLoaderData();
    console.log(previousData);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const productName = form.productName.value;
        const companyName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedProduct = { photoUrl, price, productName, companyName, category, rating, description };

        fetch(`https://assaingment-server.vercel.app/update/${previousData._id}`, {

            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedProduct)

        }).then(res => res.json()).then(data => {

            if (data.modifiedCount > 0) {

                Swal.fire('Product Updated successfully');
            }
        })
    };

    return (
        <div className="pt-36 overflow-hidden text-center" data-aos="zoom-out">
            <h1 className="text-3xl font-bold mb-20">Update Product</h1>
            <div className="w-11/12 mx-auto">
                <form className="font-[sans-serif] md:max-w-4xl mx-auto" onSubmit={handleUpdate}>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="relative flex items-center">
                            <input type="text" required name="photoUrl" defaultValue={previousData?.photoUrl} placeholder="Product image URL"
                                className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                        </div>
                        <div className="relative flex items-center">
                            <input type="text" name="productName" required defaultValue={previousData?.productName} placeholder="Product name"
                                className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                        </div>
                        <div className="relative flex items-center">
                            <select id="#" required name="brandName" defaultValue={previousData?.companyName} className="px-2 py-3  w-full text-sm border-b-2 focus:border-[#007bff] outline-none">
                                <option value="brand-name">Brand Name</option>
                                <hr />
                                <option value="Samsung">Samsung</option>
                                <option value="Apple">Apple</option>
                                <option value="Nokia">Nokia</option>
                                <option value="Google">Google</option>
                                <option value="Sony">Sony</option>
                                <option value="Intel">Intel</option>
                            </select>
                        </div>
                        <div className="relative flex items-center">
                            <select id="cars" name="category" defaultValue={previousData?.category} required className="px-2 py-3  w-full text-sm border-b-2 focus:border-[#007bff] outline-none">
                                <option value="category">Category</option>
                                <hr />
                                <option value="mobile">Mobile</option>
                                <option value="laptop">Laptop</option>
                                <option value="headphone">Headphone</option>
                                <option value="watch">Watch</option>
                                <option value="camera">Camera</option>
                                <option value="LED">LED</option>
                                <option value="drone">Drone</option>
                                <option value="parts">Parts</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid mt-5 sm:grid-cols-2 gap-6">
                        <div className="relative flex items-center">
                            <input type="text" required name="price" defaultValue={previousData?.price} placeholder="Price"
                                className="px-2 py-3  w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                        </div>
                        <div className="relative flex items-center">
                            <input type="text" name="rating" defaultValue={previousData?.rating} placeholder="Rating"
                                className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                        </div>
                    </div>
                    <div className="relative mt-5 flex items-center">
                        <input type="text" required name="description" defaultValue={previousData?.description} placeholder="Short description"
                            className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                    </div>
                    <button type="submit"
                        className="mt-8 px-8 py-2.5 rounded text-sm font-semibold bg-[#007bff] text-white hover:bg-[#006bff]">Update</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Update;