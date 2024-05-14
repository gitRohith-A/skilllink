'use client'

import React, { useEffect, useState } from 'react';
import { UserType } from '../dashboard/profile/Profile';
import { Category } from '@/app/admin/category/page';
import { ObjectId } from 'mongoose';

interface Post {
    description: string;
    priceDescription: string;
    price: string;
    duration: string;
    category: string;
    discountPrice: string;
    image: File | null;
    rating: string;
    points: string[];
}

const Page: React.FC<UserType> = ({ params }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [formData, setFormData] = useState<Post>({
        description: '',
        category: '',
        price: '',
        priceDescription: '',
        discountPrice: '',
        duration: '',
        image: null,
        rating: '',
        points: ['', '', ''],
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category`);
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data.categories);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name.startsWith('point')) {
            const index = parseInt(name.replace('point', ''), 10) - 1;
            const newPoints = [...formData.points];
            newPoints[index] = value;

            setFormData({
                ...formData,
                points: newPoints,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    console.log(formData.category)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setFormData({
                ...formData,
                image: file,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { description, price, discountPrice, image, rating, points, priceDescription, duration, category } = formData;

        if (!description || !price || !discountPrice || !image || !rating || points.some(point => !point.trim())) {
            alert('Please fill in all fields');
            return;
        }

        setLoading(true)
        const formDataToSend = new FormData();
        formDataToSend.append('user_id', params.id);
        formDataToSend.append('category', category);
        formDataToSend.append('description', description);
        formDataToSend.append('price', price);
        formDataToSend.append('discountPrice', discountPrice);
        formDataToSend.append('priceDescription', priceDescription);
        formDataToSend.append('duration', duration);
        formDataToSend.append('rating', rating);
        formDataToSend.append('points', JSON.stringify(points));
        formDataToSend.append('image', image);
        console.log(category)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/api/posts`, {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                setFormData({
                    description: '',
                    price: '',
                    duration: '',
                    category: '',
                    priceDescription: '',
                    discountPrice: '',
                    image: null,
                    rating: '',
                    points: ['', '', ''],
                });
                
                window.location.href = '/enterprise/post-list'
                setLoading(false);
            } else {
                console.error('Error:', response.statusText);
                alert('Failed to submit the form. Please try again later.');
                setLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred. Please try again later.');
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="category" className="block mb-1">Select Category:</label>
                    <select
                        id="category"
                        name="category"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={formData.category}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Select Category</option>
                        {categories.map(ele => (
                            <option value={ele._id}>{ele.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="description" className="block mb-1">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block mb-1">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="discountPrice" className="block mb-1">Discount Price:</label>
                    <input
                        type="text"
                        id="discountPrice"
                        name="discountPrice"
                        value={formData.discountPrice}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="priceDescription" className="block mb-1">Price Description:</label>
                    <input
                        type="text"
                        id="priceDescription"
                        name="priceDescription"
                        value={formData.priceDescription}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="duration" className="block mb-1">Duration:</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="images" className="block mb-1">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*" // Specify to accept only image files
                        onChange={handleFileChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                    {formData.image && (
                        <div className="mt-2">
                            <img
                                src={URL.createObjectURL(formData.image)}
                                alt="Selected Image"
                                width="100"
                                height="100"
                                className="rounded-md"
                            />
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="rating" className="block mb-1">Rating:</label>
                    <input
                        type="text"
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                {[1, 2, 3].map((index) => (
                    <div key={index}>
                        <label htmlFor={`point${index}`} className="block mb-1">{`Point ${index}:`}</label>
                        <input
                            type="text"
                            id={`point${index}`}
                            name={`point${index}`}
                            value={formData.points[index - 1]}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Page;
