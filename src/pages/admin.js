import React, { useState } from 'react'
import AddProduct from './addProduct'
import ProductTable from './productTable'
import './css/admin.css'

function Admin() {
  const [product,setProduct] = useState(false)
  const handleProduct = (status)=>{
    setProduct(status)
  }
  return (
    <div className='admin'>
        <AddProduct handleProduct={handleProduct}/>
        <ProductTable product={product} handleProduct={handleProduct}/>
    </div>
  )
}

export default Admin