import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-1 bg-slate-800 text-white h-full'>
        <div className="flex flex-col flex-1 h-screen  ">
            <div className='flex flex-col gap-5 mt-12 px-2'>
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/insert-category">Insert category</Link>
            <Link href="/admin/manage-category">Manage category</Link>
            <Link href="/admin/insert-product">Insert Product</Link>
            <Link href="/admin/manage-product">Manage Product</Link>
            <Link href="">Manage Users </Link>

            </div>
        </div>
    </div>
  )
}

export default SideBar