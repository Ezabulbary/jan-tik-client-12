import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className='footer p-20 mx-auto'>
                <div className='pl-20'>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div className='pl-20'>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div className='pl-20'>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
                <div className='pl-20'>
                    <span className="footer-title">Social</span>
                    <Link to='/' className="link link-hover">Twitter</Link>
                    <Link to='/' className="link link-hover">Instagram</Link>
                    <Link to='/' className="link link-hover">Facebook</Link>
                    <Link to='/' className="link link-hover">Github</Link>
                </div>
            </div>
            <div className="text-center px-10 py-3 border-t border-base-300">
                <p>Copyright © 2022 - All right reserved by JanTrik Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;