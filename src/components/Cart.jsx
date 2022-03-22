import React from 'react'

export default function Cart ({cart, removeItem, shopMore}){


return (
  <div>
    <h1>Cart</h1>
    {cart.length !== 0 ? (
      <div className="cart">
        {cart.map((product, idx) => (
          <div className="item" key={idx}>
            <img className='image' src={product.image} alt="" />
            <h2>{product.name}</h2>
            <h4>{product.price}</h4>
            <button className="remove" onClick={() => removeItem(product, idx)}>
              Remove
            </button>
            {/* <h5 className={''}>{message}</h5> */}
          </div>
        ))}
      </div>
    ) : (
      <div className="empty-cart">
        <img className='empty-img' src='https://cdn.pixabay.com/photo/2016/08/31/20/31/emoticon-1634586__480.png' alt=''/>
        <p>Nothing here.....</p>
        <button className='shop-more' onClick={shopMore}>Continue Shopping</button>
        </div>
    )}
  </div>
);
}
