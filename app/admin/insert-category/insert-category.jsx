import React from 'react'
import SideBar from '../_components/sidebar'
import Header from '../_components/header'
import Dbconnect from '@/utils/Dbconnect'
import { redirect } from 'next/navigation'
import {join} from "path";
import { writeFile } from "fs/promises";
import categoryModel from '@/model/CategoryModel'



const InsertCategory = () => {
    const handleInsertCategory = async(formData)=>{
        "use server";

        let image= formData.get('catImage');
        let bytes=await image.arrayBuffer();
        let buffer= Buffer.from(bytes);
        let path= join("./public","otherCategory",image.name)
        await writeFile(path,buffer);

        let data={
            catName:formData.get('catName'),
            catDescription:formData.get('catDescription'),
            catImage:image.name,
        }
        Dbconnect();
        let created = await categoryModel.create(data);
        redirect("/admin/manage-category");

    }
    return (
        <div className='flex flex-1 h-screen overflow-hidden'>
            <div className='flex flex-1 h-full'>
                <div className='w-2/12 h-full'>
                    <SideBar />
                </div>
                <div className="w-10/12 h-full">
                    <Header />
                    <div className='flex flex-1 my-4'>
                        <h1 className=' text-xl text-zinc-800 font-semibold px-[12%]'>Insert Category Here</h1>
                    </div>
                    <div className='flex h-full flex-1 justify-center'>
                        <form action={handleInsertCategory} className='w-3/4 '>
                            <div className='mb-3 flex flex-col'>
                                <label htmlFor="">Category Name</label>
                                <input type="text" name='catName' className='px-3 py-2 border border-slate-400 rounded' />
                            </div>
                            <div className='mb-3 flex flex-col'>
                                <label htmlFor="">Category Description</label>
                                <textarea rows="4" type="text" name='catDescription' className='px-3 py-2 border border-slate-400 rounded'></textarea>
                            </div>
                            
                            <div className='mb-3 flex flex-col'>
                                <label htmlFor="">Category Image</label>
                                <input type="file" name='catImage' className='px-3 py-2 border border-slate-400 rounded' />
                            </div>
                            <div className='mb-3 flex flex-col'>
                                <input type="submit" className='px-3 py-2 bg-purple-500 text-white rounded' />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InsertCategory