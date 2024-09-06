import React from 'react'
import SideBar from '../_components/sidebar'
import Header from '../_components/header'
import Dbconnect from '@/utils/Dbconnect'
import categoryModel from '@/model/CategoryModel'
import { writeFile } from "fs/promises";
import {join} from "path";
import productModel from '@/model/ProductModel'
import { redirect } from 'next/navigation'

const InsertProduct =async () => {
    Dbconnect();
    const categories=await categoryModel.find({});

    const handleproduct= async(formData)=>{
        "use server"
        
        //image work
        let image = formData.get('productImage');
        let bytes = await image.arrayBuffer();
        let buffer =Buffer.from(bytes);
        let path =join("./public","products",image.name)
        await writeFile(path,buffer);

        let data={
            productName:formData.get('productName'),
            productDescription:formData.get('productDescription'),
            productPrice:formData.get('productPrice'),
            productCategory:formData.get('productCategory'), 
            productMrp:formData.get('productMrp'),
            productImage:image.name,
        }
        let newProduct=await productModel.create(data);
        redirect('/admin/manage-product');

    }
  return (
    <div className='flex flex-1 h-screen overflow-y-scroll'>
    <div className='flex flex-1 h-full'>
        <div className='w-2/12 h-full'>
            <SideBar />
        </div>
        <div className="w-10/12 h-full">
            <Header />
            <div className='flex flex-1 my-4'>
                <h1 className=' text-xl text-zinc-800 font-semibold px-[12%]'>Insert Product Here</h1>
            </div>
            <div className='flex h-full flex-1 justify-center'>
                <form action={handleproduct} className='w-3/4 '>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="">Product Name</label>
                        <input type="text" name='productName' className='px-3 py-2 border border-slate-400 rounded' />
                    </div>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="">Product Description</label>
                        <input type="text" name='productDescription' className='px-3 py-2 border border-slate-400 rounded' />
                    </div>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="">Category</label>
                        <select name="productCategory" className='border border-slate-400  bg-slate-50 rounded px-3 py-1' id="">
                        <option value="" selected disabled>Add Category</option>
                            {categories.map((cat,i)=>(
                                <option key={i} value={cat._id} > {cat.catName}</option>
                            ))
                            }
                        </select>
                    </div>
                    
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="">Product Image</label>
                        <input type="file" name='productImage' className='px-3 py-2 border border-slate-400 rounded' />
                    </div>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="">Product Price</label>
                        <input type="text" name='productPrice' className='px-3 py-2 border border-slate-400 rounded' />
                    </div>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="">Product MRP</label>
                        <input type="text" name='productMrp' className='px-3 py-2 border border-slate-400 rounded' />
                    </div>
                    <div className='mb-3 flex flex-col'>
                        <input type="submit" value="Insert Product" className='px-3 py-2 bg-purple-500 text-white rounded' />
                    </div>
                </form>
            </div>
        </div>

    </div>
</div>
  )
}

export default InsertProduct