import Link from 'next/link'
import React from 'react'

const NewCOllection = () => {
    return (
        <div className='flex flex-1 justify-center bg-[#ede6df] flex-col py-8'>
            <h1 className='text-[#cc664e] text-4xl py-1 px-2 tracking-wider my-6 font-light text-center'>Explore Our New Travel Collection</h1>
            <div className='flex flex-wrap flex-1 justify-center gap-5 mt-4 mb-4'>
                
                <div className='flex relative'>
                    <img className='w-[350px] h-[350px]' src="./newCollection/nc1.webp" alt="" />
                    <div className='absolute top-[80%] py-1 px-2  left-[30%] bg-[#0d485d]'>
                        <Link href={"#"} className="text-xs px-3 py-2  tracking-wide  text-white ">VIEW COLLECTION</Link>
                    </div>
                </div>
                <div className='flex relative'>
                    <img className='w-[350px] h-[350px]' src="./newCollection/nc3.webp" alt="" />
                    <div className='absolute top-[80%] py-1 px-2   left-[30%] bg-[#0d485d]'>
                        <Link href={"#"} className="text-xs px-3  tracking-wide  text-white ">VIEW COLLECTION</Link>
                    </div>
                </div>
                <div className='flex relative'>
                    <img className='w-[350px] h-[350px]' src="./newCollection/nc2.webp" alt="" />
                    <div className='absolute top-[80%] py-1 px-2  left-[30%] bg-[#0d485d]'>
                        <Link href={"#"} className=" text-xs px-3  tracking-wide  text-white ">VIEW COLLECTION</Link>
                    </div>
                </div>
               
                
              

            </div>
        </div>
    )
}

export default NewCOllection