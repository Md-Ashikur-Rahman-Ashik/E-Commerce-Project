"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineMessage, MdOutlineVerifiedUser } from 'react-icons/md';
import { RiSailboatFill } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';

interface Product {
    name: string;
    stock: string;
    ratings: number;
    reviews: number;
    sold: number;
    priceTiers: { range: string; price: JSX.Element }[];
    type: string;
    material: string;
    design: string;
    customization: string;
    protection: string;
    warranty: string;
    supplier: { name: string; location: string };
    images: string[];
}

const ProductComponent: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const product: Product = {
        name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
        stock: "In Stock",
        ratings: 9.3,
        reviews: 32,
        sold: 154,
        priceTiers: [
            { range: '50-100 pcs', price: <p className='text-[#FA3434]'>$98.00</p> },
            { range: '100-700 pcs', price: <p>$90.00</p> },
            { range: '700+ pcs', price: <p>$78.00</p> },
        ],
        type: 'Classic shoes',
        material: 'Plastic material',
        design: 'Modern nice',
        customization: 'Customized logo and design custom packages',
        protection: 'Refund Policy',
        warranty: '2 years full warranty',
        supplier: { name: 'Guanjoi Trading LLC', location: 'Germany, Berlin' },
        images: [
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
        ],
    };

    return (
        <div className="container mx-auto mt-5">
            <div className="grid bg-white border-gray-200 p-4 border-2 rounded-lg grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left section: Image */}
                <div className="space-y-4">
                    <Image width={380} height={380} src={product.images[selectedImage]} alt="Product" className="object-cover mx-auto border-2 border-gray-200 p-2 rounded-lg" />
                    <div className="grid grid-cols-6 gap-2">
                        {product.images.map((img, idx) => (
                            <Image
                                width={1000}
                                height={1000}
                                key={idx}
                                src={img}
                                alt={`Product thumbnail ${idx + 1}`}
                                className={`cursor-pointehttps://picsum.photos/380] hover:opacity-80 ${selectedImage === idx ? 'border-2 rounded-lg border-gray-600' : 'rounded-lg'}`}
                                onClick={() => setSelectedImage(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right section: Product Details */}
                <div className="space-y-4 flex lg:flex-row flex-col lg:gap-8">
                    <div>
                        <p className='text-green-500 flex items-center'><TiTick />{product.stock}</p>
                        <h1 className="text-xl font-semibold">{product.name}</h1>
                        <div className="flex items-center space-x-2">
                            <span className="text-[#FF9017] text-lg">★★★★★ {product.ratings}</span>
                            <span className="text-gray-600 flex items-center gap-1"><MdOutlineMessage /> {product.reviews} reviews</span>
                            <span className="text-gray-600 flex items-center"><RiSailboatFill /> {product.sold} sold</span>
                        </div>

                        <div className="space-y-2">
                            <div className='flex bg-[#FFF0DF] justify-between p-2 rounded'>
                                {product.priceTiers.map((tier, index) => (
                                    <div key={index} className="flex flex-col-reverse">
                                        <span>{tier.range}</span>
                                        <span className="font-semibold">{tier.price}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex border-b-2 border-gray-200 pb-2 gap-20 items-center'><span className="text-gray-500">Price:</span> <span className="text-gray-600">Negotiable</span></div>
                        </div>

                        <div className="flex gap-20 mt-2 items-center">
                            <div className="text-gray-500">Type:</div>
                            <span className="text-gray-600">{product.type}</span>
                        </div>

                        <div className="flex gap-14 mt-2 items-center">
                            <div className="text-gray-500">Material:</div>
                            <span className="text-gray-600">{product.material}</span>
                        </div>

                        <div className="flex pb-2 border-b-2 border-gray-200 gap-16 mt-2 items-center">
                            <div className="text-gray-500">Design:</div>
                            <span className="text-gray-600">{product.design}</span>
                        </div>

                        <div className="flex gap-4 mt-2 items-center">
                            <div className="text-gray-500">Customization:</div>
                            <span className="text-gray-600">{product.customization}</span>
                        </div>

                        <div className="flex gap-10 mt-2 items-center">
                            <div className="text-gray-500">Protection:</div>
                            <span className="text-gray-600">{product.protection}</span>
                        </div>

                        <div className="flex pb-2 border-b-2 border-gray-200 gap-12 mt-2 items-center">
                            <div className="text-gray-500">Warranty:</div>
                            <span className="text-gray-600">{product.warranty}</span>
                        </div>
                    </div>

                    <div className='lg:w-1/2 md:w-full'>
                        <div className='boder-gray-200 border-2 h-fit p-2 rounded-lg'>
                            <div className="flex flex-col">
                                <div className='flex gap-2 boder-gray-200 border-b-2 pb-2'>
                                    <p className='h-12 w-12 flex items-center justify-center bg-[#C6F3F1] text-[28px] text-[#4CA7A799] rounded-lg font-medium'>R</p>
                                    <div>
                                        <div className="font-semibold">Supplier</div>
                                        <span>{product.supplier.name}</span>
                                    </div>
                                </div>
                                <span className='mt-2 flex items-center gap-2 text-gray-500'> <Image
                                    src="/images/Flag.jpg"
                                    alt="Flag"
                                    className="h-[15px]"
                                    height={10}
                                    width={20}
                                ></Image>{product.supplier.location}</span>
                                <span className='mt-2 text-gray-500 flex items-center gap-2'><MdOutlineVerifiedUser /> Verified Seller</span>
                                <span className='mt-2 text-gray-500 flex items-center gap-2'><TbWorld /> Worldwide Shipping</span>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <button className="bg-blue-500 text-white px-4 py-1 font-semibold rounded">Send inquiry</button>
                                <button className="border-2 border-gray-200 text-[#0D6EFD] font-medium px-4 py-1 rounded">{"Seller's profile"}</button>
                            </div>
                        </div>
                        <p className='flex gap-2 justify-center mt-10 text-[#0D6EFD] items-center font-medium'><FaRegHeart />Save for later</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;
