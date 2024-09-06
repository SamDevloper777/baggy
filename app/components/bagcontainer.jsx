import React from 'react'
import Product from './product'
import ProductModel from '@/model/ProductModel';
import Dbconnect from '@/utils/Dbconnect';

const BagContainer = async() => {
  Dbconnect();
  const products = await ProductModel.find({})
  return (
    <div className='w-full flex flex-col gap-6'>
      <h2 className='text-amber-800 w-full h-full text-center text-2xl font-bold mt-8 tracking-wide'>Bags</h2>
      <div className='w-full gap-4 grid grid-cols-4 p-10'>
        {
          products.map((pro, index) => (
            <Product key={index}
             productName={pro.productName}
              productImage={pro.productImage}
              productMrp={pro.productMrp} 
              productPrice={pro.productPrice}
              
              />
          ))
        }
      </div>
    </div>
  )
}

export default BagContainer