import React,{useState,useEffect} from 'react';
import ProductList from '../productList';
import axios from 'axios';
import {chocolateData} from '../data/chocolateData'

function Chocolate() {
 const [data,setData] = useState([]);
 useEffect(()=>{
    axios.get('https://ts-project1.herokuapp.com/icecream/chocolate').then(res=>{
        setData(res.data);
        console.log(res.data)
    }).catch(err=>{console.log(err)})
 },[])
 const headStyle = {
    backgroundColor:'#653425',
    color:'#F7D047'
  }
  const listStyle = {
      border : `3px solid ${headStyle.backgroundColor}`,
      borderRadius: '15px',
      padding:'1% 0'
  }
  const chocolate = data.length !== 0 && data.map(item=>{
      return <ProductList item={item} listStyle={listStyle}/>
  })
  return (
    <div className='product-item chocolate'>
        <div className="product-item-head" style={headStyle}><p>Chocolate</p></div>
        <div className="product-item-container">
            <ul>
                {chocolate}
            </ul>
        </div>
    </div>
  )
}

export default Chocolate