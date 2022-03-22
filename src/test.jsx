<header>
{user != 'Guest' ? (
  <div>  
    <p>
      <abbr title="My Cart">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>({count})</span>
      </abbr>
    </p>
    <p><abbr title={user}><i class="fa fa-user-plus" aria-hidden="true"></i></abbr></p>
    <p onClick={signOut}>
        <abbr title="Logout">
          <i class="fa fa-stop-circle-o" aria-hidden="true"></i>
        </abbr>
      </p>
      </div>
      )
  :
    (    
      <div>  
      <p>
        <abbr title="My Cart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>({count})</span>
        </abbr>
      </p>
      <p><abbr title={user}><i class="fa fa-user-plus" aria-hidden="true"></i></abbr></p>
      <p onClick={signOut}>
      <abbr title="End Session">
      <i class="fa fa-stop-circle-o" aria-hidden="true"></i>
      </abbr>
    </p>
        </div>

//     {user != "Guest" ? (
     
//     ) : (
//       <p onClick={signOut}>
//         <abbr title="End Session">
//         <i class="fa fa-stop-circle-o" aria-hidden="true"></i>
//         </abbr>
//       </p>
//     )}
//   </div>
// ) : (
//   ""
)}
</header>

{!user ? (
<div>
  <form>
    <div className="title">
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
    </div>

    <input
      type="text"
      placeholder="Enter your name"
      ref={inputRef}
      label="name"
      onKeyPress={enterKey}
    />
    <div className="access-buttons">
      <h4 className="option">OR</h4>
      <div className="guest" onClick={guestUser}>
        Use as guest
      </div>
    </div>
  </form>
</div>
) : (
<div>
  <h1>Products</h1>
  <div className="products">
    {products.map((product, idx) => (
      <div className="item" key={idx}>
        <img src={product.image} alt="" />
        <h2>{product.name}</h2>
        <h4>{product.price}</h4>
        <button onClick={() => addItem(product)}>Buy</button>
      </div>
    ))}
  </div>
</div>
)}
</div>
);
}

export default App;