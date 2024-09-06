import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
    return (
        <div className='flex flex-1 p-7 shadow-sm items-center justify-between'>
            <div className='font-light flex text-xs gap-8 text-teal-900'>
                <Link href={"#"}>Bags</Link>
                <Link href={"#"}>Footwear</Link>
                <Link href={"#"}>Luggage</Link>
                <Link href={"#"}>Grand Rakhi Sale</Link>
            </div>
            <div>
                <h1  className='text-teal-800  text-3xl '>Baggy</h1>
            </div>
            <div className='font-light flex text-xs gap-8 text-teal-900'>
                <Link href={"#"}>New Launch</Link>
                <Link href={"#"}>Collection</Link>
                <Link href={"#"}>About</Link>
                <div className='flex gap-4 items-center'>
                    <CiSearch className='w-4 h-4 ' />
                    <CiUser className='w-4 h-4' />
                    <HiOutlineShoppingBag className='w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default Header