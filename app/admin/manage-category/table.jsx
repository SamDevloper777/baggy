import categoryModel from '@/model/CategoryModel';
import Dbconnect from '@/utils/Dbconnect'
import React from 'react'
import SideBar from '../_components/sidebar';
import Header from '../_components/header';
import { redirect } from 'next/navigation';

const Table = async () => {
    "use server"
    Dbconnect();
    const category = await categoryModel.find({});

    const deleteCategory = async (formData) => {
        "use server"
        const Categoryid = formData.get("Categoryid");
        await categoryModel.findByIdAndDelete(Categoryid);
        redirect("/admin/manage-category");
    };


    return (
        <div className='flex flex-1 h-screen'>
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
                                    <th className='border p-3 text-center'>Category Name</th>
                                    <th className='border p-3 text-center'>Category Image</th>
                                    <th className='border p-3 text-center'>Category Description</th>
                                    <th className='border p-3 text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    category.map((cat, i) => (
                                        <tr key={i}>
                                            <td className='border p-4 text-center'>{i + 1}</td>
                                            <td className='border p-4 text-center'>{cat.catName}</td>
                                            <td className='border p-4 flex justify-center'>
                                                <img className='w-12 h-12' src={`/otherCategory/${cat.catImage}`} alt="" />
                                            </td>
                                            <td className='border p-4 text-center'>{cat.catDescription}</td>
                                            <td className='border p-4 text-center'>
                                                <form action={deleteCategory}>
                                                    <input type="hidden" name="Categoryid" value={cat._id} />
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
        </div>
    )
}

export default Table