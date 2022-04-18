import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ProductList from '../productList';
import {pistaData} from '../data/pistaData';

function Pista() {
 const [data,setData] = useState([]);
 useEffect(()=>{
  axios.get('https://ts-project1.herokuapp.com/icecream/pista').then(res=>{
      setData(res.data);
  }).catch(err=>{console.log(err)})
},[])
 const headStyle = {
    backgroundColor:'#9FDC3C',
    color:'#313030'
  }  
  const listStyle = {
    border : `3px solid ${headStyle.backgroundColor}`,
    borderRadius: '15px',
    padding:'1% 0'
}
const pista = data.length !== 0 && data.map(item=>{
  return <ProductList item={item} listStyle={listStyle}/>
})
  return (
    <div className='product-item pista'>
        <div className="product-item-head" style={headStyle}><p>Pista</p></div>
        <div className="product-item-container">
            <ul>
                {pista}
            </ul>
        </div>
    </div>
  )
}

export default Pista