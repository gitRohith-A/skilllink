import React, { useState, ChangeEvent } from 'react';

interface QuotationDateProps {
    state: any;
    setState: React.Dispatch<any>;
}

const QuotationDate: React.FC<QuotationDateProps> = ({ state, setState }) => {

    const generateRandomString = () => {
        const length = 8;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const [quotationNo, setQuotationNo] = useState<string>(generateRandomString());
    const [quotationDate, setQuotationDate] = useState<string>('');
    const [validTillDate, setValidTillDate] = useState<string>('');

    const handleQuotationNoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuotationNo(event.target.value);
        setState((prevState: any) => ({ ...prevState, quotationNo: event.target.value }));
    };

    const handleQuotationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuotationDate(event.target.value);
        setState((prevState: any) => ({ ...prevState, quotationDate: event.target.value }));
        setState((prevState: any) => ({ ...prevState, quotationNo: quotationNo }));
    };

    const handleValidTillDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValidTillDate(event.target.value);
        setState((prevState: any) => ({ ...prevState, validTillDate: event.target.value }));
    };

    return (
        <div className='w-full'>
            <h3 className='text-2xl'>Quotation</h3>
            <div className="flex justify-between items-center grid-cols-10 w-full p-3 my-6 ">
                <div className="col-span-5  w-full space-y-2">
                    <div className="flex justify-between items-center">
                        <p className='text-slate-500 text-base font-normal'>Quotation No</p>
                        <input
                            type="text"
                            name="quotationNo"
                            value={quotationNo}
                            onChange={handleQuotationNoChange}
                            className="block w-56 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            placeholder="ex: A00001"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='text-slate-500 text-base font-normal'>Quotation Date</p>
                        <input
                            type="date"
                            name="quotationDate"
                            value={quotationDate}
                            onChange={handleQuotationDateChange}
                            className="w-56 rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 inline-block  justify-between "
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='text-slate-500 text-base font-normal'>Valid Till Date</p>
                        <input
                            type="date"
                            name="validTillDate"
                            value={validTillDate}
                            onChange={handleValidTillDateChange}
                            className="w-56 rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 inline-block  justify-between "
                        />
                    </div>
                </div>
                {/* <div className="col-span-3 w-full  inline-flex justify-end">
                    <div className=" relative border-2 border-gray-300 border-dashed rounded-lg p-6 w-fit bg-slate-50" id="dropzone" >
                        <div className="flex justify-center items-center ">
                            {state && <img src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${state.icon}`} height={50} width={50} className=" max-h-32 " alt="Preview" />}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default QuotationDate;
