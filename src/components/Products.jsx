import React from 'react';

export default function ProductsPage ({products, cart, setCart, count, setCount, addItem, signOut}){
  return(
    <>
    <h1>Products</h1>
         <div className="products">
           {products.map((product, idx) => (
             <div className="item" key={idx}>
               <img className='image' src={product.image} alt="" />
               <h2>{product.name}</h2>
               <h4>{product.price}</h4>
             
               <button onClick={() => addItem(product)}>Buy</button>
               {/* <div className={addItem ? 'view' : 'hide'}>
               <h5>{message}</h5>
               </div> */}
             </div>
           ))}
         </div>
   </>
  )
  
}