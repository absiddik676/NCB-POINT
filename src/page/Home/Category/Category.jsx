import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {
    const [categorys, setCategorys] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/category')
            .then(data => {
                setCategorys(data.data)
            })
    }, [])
    return (
        <div className='max-w-7xl mx-auto my-10 '>
            <div className='grid grid-cols-8 gap-1'>
                {
                    categorys.map(category => <SingleCategory key={category._id} category={category} />)
                }
            </div>
        </div>
    );
};

export default Category;