import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';

const AddProduct = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [realImg, setRealImg] = useState([])
    const [ProfessionalImg, setProfessionalImg] = useState([])
    const { addToast, toastStack } = useToasts();
    const handleRealImgChange = (event) => {
        const files = event.target.files;
        setRealImg([...realImg, ...files]);
    };
    const handleProfessionalImgChange = (event) => {
        const files = event.target.files;
        setProfessionalImg([...ProfessionalImg, ...files]);
    };
    const onSubmit = async (data) => {
        const ProfessionalImgArray = [];
        const realImgArray = [];

        console.log(data);
      
        // Create an array of promises for realImg uploads
        const realImgPromises = realImg.map(async (imageFile) => {
          const formData = new FormData();
          formData.append('image', imageFile);
      
          const response = await fetch('https://api.imgbb.com/1/upload?key=ba3b948b897f68e17ca6b54684432dc4', {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            const imageData = await response.json();
            realImgArray.push(imageData.data.display_url);
          }
        });
      
        // Create an array of promises for ProfessionalImg uploads
        const professionalImgPromises = ProfessionalImg.map(async (imageFile) => {
          const formData = new FormData();
          formData.append('image', imageFile);
      
          const response = await fetch('https://api.imgbb.com/1/upload?key=ba3b948b897f68e17ca6b54684432dc4', {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            const imageData = await response.json();
            ProfessionalImgArray.push(imageData.data.display_url);
          }
        });
      
        // Wait for all image upload promises to complete
        await Promise.all([...realImgPromises, ...professionalImgPromises]);
      
        const { AdvancePayment, RegularPrice, category, description, productTitle, specialPrice, Features, PackageIncluding , Specifications, Warranty} = data;
        const productData = {
          AdvancePayment,
          RegularPrice,
          category,
          description,
          productTitle,
          specialPrice,
          ProfessionalImgArray,
          realImgArray,
          Warranty,
          Specifications,
          PackageIncluding,
          Features
        };
      
        console.log(productData);
      
        axios.post('http://localhost:3000/addProduct', productData).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            reset();
            addToast('Product added successfully', { appearance: 'success', autoDismiss: true });
          }
        });
      };
      
    return (
        <div>
            <h1 className='text-4xl text-center my-4'>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-5">
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Product Title
                        </label>
                        <input
                            id="productTitle"
                            type="text"
                            autoComplete="name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Product Title"
                            {...register("productTitle")}

                        />
                        {errors.className?.type === 'required' && <p className='text-red-600'>Class Name is required </p>}
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Product Category
                        </label>
                        <select
                            name="category"
                            id="category"
                            c className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...register("category", { required: true })}
                        >
                            <option value="" disabled>Select Product Category</option>
                            {[
                                "Audio Cable",
                                "Calculator",
                                "Best Sellers",
                                "IP Camera",
                                "Tripod",
                                "Cable",
                                "Desk Lamp",
                                "Bluetooth Headphone"
                                // Add more categories as needed
                            ].map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Regular Price
                        </label>
                        <input
                            id="RegularPrice"
                            name="RegularPrice"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder='Regular Price '
                            {...register("RegularPrice")}
                        />
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Special price
                        </label>
                        <input
                            id="specialPrice"
                            name="specialPrice"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Special Price"
                            {...register("specialPrice")}
                        />

                    </div>

                </div>
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Advance payment
                        </label>
                        <input
                            id="AdvancePayment"
                            name="AdvancePayment"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Advance Payment"
                            {...register("AdvancePayment")}
                        ></input>
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <input
                            id="description"
                            type="text"
                            autoComplete="description"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Description"
                            {...register("description")}
                        />
                    </div>

                </div>
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Warranty
                        </label>
                        <input
                            id="Warranty"
                            name="Warranty"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Advance Payment"
                            {...register("Warranty")}
                        ></input>
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Features 
                        </label>
                        <input
                            id="Features"
                            type="text"
                            autoComplete="Features"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Features"
                            {...register("Features")}
                        />
                    </div>

                </div>
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Specifications
                        </label>
                        <input
                            id="Specifications"
                            name="Specifications"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Advance Payment"
                            {...register("Specifications")}
                        ></input>
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Package including 
                        </label>
                        <input
                            id="PackageIncluding"
                            type="text"
                            autoComplete="PackageIncluding"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="PackageIncluding"
                            {...register("PackageIncluding")}
                        />
                    </div>

                </div>
                <div className='flex'>
                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Professional Image
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-md  file-input-accent w-full max-w-xs" multiple onChange={handleProfessionalImgChange} />

                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Real Image
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-md  file-input-accent w-full max-w-xs" multiple onChange={handleRealImgChange} />

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

export default AddProduct;