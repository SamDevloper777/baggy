import Dbconnect from '@/utils/Dbconnect'
import React from 'react'
import SideBar from '../_components/sidebar';
import Header from '../_components/header';
import ProductModel from '@/model/ProductModel';
import { redirect } from 'next/navigation';

const ManageProduct = async () => {


    Dbconnect();
    const product =  await ProductModel.find().populate("productCategory");

    const handeDelete=async(formData)=>{
        "use server"
        const productId= formData.get('productId');
        await ProductModel.findByIdAndDelete(productId);
        redirect("/admin/manage-product");
            
    }
   
    return (
        <div className='flex flex-1 h-full'>
            <div className='w-2/12'>
                <SideBar />
            </div>
            <div className="w-10/12">
                <Header />
                <div>
                    <table className='border w-full '>
                        <thead>
                            <tr>
                                <th className='border p-3 text-center'>Id</th>
                                <th className='border p-3 text-center'>product Name</th>
                                <th className='border p-3 text-center'>product Category</th>
                                <th className='border p-3 text-center'>product Image</th>
                                <th className='border p-3 text-center'>product Mrp</th>
                                <th className='border p-3 text-center'>product Price</th>
                                <th className='border p-3 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((pro, i) => (
                                    <tr key={i}>
                                        <td className='border p-4 text-center'>{i + 1}</td>
                                        <td className='border p-4 text-center'>{pro.productName}</td>
                                        <td className='border p-4 text-center'>{pro.productCategory?.catName}</td>
                                        <td className='border p-4 flex justify-center'>
                                            <img className='w-12 h-12' src={`/products/${pro.productImage}`} alt="" />
                                        </td>
                                        <td className='border p-4 text-center'>{pro.productMrp}</td>
                                        <td className='border p-4 text-center'>{pro.productPrice}</td>
                                        <td className='border p-4 text-center'>
                                            <form action={handeDelete}>
                                                <input type="hidden" name="productId" value={pro._id} />
                                                <button type='submit' className='bg-red-500 text-white rounded px-3 py-2'>Delete</button>
                                            </form>
                                        </td>

                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
  
}

export default ManageProduct