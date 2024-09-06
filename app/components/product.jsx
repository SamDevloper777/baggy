import ProductModel from '@/model/ProductModel';
import Dbconnect from '@/utils/Dbconnect'
import React from 'react'

const Product = ({productImage,productName,productPrice,productMrp}) => {

  return (
    <div className=''>
     
           <img src={`./products/${productImage}`} alt="" />
          <h3 className='text-center my-2  text-[#0d485d] text-xs px-4'>{productName}</h3>
          <div className='flex justify-center gap-3'>
            <p className='font-light text-xs text-[#0d485d]'>₹{productPrice}</p>
            <del className='font-light  text-xs text-[#0d485d]'>MRP:₹{productMrp}</del>
          </div>
        </div>

  )
}

export default Product