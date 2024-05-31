import React, { ChangeEvent } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";

interface Item {
    name: string;
    quantity: string;
    rate: string;
    gst: number;
    total: string;
}

interface Props {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

function ItemsTable({ items, setItems }: Props) {
    const handleAddRow = () => {
        setItems([...items, { name: "", quantity: "", rate: "", total: "", gst: 18 }]);
    };

    const handleRemoveRow = (index: number) => {
        if (index === 0) return; // Prevent removing the first row
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const handleInputChange = (index: number, field: keyof Item, value: string) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;

        // Calculate total when quantity, rate, or GST changes
        if (field === "quantity" || field === "rate" || field === "gst") {
            const quantity = parseFloat(updatedItems[index].quantity);
            const rate = parseFloat(updatedItems[index].rate);
            const gst = parseFloat(updatedItems[index].gst.toString());

            if (!isNaN(quantity) && !isNaN(rate)) {
                const totalWithoutGST = quantity * rate;
                const totalGST = (totalWithoutGST * (gst / 100));
                updatedItems[index].total = (totalWithoutGST + totalGST).toFixed(2);
            } else {
                updatedItems[index].total = "";
            }
        }

        setItems(updatedItems);
    };

    return (
        <div className="div">
            {items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 items-center bg-slate-50 w-full px-4 py-6 gap-2 rounded-bl-xl rounded-br-xl">
                    <div className="col-span-3">
                        <input
                            placeholder="Item Name"
                            value={item.name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, "name", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            placeholder="Quantity"
                            value={item.quantity}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, "quantity", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            placeholder="Rate"
                            value={item.rate}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, "rate", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            placeholder="GST %"
                            value={item.gst}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, "gst", e.target.value)}
                            className="w-full border-b border-slate-300 focus:outline-none bg-transparent text-zinc-800 text-sm font-normal leading-[21px] h-12"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            placeholder="Total"
                            value={item.total}
                            disabled
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
