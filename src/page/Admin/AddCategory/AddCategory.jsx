import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';

const AddCategory = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('image',data.image[0])
        fetch('https://api.imgbb.com/1/upload?key=ba3b948b897f68e17ca6b54684432dc4',{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imageData => {
            const imgURL = imageData.data.display_url
            const {CategoryName, totalItem} = data
            const saveClassData = {
                CategoryName,
                totalItem,
                imgURL
            }

            // axiosSecure.post(`/classes`,saveClassData)
            // .then(res=>{
            //     console.log(res.data);
            //     reset()
            //     if(res.data.insertedId){
            //         addToast('Your class added successfully', { appearance: 'success', autoDismiss: true, });
            //     }
            // })
            console.log(saveClassData);
        })
    }
    return (
        <div>
            <h1 className='text-4xl text-center my-4'>Add Category</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-5">
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Category Name
                        </label>
                        <input
                            id="CategoryName"
                            type="text"
                            autoComplete="name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Product Title"
                            {...register("CategoryName")}

                        />
                        {errors.className?.type === 'required' && <p className='text-red-600'>Class Name is required </p>}
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Total Item
                        </label>
                        <input
                            id="totalItem"
                            type="text"
                            autoComplete="name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Product Title"
                            {...register("totalItem")}

                        />
                        {errors.className?.type === 'required' && <p className='text-red-600'>Class Name is required </p>}
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Professional Image
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-md  file-input-accent w-full max-w-xs"  />

                    </div>
                    
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCategory; 