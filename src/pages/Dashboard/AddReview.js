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
        fetch('http://localhost:5000/addreview', {
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
                <div className='card-body'>
                    <textarea name='review' class="textarea input-bordered lg:max-w-lg" placeholder="Please Add your Valuable FeedBack"></textarea>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Ratings</span>
                        </label>
                        <input type="text" name="rating" placeholder="Please Give us a Rating" class="input input-bordered" />
                    </div>

                    <input type="submit" value='add'  class="btn w-full max-w-xs my-2" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;