import React from 'react'
import Header from './components/header'
import BagContainer from './components/bagcontainer'
import OtherCategory from './components/otherCategory'
import NewCOllection from './components/newcollection'




const page = () => {
  return (
    <div className='w-full h-screen'>
      <Header/>
      <BagContainer/>
      <OtherCategory/>
      <NewCOllection/>
    </div>
  )
}

export default page