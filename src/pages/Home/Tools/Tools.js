import React from 'react';
import useTools from '../../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools();
    return (
        <div>
            <h2 className='text-5xl font-bold text-center'>Inventory</h2>
            <h2 className='text-3xl font-bold text-center py-10'>Find the product of your choice</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default Tools;