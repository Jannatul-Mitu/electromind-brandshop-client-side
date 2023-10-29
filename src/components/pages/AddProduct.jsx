import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Footer from "../Footer";

const AddProduct = () => {
    const { nam } = useContext(AuthContext)
    console.log(nam);

    const handleAddFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const productName = form.productName.value;
        const companyName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const product = { photoUrl, price, productName, companyName, category, rating, description };

        const urlValuation = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

        if (!urlValuation.test(photoUrl)) {
            toast.error('Invalid Image URL')
            return
        }

        fetch('https://assaingment-server.vercel.app/product', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)

        }).then(res => res.json()).then(data => {

            if (data.insertedId) {
                Swal.fire('Item Added');
                form.reset();
            }
        });
    }

    useEffect(() => {
        document.title = 'Add Product'
    }, [])

    return (
        <div className="pt-36 text-center overflow-hidden" data-aos="zoom-out">
            <h1 className="text-5xl font-bold mb-20">Add Product</h1>
            <div className="w-11/12 mx-auto">
                <form className="font-[sans-serif] md:max-w-4xl mx-auto" onSubmit={handleAddFood}>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="relative flex items-center">
                            <input type="text" required name="photoUrl" placeholder="Product image URL"
                                className="px-2 py-3 w-full text-sm border-b-2 focus:border-pink-500 outline-none" />
                        </div>
                        <div className="relative flex items-center">
                            <input type="text" name="productName" required placeholder="Product name"
                                className="px-2 py-3 w-full text-sm border-b-2 focus:border-pink-500 outline-none" />
                        </div>
                        <div className="relative flex items-center">
                            <select id="cars" required name="brandName" className="px-2 py-3 w-full text-sm border-b-2 focus:border-pink-500 outline-none">
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
                            <select id="cars" name="category" required className="px-2 py-3 w-full text-sm border-b-2 focus:border-pink-500 outline-none">
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
                            <input type="text" required name="price" placeholder="Price"
                                className="px-2 py-3 w-full text-sm border-b-2 focus:border-pink-500 outline-none" />
                        </div>
                        <div className="relative flex items-center">
                            <input type="text" name="rating" placeholder="Rating"
                                className="px-2 py-3 w-full text-sm border-b-2 focus:border-pink-500 outline-none" />
                        </div>
                    </div>
                    <div className="relative mt-5 flex items-center">
                        <input type="text" required name="description" placeholder="Short description"
                            className="px-2 py-3 w-full text-sm border-b-2 focus:border-pink-500 outline-none" />
                    </div>
                    <button type="submit"
                        className="my-10 px-8 py-3 rounded text-sm font-semibold bg-pink-500 text-white hover:bg-pink-600">Add Item</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddProduct;