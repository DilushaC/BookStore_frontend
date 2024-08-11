import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Subscription Section */}
                <div>
                    <div className="text-2xl font-bold">
                        <span className="text-black">BOOK</span>
                        <span className="text-green-500 ml-1">ARC</span>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold">Subscribe Now!</p>
                        <div className="mt-2 flex items-center">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="px-4 py-2 w-full rounded-l-full border border-gray-300"
                            />
                            <button className="bg-green-500 text-white px-4 py-2 rounded-r-full">
                                &#10140;
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="font-semibold">Contact Info</p>
                        <p className="mt-2 text-gray-600">
                            17 Princess Road, London, Greater London NW1 8JR, UK
                        </p>
                    </div>
                </div>

                {/* Popular Categories */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Graphic Novels & Comics</li>
                        <li>Religion & Spirituality</li>
                        <li>Arts & Photography</li>
                        <li>Arts & Photography</li>
                        <li>Educational & Textbooks</li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Customer Care</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>My Account</li>
                        <li>Discount</li>
                        <li>Returns</li>
                        <li>Orders History</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>

                {/* Quick Action */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Action</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Authors</li>
                        <li>Books Compare</li>
                        <li>All Category</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
