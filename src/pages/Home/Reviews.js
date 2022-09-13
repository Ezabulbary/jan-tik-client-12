import React from 'react';
import useReview from '../../hooks/useReview';

const Reviews = () => {
    const [reviews] = useReview()
    return (
        <div className='py-32'>
            <h2 className='text-4xl font-bold text-center pb-10'>Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <div key={review._id} className="card lg:-max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{review.name}</h2>
                            <p className='text-justify'>{review.review}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                    </div>).slice(0, 3).reverse()
                }
            </div>
        </div>
    );
};

export default Reviews;