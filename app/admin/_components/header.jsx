import React from 'react'

const Header = () => {
    return (
        <div className='w-full bg-slate-200 text-black shadow-sm'>
            <div className='flex justify-between items-center px-[6%] py-4'>
                <h2>Admin Panel</h2>
                <a href="" className='bg-red-500 px-3 py-2 text-white text-xs rounded-md'>Logout</a>
            </div>
        </div>
    )
}

export default Header