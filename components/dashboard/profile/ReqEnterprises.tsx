'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/others/loading';
import { MultiSelect } from "react-multi-select-component";
import { fetchCategory } from '@/Functions/fetchCategory';

interface InputField {
  name: string;
  label: string;
  type: string;
  options?: { value: string; label: string }[];
  textarea?: boolean;
}

function ReqEnterprises({ session }: { session: any }) {
  const [formData, setFormData] = useState<{ [key: string]: string | File }>({});
  const [loading, setLoading] = useState<boolean>(true)
  const [category, setCategory] = useState<Object>({})
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const router = useRouter();

  const inputFields: InputField[] = [
    { name: 'enterpriseName', label: 'Enterprise Name', type: 'text' },
    { name: 'slug', label: 'Slug', type: 'text' },
    { name: 'phoneNo', label: 'Phone No', type: 'tel' },
    { name: 'gstNumber', label: 'GST Number', type: 'text' },
    { name: 'locationLink', label: 'Location Link', type: 'text' },
    { name: 'emailAddress', label: 'Email Address', type: 'email' },
    { name: 'categories', label: 'Categories', type: 'select' },
    { name: 'websiteURL', label: 'Website URL', type: 'url' },
    { name: 'contactPersonName', label: 'Contact Person Name', type: 'text' },
    { name: 'industryType', label: 'Industry Type', type: 'text' },
    { name: 'numberOfEmployees', label: 'Number of Employees', type: 'number' },
    { name: 'yearEstablished', label: 'Year Established', type: 'number' },
    { name: 'address', label: 'Address', type: 'text', textarea: true },
    { name: 'generalInfo', label: 'General Information', type: 'text', textarea: true },
    { name: 'additionalNotes', label: 'Additional Notes', type: 'text', textarea: true },
    { name: 'icon', label: 'Icon', type: 'file' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let newValue: string | File | undefined;

    if (e.target.type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      newValue = files ? files[0] : undefined;
    } else {
      newValue = value;
    }

    const filteredFormData = Object.entries(formData)
      .filter(([key, value]) => value !== undefined)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    setFormData({ ...filteredFormData, [name]: newValue });
  };

  useEffect(() => {
    fetchCategory()
      .then(data => {
        setCategory(data);
        inputFields.find(field => field.name === 'categories')!.options = data.map((category: any) => ({
          value: category._id,
          label: category.name,
        }));
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      })
      .finally(() => setLoading(false));
  }, []);


  const handleMultiSelectChange = (selectedItems: any[]) => {
    setSelectedCategories(selectedItems);
    setFormData({ ...formData, categories: selectedItems.map(item => item.value).join(',') });
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'categories' && typeof value === 'string') {
          const categoriesArray = value.split(',');
          categoriesArray.forEach((category, index) => {
            formDataToSend.append(`categories[${index}]`, category);
          });
        } else {
          formDataToSend.append(key, value);
        }
      });

      formDataToSend.append('user_id', session.user.id.toString());
      formDataToSend.append('approved', 'false');
      formDataToSend.append('adminnote', '');
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        alert('Failed to submit data');
      }

      const responseData = await response.json();

      router.push('/user/profile')

      setFormData({});
    } catch (error) {
      setLoading(false)
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h2 className='text-2xl font-bold mx-24 my-4'>Register as Enterprises</h2>
      {loading ? <Loading /> :
        <div className="mx-24 mb-24">
          <div className="grid grid-cols-2 gap-4 w-100">
            {inputFields.map((field, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={field.name} className="block text-gray-700">{field.label}</label>
                {field.type === 'select' ? (
                  field.name === 'categories' ? (
                    <MultiSelect
                      options={[category].map((category: any) => ({
                        value: category._id,
                        label: category.name,
                      }))}
                      value={selectedCategories}
                      onChange={handleMultiSelectChange}
                      labelledBy={"Select"}
                    />
                  ) : (
                    <select id={field.name} name={field.name} className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={handleChange}>
                      {field.options && field.options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  )
                ) : field.textarea ? (
                  <textarea id={field.name} name={field.name} rows={4} className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={handleChange}></textarea>
                ) : field.type === 'file' ? (
                  <input type={field.type} id={field.name} name={field.name} className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                  file:bg-gray-50 file:border-0
                  file:me-4
                  file:py-3 file:px-4
                  dark:file:bg-neutral-700 dark:file:text-neutral-400" onChange={handleChange} />
                ) : (
                  <input type={field.type} id={field.name} name={field.name} className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={handleChange} />
                )}
              </div>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
            Submit
          </button>
        </div>}
    </div>

  );
}

export default ReqEnterprises
