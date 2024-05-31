import React, { useState, ChangeEvent } from "react";

interface QuotationDateProps {
    state: any;
    setState: React.Dispatch<any>;
}


const QuotationFor: React.FC<QuotationDateProps> = ({ state, setState }) => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gst, setGst] = useState('');
    const [address, setAddress] = useState('');
    const [businessName, setBusinessName] = useState('');

    const handleBusinessnameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        // Only accept string characters (alphabets, spaces, etc.)
        const validBusinessName = inputValue.replace(/[^A-Za-z\s]/gi, '');
        setBusinessName(validBusinessName);
        setState((prevState: any) => ({ ...prevState, clientBusinessName: validBusinessName }));
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
        setState((prevState: any) => ({ ...prevState, clientEmail: inputValue }));
    };

    const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numbersOnly = inputValue.replace(/\D/g, '');
        setPhoneNumber(numbersOnly);
        setState((prevState: any) => ({ ...prevState, clientPhoneNo: numbersOnly }));
    };

    const handleGstChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGst(event.target.value);
        setState((prevState: any) => ({ ...prevState, clientGST: event.target.value }));
    };

    const handleAddressChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddress(event.target.value);
        setState((prevState: any) => ({ ...prevState, clientAddress: event.target.value }))
    };

    return (
        <div className='bg-slate-50 w-[49%] p-4 rounded'>
            <div className="flex items-baseline gap-4">
                <div className="pb-2 border-dashed border-b border-slate-600 flex-col justify-start items-start inline-flex">
                    <div className="text-gray-900 text-xl font-normal ">Quotation For</div>
                </div>
                <div className="text-slate-500 text-sm font-normal  ">(Business Details)</div>
            </div>
            <div className="my-4 p-4 w-full bg-white rounded border border-slate-300 flex-col justify-start items-start inline-flex">
                <div className='w-full'>
                    <div className="space-y-8">
                        <input placeholder='Clients business name (Required)' value={businessName} onChange={handleBusinessnameChange} className='w-full border-b border-slate-300 focus:outline-none ' />
                        <textarea className="w-full border-b border-slate-300 focus:outline-none" placeholder="Address" name="" id="" rows={5} value={address} onChange={handleAddressChange}></textarea>
                    </div>
                    <div className="flex flex-wrap  justify-start mt-4 gap-2 mb-6">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="GST"
                            value={gst}
                            onChange={handleGstChange}
                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuotationFor
