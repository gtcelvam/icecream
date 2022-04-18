import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ProductList from '../productList';
import {vannillaData} from '../data/vannillaData';

function Vennilla() {
 const [data,setData] = useState([]);
 useEffect(()=>{
  axios.get('https://ts-project1.herokuapp.com/icecream/vannilla').then(res=>{
      setData(res.data);
  }).catch(err=>{console.log(err)})
},[])
 const headStyle = {
    backgroundColor:'#F7D047',
    color:'#653425'
  }  
  const listStyle = {
    border : `3px solid ${headStyle.backgroundColor}`,
    borderRadius: '15px',
    padding:'1% 0'
}
const vannilla = data.length !== 0 && data.map(item=>{
  return <ProductList item={item} listStyle={listStyle}/>
})
  return (
    <div className='product-item vennilla'>
        <div className="product-item-head" style={headStyle}><p>Vennilla</p></div>
        <div className="product-item-container">
            <ul>
                {vannilla}
            </ul>
        </div>
    </div>
  )
}

export default Vennilla