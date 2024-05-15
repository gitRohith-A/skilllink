import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

function RenderStars({ rating }: { rating: number }) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<BsStarFill key={`star-${i}`} color='orange' size={15} className='mx-1 rating-stars' />);
    }

    if (hasHalfStar) {
        stars.push(<BsStarHalf key={`star-half`} color='orange' size={15} className='mx-1 rating-stars' />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<BsStar key={`star-empty-${i}`} color='orange' size={15} className='mx-1 rating-stars' />);
    }

    return stars;
};

export default RenderStars