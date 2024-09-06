import CategoryModel from '@/model/CategoryModel';
import Dbconnect from '@/utils/Dbconnect'
import Link from 'next/link'
import React from 'react'

const OtherCategory = async () => {
    Dbconnect();
    const category = await CategoryModel.find({});
    return (
        <>
            <div className='flex flex-1 justify-center bg-[#ede6df] flex-col py-8'>
                <h1 className='text-[#cc664e] text-4xl tracking-wider my-6 font-light text-center'>Explore Other Styles</h1>
                <div className='flex flex-wrap flex-1 justify-center gap-5 mt-4 mb-4'>
                    {
                        category.map((cat, i) => (
                            <div key={i} className='flex relative'>
                                <img className='w-[300px] h-[300px]' src={`./otherCategory/${cat.catImage}`} alt="" />
                                <div className='absolute top-[60%] hover:bg-[#0d485d] delay-75 duration-200 py-4 px-2 left-[20%] bg-white'>
                                    <Link href={"#"} className="text-xl px-4 font-extralight tracking-wide  border border-dotted py-2 hover:border-white  border-teal-400 text-[#0d485d] delay-75 duration-200 hover:text-white">{cat.catName}</Link>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
            <div className='flex flex-1 border border-slate-300 border-l-2 px-[8%]'>

            </div>
        </>
    )
}

export default OtherCategory