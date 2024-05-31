'use client'
import React, { useEffect, useState, useRef } from 'react';
import QuotationBody from './QuotationDate';
import QuotationDetails from './QuotationHead';
import QuotationFrom from './QuotationFrom';
import QuotationFor from './QuotationFor';
import AddItems from './AddItems';
import ItemsTable from './ItemsTable';
import TotalCal from './TotalCal';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { EnterpriseData } from '../enterprise/PostList';
import { useRouter } from 'next/router';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import QuotationPDF from './PdfGenerate';
import { useParams } from 'next/navigation';

interface Item {
    name: string;
    quantity: string;
    rate: string;
    gst: number;
    total: string;
}

async function fetchData(id: any): Promise<EnterpriseData[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/${id}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData: EnterpriseData[] = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

function Quotation() {
    const initialItemState: Item = { name: '', quantity: '', rate: '', total: '', gst: 18 };
    const [items, setItems] = useState<Item[]>([initialItemState]);
    const [state, setState] = useState<any>(null);
    const router = useParams();
    const pdfDataRef = useRef<any>(null);

    useEffect(() => {
        async function getData() {
            const { slug } = router;
            const data = await fetchData(slug);
            setState(data);
        }
        getData();
    }, [router.query]);

    const calculateTotalAmount = () => {
        return items.reduce((total, item) => {
            if (item.total !== '') {
                return total + parseFloat(item.total);
            }
            return total;
        }, 0).toFixed(2);
    };

    const sendPdfToClient = async () => {
        const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/users/send-pdf`; // Replace with your API URL
        const pdfData = pdfDataRef.current;

        if (!pdfData) {
            console.error('PDF data is not available');
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: state.clientEmail, // Assuming you have the client's email in the state
                    pdfData,
                }),
            });

            if (response.ok) {
                console.log('PDF sent to client successfully');
            } else {
                throw new Error('Failed to send PDF to client');
            }
        } catch (error: any) {
            console.error('Error sending PDF:', error.message);
        }
    };

    return (
        <>

            <div className="flex justify-center my-12">
                <div className="w-[75%] h-auto px-9 pb-6 bg-white rounded shadow border border-slate-300 flex-col justify-center items-center inline-flex">
                    <div className="flex justify-start w-full">
                        <Link href={'/enterprise/forms-list'} className="flex items-center bg-green-500 hover:bg-green-700 text-white mt-1 font-bold py-2 px-4 rounded">
                            <FaArrowLeft className="mx-2" /> Back
                        </Link>
                    </div>
                    <QuotationDetails />
                    <QuotationBody state={state} setState={setState} />
                    <div className="col-auto flex justify-between w-full">
                        <QuotationFrom state={state} setState={setState} />
                        <QuotationFor state={state} setState={setState} />
                    </div>
                    <AddItems />
                    <ItemsTable items={items} setItems={setItems} />
                    <TotalCal calculateTotalAmount={calculateTotalAmount} />

                    {state &&
                        <PDFDownloadLink
                            document={<QuotationPDF state={state} items={items} total={calculateTotalAmount} />}
                            fileName="quotation.pdf"
                            className="px-5 py-3 bg-blue-600 rounded border border-blue-600 justify-center items-center inline-flex text-center text-white text-sm"

                        >
                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
                        </PDFDownloadLink>
                    }
              
                </div>
            </div>
        </>
    );
}

export default Quotation;
