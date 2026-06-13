import React from 'react';

const LatestProductCard = ({ product }) => {
    const {
        title,
        image,
        category,
        location,
        price_min,
        price_max,
        condition,
    } = product;

    return (
        <div className="card bg-base-100 shadow-lg border border-gray-200 overflow-hidden">
            <figure className="h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </figure>

            <div className="card-body">
                <div className="flex justify-between items-center">
                    <span className="badge badge-primary">
                        {category}
                    </span>

                    <span className="badge badge-outline">
                        {condition}
                    </span>
                </div>

                <h2 className="card-title text-xl">
                    {title}
                </h2>

                <p className="text-gray-500 text-sm">
                    📍 {location}
                </p>

                <p className="font-bold text-lg text-green-600">
                    ৳ {price_min.toLocaleString()} - ৳ {price_max.toLocaleString()}
                </p>

                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestProductCard;