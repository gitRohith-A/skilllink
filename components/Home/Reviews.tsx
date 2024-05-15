import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa6";
import ReviewList from './Elements/ReviewList';
// import vid from '../../public/home/review/review.mp4'

function Reviews({ data }: { data?: any }) {
    return (
        <div className='container py-3 px-12 '>
            <h5 className='
            text-zinc-700 text-xl font-bold leading-7
            '>Reviews</h5>
            <div className="flex justify-between items-center my-10">
                <p className='text-zinc-700 text-base font-bold'>
                    reviews for this Gig
                </p>
                <div className="star flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
            <div className="grid grid-cols-3  ">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="text-neutral-800 text-base font-bold ">5 Stars</div>
                        <div className="border-2 bg-[#E4E5E7]  w-60 rounded-xl">
                            <div className="progress-bar h-2 rounded-xl w-56 bg-blue-600">
                            </div>
                        </div>
                        <p>
                            (352)
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-neutral-800 text-base font-bold ">4 Stars</div>
                        <div className="border-2 bg-[#E4E5E7]   w-60 rounded-xl">
                            <div className="progress-bar h-2 rounded-xl w-40 bg-blue-600">
                            </div>
                        </div>
                        <p>
                            (352)
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-neutral-800 text-base font-bold ">3 Stars</div>
                        <div className="border-2 bg-[#E4E5E7]   w-60 rounded-xl">
                            <div className="progress-bar h-2 rounded-xl w-32 bg-blue-600">
                            </div>
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-neutral-800 text-base font-bold ">2 Stars</div>
                        <div className="border-2 bg-[#E4E5E7]   w-60 rounded-xl">
                            <div className="progress-bar h-2 rounded-xl w-20 bg-blue-600">
                            </div>
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-neutral-800 text-base font-bold ">1 Stars</div>
                        <div className="border-2 bg-[#E4E5E7]   w-60 rounded-xl">
                            <div className="progress-bar h-2 rounded-xl w-10 bg-blue-600">
                            </div>
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                </div>
                <div className="hello">
                    <p className='mb-4 text-zinc-700 text-base font-bold'>
                        Rating Breakdown
                    </p>
                    <div className="space-y-2">
                        <div className="flex space-x-2 items-center">
                            <p className='text-neutral-400 text-base font-normal '>
                                Seller communication level
                            </p>
                            <div className="flex items-center space-x-1">
                                <FaStar fill='#2563EB' />
                                <p>
                                    5
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className='text-neutral-400 text-base font-normal '>
                                Recommend to a friend
                            </p>
                            <div className="flex items-center space-x-1">
                                <FaStar fill='#2563EB' />
                                <p>
                                    5
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className='text-neutral-400 text-base font-normal '>
                                Service as described
                            </p>
                            <div className="flex items-center space-x-1">
                                <FaStar fill='#2563EB' />
                                <p>
                                    5
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                <video width="320" height="240" controls preload="none">
                    <source src="../../../public/home/review/review.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            </div >
            <ReviewList data={data} />
        </div >
    )
}

export default Reviews
