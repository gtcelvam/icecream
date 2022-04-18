import axios from 'axios'
function AddProduct({handleProduct}) {
  const handleSubmit = (e)=>{
      e.preventDefault();
      let data = {}
      let children = e.target.parentElement.children;
      let empty = 0;
      for (let i = 0; i < children.length; i++) {
        const element = children[i]
        const type = element.type;
        if(type !== 'button'){
          const name = element.name;
          const value = element.value;
          value === '' && empty++
          data[name] = value;
        }
      }
      if(empty > 0){
        alert('No Value should be empty')
      }else{
        const head = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
        axios.post('https://ts-project1.herokuapp.com/icecream',data,head).then((res)=>{
            let status = res.data.status;
            let message = res.data.message;
            if(status){
              for (let i = 0; i < children.length; i++) {
                const element = children[i]
                const type = element.type;
                if(type !== 'button'){
                  element.value = ''
                }
              }
              //alert(message)
              handleProduct(status)
            }else{
              alert(message)
            }
        })
      }
  }

  return (
    <div className="add-product-container">
        <p>Add Product</p>
        <form className="form-container">
            <input type="text" name="name" placeholder="Name" className="form-element input-container"/>
            <input type="text" name="type" placeholder="Type" className="form-element input-container"/>
            <input type="text" name="price" placeholder="Price" className="form-element input-container"/>
            <input type="text" name="image" placeholder="Image Url" className="form-element input-container"/>
            <select name="category" className="form-element">
                <option value="">Select Category</option>
                <option value="vannilla" >Vannilla</option>
                <option value="pista" >Pista</option>
                <option value="chocolate" >Chocolate</option>
            </select>
            <input type="button" value="Add" onClick={handleSubmit} className="form-element add-btn"/>
        </form>
    </div>
  )
}

export default AddProduct