'use client'

import React, { useState } from 'react';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import Loading from '../others/loading';

interface ReviewStickyProps {
    data: any;
    user: any
    params: any;
}

const ReviewSticky: React.FC<ReviewStickyProps> = ({ data, user, params }) => {
    const [rating, setRating] = useState<number | null>(null);
    const [comment, setComment] = useState<string>('');
    const [submite, setSubmite] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRating(Number(event.target.value));
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleSubmit = async () => {
        const reviewData = {
            userId: user.id,
            itemId: params,
            reviewText: comment,
            rating: rating
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            });

            if (!response.ok) {
                throw new Error('Failed to create review');
            }

            const data = await response.json();
            setSubmite(true)
            setLoading(false);
        } catch (error) {
            console.error('Error creating review:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />
    }

    return (
        <div className="border-2 border-zinc-300 rounded-md mt-5">
            <div className='border-neutral-200 py-4 border-b-2'>
                <p className='text-center text-neutral-800 text-base font-bold'>Add Review</p>
            </div>
            {!submite ?
                <div className="px-6 py-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="rating">
                            Rating (1-5)
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            min="1"
                            max="5"
                            value={rating || ''}
                            disabled={!user}
                            onChange={handleRatingChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter rating"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="comment">
                            Comment
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows={4}
                            disabled={!user}
                            value={comment}
                            onChange={handleCommentChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Write your comment"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className='w-full py-4 bg-black rounded flex-col justify-start items-center inline-flex disabled:bg-blue-100 disabled:text-stone-600'
                        disabled={!user}
                    >
                        <div className="text-center text-base text-gray-200 font-bold">{!user ? "Log in to add review" : ' Submit'}</div>
                    </button>
                </div>
                :
                <div className='h-20 text-center flex justify-center items-center text-blue-700 text-lg'>
                    Submited Successfully  <BsFillHandThumbsUpFill className='mx-3' size={30} fill='green' />
                </div>
            }

        </div>
    );
};

export default ReviewSticky;
