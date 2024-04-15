'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

interface Category {
  _id: string;
  name: string;
  slug: string;
  icon: string | File;
  metaTitle: string;
  metaDescription: string;
}

interface EditCategoryProps {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const EditCategory: React.FC<EditCategoryProps> = ({ categories, setCategories }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [formData, setFormData] = useState<Category>({
    _id: '',
    name: '',
    slug: '',
    icon: '',
    metaTitle: '',
    metaDescription: ''
  });

  useEffect(() => {
    if (id) {
      fetchCategory(id);
    }
  }, [id]);

  const fetchCategory = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }
      const data = await response.json();
      setFormData(data.category);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let slugValue = value.toLowerCase().replace(/\s+/g, '-'); 
    slugValue = slugValue.replace(/[^a-zA-Z0-9-_]/g, '-');
    
    setFormData({
      ...formData,
      [name]: value,
      slug: slugValue
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('_id', formData._id);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('slug', formData.slug);
      formDataToSend.append('metaTitle', formData.metaTitle);
      formDataToSend.append('metaDescription', formData.metaDescription);
      
      if (typeof formData.icon === 'string') {
      } else {
        formDataToSend.append('icon', formData.icon);
      }
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category/${id}`, {
        method: 'PUT',
        body: formDataToSend
      });
  
      if (!response.ok) {
        throw new Error('Failed to update category');
      }
  
      const updatedCategories = categories.map(category =>
        category._id === id ? formData : category
      );
      setCategories(updatedCategories);
  
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        icon: e.target.files[0]
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="icon" className="block text-sm font-medium text-gray-700">Icon</label>
          <img src={typeof formData.icon === 'string' ? `${process.env.NEXT_PUBLIC_SERVER_URL}/${formData.icon}` : URL.createObjectURL(formData.icon)} alt="" />
          <input type="file" id="icon" name="icon" onChange={handleFileChange} className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
          <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700">Meta Title</label>
          <input type="text" id="metaTitle" name="metaTitle" value={formData.metaTitle} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">Meta Description</label>
          <textarea id="metaDescription" name="metaDescription" value={formData.metaDescription} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
      </form>
    </div>
  );
};

export default EditCategory;
