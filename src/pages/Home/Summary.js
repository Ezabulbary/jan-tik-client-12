import { faAddressCard, faCommentDots, faHandHoldingDollar, faPeopleGroup, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <div className='h-96 pt-28'>
            <h2 className='text-4xl font-bold text-center'>Business Summary</h2>
            <div className="flex justify-center">
                <div className="stats shadow m-5">

                    <div className="stat place-items-center">
                        <div className="stat-figure text-neutral">
                            <FontAwesomeIcon className="w-12 h-12 inline-block stroke-current" icon={faPeopleGroup} />
                        </div>
                        <div className="stat-title text-2xl">Customers</div>
                        <div className="stat-value">2M+</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FontAwesomeIcon className="w-12 h-12 inline-block stroke-current" icon={faHandHoldingDollar} />
                        </div>
                        <div className="stat-title text-2xl">Revenue</div>
                        <div className="stat-value text-primary">100M+</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-neutral">
                            <FontAwesomeIcon className="w-12 h-12 inline-block stroke-current" icon={faCommentDots} />
                        </div>
                        <div className="stat-title text-2xl">Reviews</div>
                        <div className="stat-value">4000+</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FontAwesomeIcon className="w-12 h-12 inline-block stroke-current" icon={faScrewdriverWrench} />
                        </div>
                        <div className="stat-title text-2xl">Tools</div>
                        <div className="stat-value text-primary">700+</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-neutral">
                            <FontAwesomeIcon className="w-12 h-12 inline-block stroke-current" icon={faAddressCard} />
                        </div>
                        <div className="stat-title text-2xl">New Registers</div>
                        <div className="stat-value">1,700</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;