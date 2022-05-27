import { faAddressCard, faCommentDots, faHandHoldingDollar, faPeopleGroup, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <div className='h-96 pt-28'>
            <h2 className='text-4xl font-bold text-center'>Business Summary</h2>
            <div className="flex justify-center">
                <div class="stats shadow m-5">

                    <div class="stat place-items-center">
                        <div class="stat-figure text-neutral">
                            <FontAwesomeIcon class="w-12 h-12 inline-block stroke-current" icon={faPeopleGroup} />
                        </div>
                        <div class="stat-title text-2xl">Customers</div>
                        <div class="stat-value">2M+</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-figure text-primary">
                            <FontAwesomeIcon class="w-12 h-12 inline-block stroke-current" icon={faHandHoldingDollar} />
                        </div>
                        <div class="stat-title text-2xl">Revenue</div>
                        <div class="stat-value text-primary">100M+</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-figure text-neutral">
                            <FontAwesomeIcon class="w-12 h-12 inline-block stroke-current" icon={faCommentDots} />
                        </div>
                        <div class="stat-title text-2xl">Reviews</div>
                        <div class="stat-value">4000+</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-figure text-primary">
                            <FontAwesomeIcon class="w-12 h-12 inline-block stroke-current" icon={faScrewdriverWrench} />
                        </div>
                        <div class="stat-title text-2xl">Tools</div>
                        <div class="stat-value text-primary">700+</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-figure text-neutral">
                            <FontAwesomeIcon class="w-12 h-12 inline-block stroke-current" icon={faAddressCard} />
                        </div>
                        <div class="stat-title text-2xl">New Registers</div>
                        <div class="stat-value">1,700</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;