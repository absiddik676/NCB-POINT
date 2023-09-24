import React from 'react';

const AddProduct = () => {
    const { register, handleSubmit,setValue, reset, formState: { errors } } = useForm({})
    const onSubmit = data => {
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Class Name
                        </label>
                        <input
                            id="className"
                            type="text"
                            autoComplete="name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Name"
                            {...register("className", { required: true })}

                        />
                        {errors.className?.type === 'required' && <p className='text-red-600'>Class Name is required </p>}
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Available seats
                        </label>
                        <input
                            id="AvailableSeats"
                            name="AvailableSeats"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Available Seats"
                            {...register("AvailableSeats", { required: true })}
                        />
                        {errors.AvailableSeats?.type === 'required' && <p className='text-red-600'> Available Seats number is required </p>}
                    </div>

                </div>
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder='Price '
                            {...register("price", { required: true })}
                        />

                        {errors.price?.type === 'required' && <p className='text-red-600'> Price is required </p>}

                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Instructor name
                        </label>
                        <input
                            defaultValue={user.displayName}
                            readOnly
                            id="InstructorName"
                            name="address"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Instructor Name"
                            {...register("InstructorName")}
                        ></input>
                    </div>

                </div>
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Instructor email
                        </label>
                        <input
                            defaultValue={user.email}
                            readOnly
                            id="InstructorEmail"
                            type="email"
                            autoComplete="email"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Instructor email"
                            {...register("InstructorEmail")}
                        />
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Class Image
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-md  file-input-accent w-full max-w-xs" />
                        {errors.image?.type === 'required' && <p className='text-red-600'> Image is required </p>}
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

export default AddProduct;