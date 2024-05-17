'use client'
import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";

function ItemsTable() {
    const [items, setItems] = useState([
        { name: "", percentage: "", quantity: "", price: "" },
    ]);

    const handleAddRow = () => {
        setItems((prevItems) => [...prevItems, { name: "", percentage: "", quantity: "", price: "" }]);
    };

    const handleRemoveRow = (index: any) => {
        if (index === 0) return;
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const handleInputChange = (index: any, field: any, value: any) => {
        const updatedItems: any = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };


    return (
        <div className="div">
            {items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 items-center bg-slate-50 w-full px-12 py-6 gap-2 rounded-bl-xl rounded-br-xl">
                    <div className="col-span-4">
                        <input
                            placeholder="Item Name"
                            value={item.name}
                            onChange={(e) => handleInputChange(index, "name", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            placeholder="18%"
                            value={item.percentage}
                            onChange={(e) => handleInputChange(index, "percentage", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <div className="col-span-1">
                        <input
                            placeholder="1"
                            value={item.quantity}
                            onChange={(e) => handleInputChange(index, "quantity", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            placeholder="₹1.00"
                            value={item.price}
                            onChange={(e) => handleInputChange(index, "price", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            placeholder="₹1.00"
                            value={item.price}
                            onChange={(e) => handleInputChange(index, "price", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <button className="col-span-1" onClick={() => handleRemoveRow(index)}>
                        <CiCircleRemove className="mx-auto text-red-600" size={25} />
                    </button>
                </div>
            ))}

            <button
                className="text-center my-6 bg-slate-50 w-full py-4 text-slate-600 text-sm font-normal font-['Segoe UI Emoji'] leading-[21px] border border-dashed border-slate-300 rounded-xl"
                onClick={handleAddRow}
            >
                <div className="flex items-center justify-center space-x-2">
                    <IoAddCircleOutline className="text-blue-600" size={25} />
                    <p>Add New Line</p>
                </div>
            </button>
        </div>
    );
}

export default ItemsTable;
