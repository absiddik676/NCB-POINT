import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const EditCategory = () => {
    const singleCategory = useLoaderData()
   
    const { addToast } = useToasts();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.patch(`http://localhost:3000/category/edit/${singleCategory._id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    addToast('Data Update successful', {
                        appearance: 'success', // or 'error', 'warning', 'info'
                        autoDismiss: true, // Auto-dismiss the notification
                    });
                }
            })
    };
    return (
        <div>
            <h1 className='text-4xl text-center mt-2 mb-4'>Edit Category</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-6">
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Category Name
                        </label>
                        <input
                            id="categoryName"
                            type="text"
                            autoComplete="name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Name"
                            defaultValue={singleCategory?.Name}
                            {...register("categoryName")}
                        />

                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Total Item
                        </label>
                        <input
                            defaultValue={singleCategory?.totalItem}
                            id="totalItem"
                            name="totalItem"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Available Seats"
                            {...register("totalItem")}
                        />

                    </div>

                </div>

                <div className='flex gap-5'>


                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Category Image
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-md  file-input-accent w-full max-w-xs" />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditCategory;