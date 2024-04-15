'use client'
import React, { useEffect, useState } from 'react';
import { FormDataState } from './create/page';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

interface Category {
  _id: string;
  name: string;
  slug: string;
  icon: string;
}

function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Category List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {categories.map(category => (
            <li key={category._id} className="border p-4 rounded-md w-full flex gap-4 justify-between items-center">
              <div className='flex'>
                <img src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${category.icon}`} alt="" width={50} height={50} />
                <div className='mx-4'>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-gray-600">Slug: {category.slug}</p>
                </div>
              </div>
              <Link href={`/admin/category/edit?id=${category._id}`}>
                <FaEdit className="text-green-500 cursor-pointer" size={30} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryList;
