import React from 'react';

const SingleCategory = ({ category }) => {
    console.log(category);
    const { link, Name, totalItem } = category
    return (
        <div className='border h-52 border-gray-200 flex flex-col justify-center items-center'>
            <img className='w-20' src={link} alt="" />
            <div className='flex gap-3 mt-3 text-center'>
                <p className='text-sm font-semibold'>{Name}<sup className='text-sm ml-2'>{totalItem}</sup></p>
            </div>
        </div>
    );
};

export default SingleCategory;