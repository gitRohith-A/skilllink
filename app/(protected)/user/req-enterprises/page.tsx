import React from 'react';

interface InputField {
  label: string;
  type: string;
  options?: { value: string; label: string }[]; // Define options for select inputs
  textarea?: boolean;
}

function Page() {
  const inputFields: InputField[] = [
    { label: 'Enterprise name', type: 'text' },
    { label: 'Phone no', type: 'tel' },
    { label: 'GST number', type: 'text' },
    { label: 'Location link', type: 'text' },
    { label: 'Email address', type: 'email' },
    { label: 'Website URL', type: 'url' },
    { label: 'Contact person name', type: 'text' },
    { label: 'Industry type', type: 'text' },
    { label: 'Number of employees', type: 'number' },
    { label: 'Year established', type: 'number' },
    { label: 'Address', type: 'text', textarea: true },
    { label: 'Additional notes', type: 'text', textarea: true },
    {
      label: 'Select an option',
      type: 'select', 
      options: [
        { value: 'option1', label: 'Option 1' }, 
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
    },
  ];

  return (
    <div>
        <h2 className=' text-2xl font-bold mx-24 my-4'>Register as Enterprises</h2>
      <div className="mx-24 mb-24">
        <div className="grid grid-cols-2 gap-4 w-100">
          {inputFields.map((field, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={field.label} className="block text-gray-700">{field.label}</label>
              {field.type === 'select' ? (
                <select id={field.label} name={field.label} className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                  {field.options && field.options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              ) : field.textarea ? (
                <textarea id={field.label} name={field.label} rows={4} className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
              ) : (
                <input type={field.type} id={field.label} name={field.label} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
