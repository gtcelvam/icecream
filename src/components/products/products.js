import Chocolate from './chocolate/chocolate';
import Pista from './pista/pista';
import Vennilla from './vennilla/vennilla';
import './products.css'
function Products() {
  return (
    <div className='product-main'>
        <div className="product-head">
            <h1>Products</h1>
        </div>
        <div className="product-container">
            <Chocolate/>
            <Pista/>
            <Vennilla/>
        </div>
    </div>
  )
}

export default Products