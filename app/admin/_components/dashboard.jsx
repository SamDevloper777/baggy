import React from 'react'
import Header from './header'
import SideBar from './sidebar'

const Dashboard = () => {
    return (
        <div className='flex flex-1 h-screen'>
            <div className='flex flex-1 h-full'>
                <div className='w-2/12'>
                    <SideBar/>
                </div>
                <div className="w-10/12">
                    <Header/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard