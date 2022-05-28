import React from 'react';
import ContactImg from '../../images/Contact/contact-us.png';
import Button from '../Shared/Button';

const Contact = () => {
    return (
        <section style={{
            background: `url(${ContactImg})`
        }}>
            <div className='text-center py-24 my-3'>
                <h2 className='text-4xl text-white pb-5'>Stay connected with us</h2>
                <input type="text" placeholder="Email Address" className="input w-full max-w-xs m-4" />
                <br />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs m-4" />
                <br />
                <textarea className="textarea w-full max-w-xs m-4" placeholder="Your message"></textarea>
                <br />
                <Button>Submit</Button>
            </div>
        </section>
    );
};

export default Contact;