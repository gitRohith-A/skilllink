'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export interface FormDataState {
  name: string;
  slug: string;
  icon: File | null;
  metaTitle: string;
  metaDescription: string;
}

function CreateCategory() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    slug: '',
    icon: null,
    metaTitle: '',
    metaDescription: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
    const { name, value } = e.target;
    let slugValue = value.toLowerCase().replace(/\s+/g, '-'); 
    slugValue = slugValue.replace(/[^a-zA-Z0-9-_]/g, '-');
    
    setFormData({
      ...formData,
      [name]: value,
      slug: slugValue
    });
  };
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        icon: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.slug || !formData.icon) {
      alert('Name, Slug, and Icon are required fields.');
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('slug', formData.slug);
      if (formData.icon) {
        formDataToSend.append('icon', formData.icon);
      }
      formDataToSend.append('metaTitle', formData.metaTitle);
      formDataToSend.append('metaDescription', formData.metaDescription);

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category`, {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Failed to create category');
      }

      setFormData({
        name: '',
        slug: '',
        icon: null,
        metaTitle: '',
        metaDescription: ''
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      router.push('/category')
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <head>
        <title>Create Category - {formData.metaTitle || formData.name}</title>
        <meta name="description" content={formData.metaDescription || `Create a new category with the name ${formData.name} and slug ${formData.slug}`} />
      </head>
      <h2 className="text-2xl font-bold mb-4">Create Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="icon" className="block text-sm font-medium text-gray-700">Icon</label>
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
        <button type="submit" disabled={loading} className={`${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'} text-white px-4 py-2 rounded-md`}>
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default CreateCategory;
