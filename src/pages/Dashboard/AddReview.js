import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handleReview = event => {
        event.preventDefault()
        const review = {
            name: user?.displayName,
            review: event.target.review.value,
            ratings: event.target.rating.value
        }
        console.log(review)
        fetch('https://fathomless-lake-35584.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Add Your Rating');
            })
    }
    return (
        <div className='hero min-h-screen bg-base-200'>
            <form onSubmit={handleReview} className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <h1 className='text-2xl font-bold text-center py-5'>Please Add your Valuable FeedBack</h1>
                <div className='card-body'>
                    <textarea name='review' className="textarea input-bordered lg:max-w-lg" required placeholder="Please Add your Valuable FeedBack"></textarea>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name="rating" required placeholder="Please Give us a Rating" className="input input-bordered" />
                    </div>

                    <input type="submit" value='add' className="btn w-full max-w-xs my-2" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;