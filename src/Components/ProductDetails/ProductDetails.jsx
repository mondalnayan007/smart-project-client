import { use, useRef } from "react";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from '../../Context/AuthContext'

const ProductDetails = () => {
    const product = useLoaderData();
    const ref = useRef(null);
    const { user } = use(AuthContext);


    const handleBidModalOpen = () => {
        ref.current.showModal();

    }

    const handleBidSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const bid = e.target.bid.value;
        const id = product._id
        console.log(name,email,bid,id);


    }

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <span className="loading loading-spinner loading-lg text-purple-600">Loading details...</span>
            </div>
        );
    }

    // আপনার ডেটা স্ট্রাকচার অনুযায়ী Destructuring
    const {
        _id,
        title,
        price_min,
        price_max,
        category,
        created_at,
        image,
        status,
        location,
        condition,
        usage,
        description,
        seller_name,
        seller_image,
        seller_email,
        seller_contact
    } = product;

    // MongoDB ObjectId থেকে স্ট্রিং বের করার সেফ-গার্ড
    const productId = _id?.$oid || _id || "N/A";

    // ডেট ফরম্যাট (MM/DD/YYYY) করার জন্য
    const postDate = new Date(created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    return (
        <div>
            <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-sans antialiased text-gray-800">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* ================= LEFT COLUMN (Image & Description) ================= */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Product Image Box */}
                        <div className="bg-[#e2e2e2] rounded-xl overflow-hidden aspect-[4/3] flex justify-center items-center shadow-sm">
                            {image ? (
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="text-gray-400">No Image Available</div>
                            )}
                        </div>

                        {/* Product Description Box */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-[#1e293b] mb-4">Product Description</h3>

                            {/* Condition & Usage Info */}
                            <div className="flex justify-between border-b border-gray-100 pb-4 mb-4 text-sm">
                                <div>
                                    <span className="text-purple-600 font-semibold">Condition :</span>
                                    <span className="font-medium text-gray-700 ml-1">{condition}</span>
                                </div>
                                <div>
                                    <span className="text-purple-600 font-semibold">Usage Time :</span>
                                    <span className="font-medium text-gray-700 ml-1">{usage}</span>
                                </div>
                            </div>

                            {/* Description Text */}
                            <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* ================= RIGHT COLUMN (Product & Seller Info) ================= */}
                    <div className="lg:col-span-7 space-y-5">
                        {/* Top Section: Back Link, Title & Category */}
                        <div className="space-y-3">
                            <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#1e293b] hover:text-purple-600 transition gap-1">
                                <span>←</span> Back To Products
                            </Link>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                                {title}
                            </h1>
                            <span className="inline-block bg-[#f3e8ff] text-purple-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                {category}
                            </span>
                        </div>

                        {/* Price Card */}
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                            <div className="text-2xl md:text-3xl font-extrabold text-[#22c55e]">
                                ৳{price_min?.toLocaleString()} - {price_max?.toLocaleString()}
                            </div>
                            <p className="text-xs text-gray-400 mt-1 font-medium">Price starts from</p>
                        </div>

                        {/* Product Details Card */}
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 space-y-3">
                            <h3 className="text-lg font-bold text-[#1e293b]">Product Details</h3>
                            <div className="space-y-2 text-sm">
                                <p className="text-gray-600 font-medium">
                                    <span className="text-gray-900 font-bold">Product ID:</span> {productId}
                                </p>
                                <p className="text-gray-600 font-medium">
                                    <span className="text-gray-900 font-bold">Posted:</span> {postDate}
                                </p>
                            </div>
                        </div>

                        {/* Seller Information Card */}
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 space-y-4">
                            <h3 className="text-lg font-bold text-[#1e293b]">Seller Information</h3>

                            {/* Seller Avatar & Basic Info */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={seller_image || "https://via.placeholder.com/150"}
                                    alt={seller_name}
                                    className="w-12 h-12 rounded-full object-cover bg-gray-100"
                                />
                                <div>
                                    <h4 className="font-bold text-[#1e293b] text-base">{seller_name}</h4>
                                    <p className="text-xs text-gray-400 break-all">{seller_email}</p>
                                </div>
                            </div>

                            {/* Seller Meta Data */}
                            <div className="space-y-2 text-sm border-t border-gray-50 pt-3">
                                <p className="text-gray-600 font-medium">
                                    <span className="text-gray-900 font-bold">Location:</span> {location}
                                </p>
                                <p className="text-gray-600 font-medium">
                                    <span className="text-gray-900 font-bold">Contact:</span> {seller_contact}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-900 font-bold text-sm">Status:</span>
                                    <span className="bg-[#fef08a] text-[#a16207] text-xs font-bold px-2.5 py-0.5 rounded-full capitalize">
                                        {status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button onClick={handleBidModalOpen} className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold py-4 px-6 rounded-xl transition duration-200 shadow-md shadow-purple-100 text-center tracking-wide">
                            I Want Buy This Product
                        </button>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}

                        <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                 
                                    <form method="dialog" className="text-right">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="text-xl font-bold cursor-pointer">X</button>
                                    </form>
                               
                                <h3 className="font-bold text-lg text-center">Grab this huge offer</h3>

                                <form onSubmit={handleBidSubmit}>
                                    <fieldset className="fieldset">
                                        <label className="label">Name</label>
                                        <input type="text" className="input w-full" name="name" readOnly defaultValue={user.displayName} />

                                        <label className="label">Email</label>
                                        <input type="email" className="input w-full" name="email" readOnly defaultValue={user.email} />

                                        <label className="label">Your Bid</label>
                                        <input type="text" className="input w-full" name="bid" placeholder="Enter your bid" />

                                        <button className="btn btn-neutral mt-4">Place your Bid</button>
                                    </fieldset>
                                </form>

                               
                            </div>
                        </dialog>
                    </div>

                </div>
            </div>

            {/* bids collection for this product  */}
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;