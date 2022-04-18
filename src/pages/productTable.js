import React,{useState,useEffect} from 'react';
import axios from 'axios';

function ProductTable({product,handleProduct}) {
  const [data,setData] = useState(null);
  const [update,setUpdate] = useState(true);
  const [updatedData,setUpdatedData] = useState(null);
  const [deleteData,setDeleteData] = useState(true);
  useEffect(()=>{
        axios.get('https://ts-project1.herokuapp.com/icecream').then(res=>{
            setData(res.data);
            handleProduct(false);
        }).catch(err=>{console.log(err)})
  },[update,deleteData,product]);
  const handleEdit = (e)=>{
      update ? e.target.innerHTML = 'Save' : e.target.innerHTML = 'Edit'
      const table = e.target.parentElement.parentElement;
      const tableNum = [1,2,3,4];
       if(update){
           let id = table.getAttribute('dataid')
           const result = data.filter(item=>{
              return item._id === id
           })
           setUpdatedData({id : id})
           tableNum.map(item=>{
               const tableInput = table.children[item].children[1];
               const key = tableInput.children[0].name
               table.children[item].children[0].classList.toggle('display-inactive')
               tableInput.classList.toggle('display-active')
               tableInput.children[0].value = result[0][key]
           })
          setUpdate(!update)
       }else{
           tableNum.map(item=>{
            const tableInput = table.children[item].children[1];
            table.children[item].children[0].classList.toggle('display-inactive');
            tableInput.classList.toggle('display-active');
            })
            const header = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                }
            }
            axios.patch(`https://ts-project1.herokuapp.com/icecream/${updatedData.id}`,updatedData,header).then(res=>{
                let status = res.data.status;
                status ? alert("Data Updated Successfully!") : alert('Something Went Wrong..Try Again');
                setUpdate(!update);
            })
       }
  }
  const handleChange = (e)=>{
        const dataSet = {}
        const data = e.target.value;
        const name = e.target.name;
        dataSet[name] = data;
        setUpdatedData({...updatedData,...dataSet})
  }
  const handleDelete = (e)=>{
    const table = e.target.parentElement.parentElement;
    const id = table.getAttribute('dataid');
    const url = `https://ts-project1.herokuapp.com/icecream/${id}`
    setDeleteData(!deleteData)
    axios.delete(url).then(res=>{
        let status = res.data.status;
        !status && alert('Error Occured..Try Again');
        setDeleteData(!deleteData)
    })
  }
  const productData = data !== null && data.map((item,index)=>{
      const int = index+1
      return <tr dataid={item._id} key={item._id}>
      <td>{int}</td>
      <td><span>{item.name}</span><div className='input-edit'><input type="text" name="name" onChange={handleChange}/></div></td>
      <td><span>{item.type}</span><div className='input-edit'><input type="text" name="type"  onChange={handleChange}/></div></td>
      <td><span>{item.price} Rs</span><div className='input-edit'><input type="text" name="price" onChange={handleChange}/></div></td>
      <td><span><a href={item.image} target='_blank'>Link</a></span><div className='input-edit'><input type="text" name="image" onChange={handleChange}/></div></td>
      <td><button className="btn edit-btn" onClick={handleEdit}>Edit</button></td>
      <td><button className="btn delete-btn" onClick={handleDelete}>Delete</button></td>
      </tr>
  })
  return (
    <div className="product-table-container">
        <table className="product-table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th colSpan={2}>Options</th>
                </tr>
            </thead>
            <tbody> 
                {productData}
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable