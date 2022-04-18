

function ProductList({item,listStyle}) {
  return (
    <li key={item.image} style={listStyle}>
          <div className="product-item-img">
              <img src={item.image} alt={item.name}/>
          </div>
          <div className="product-item-data">
              <div className="product-item-details">
                  <h1>{item.name}</h1>
                  <p>{item.type}</p>
              </div>
              <div className="product-item-price">
                  <p>&#8377; {item.price}</p>
              </div>
          </div>
      </li>
  )
}

export default ProductList