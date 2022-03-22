import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/Home';
import User from './components/User';
// import FlashMessage from 'react-flash-message';
// import { Route } from "react-router-dom";
// import "../css/product.module.css";


const PRODUCTS = 'products';
const CART = 'cart';
const USER = 'user';

function App() {
  const [user, setUser] = useState(null);
  const [title] = useState("Welcome to Jeanette");
  const [subtitle] = useState(".....the luxury online marketplace");
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(PRODUCTS);
  // const [message, setMessage] = useState('');


  const products = [
    {
      name: "Tesla Y 2022 model",
      price: "$65,083",
      image:
        "https://images.hgmsites.net/hug/2021-tesla-model-y-iihs-crash-testing_100821475_h.jpg",
    },

    {
      name: "iPhone 13 pro max",
      price: "$1,599",
      image:
        "https://store.bellestoreinc.com/wp-content/uploads/2021/09/AA55865A-AF0A-4AD0-9B85-4F819BCD84E4.png",
    },
    {
      name: "Camera",
      price: "$10,083",
      image:
        "https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_1280.jpg",
    },
    {
      name: "Mercedes Benz",
      price: "$55,099",
      image:
        "https://cdn.pixabay.com/photo/2016/04/17/22/10/mercedes-benz-1335674__340.png",
    },
    {
      name: "Jacob & Co. Astronomia Casino",
      price: "$102,620",
      image:
        "https://deployant.com/wp-content/uploads/2019/09/jacob-astronomia-casino-wrist.jpg",
    },
    {
      name: "Hermes Birkin bag",
      price: "$630,000",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/249480781-959830801624054-7384368419871544269-n-1639663103.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
    },
  ];

  const inputRef = useRef(); 
  

  // useEffect(() => {
  //   const cartGoods = localStorage.getItem("cart");
  //   localStorage.getItem("cart", cartGoods);
  // }, []);


  // useEffect(() => {
  //   const cartGoods = JSON.stringify(cart);
  //   localStorage.setItem("cart", cartGoods);
  // }, [cart]);



  useEffect(() => {
    const temp = localStorage.getItem("user");
    const registeredUser = JSON.parse(temp);

    if (registeredUser) {
      setUser(registeredUser);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem("user", temp);
  }, [user]);


  const guestUser = (e) => {
    e.preventDefault();
    setUser("Guest");
    localStorage.setItem("user");
    // setUser(e.target.value);
  };

  const enterKey = (e) => {
    e.key === "Enter" ? setUser(inputRef.current.value) : setUser(null);
  };

  // function message(product, idx){
  //   <FlashMessage duration={700}>
  //     <h6>{message}</h6>
  //   </FlashMessage>
  // }

  const addItem = (product) => {
    setCart([...cart, product]);
    setCount(count + 1);
    // const items = localStorage.getItem("items");
    // message();
  };

  const removeItem = (deleteProduct, idx) => {
    const newCart = cart.filter((product) => product !== deleteProduct);
    setCart(newCart);
    setCount(newCart.length);
  };
  
    const shopMore = () => {
      setPage(PRODUCTS);
    };


  const goTo = (clickedPage) => {
    setPage(clickedPage);
  }

  const signOut = (e) => {
    localStorage.clear();
    e.preventDefault();
    setUser(null);
    setCart([]);
    setCount(0);
    setPage(PRODUCTS);
  };

  // const productsPage = () => (
  //   <>
  //     <h1>Products</h1>
  //     <div className="products">
  //       {products.map((product, idx) => (
  //         <div className="item" key={idx}>
  //           <img className='image' src={product.image} alt="" />
  //           <h2>{product.name}</h2>
  //           <h4>{product.price}</h4>
  //           <button onClick={() => addItem(product)}>Buy</button>
  //           <div>
  //           {message}
  //       </div>
  //         </div>
  //       ))}
      
  //     </div>
  //   </>
  // );



  return (
    <div className="App">
      <header>
        {!user ? (
          ""
        ) : (
          <>
          <div className='product'>
          <h5 onClick={() => goTo(PRODUCTS)} className="icon icon-product">
              PRODUCTS
            </h5>
          </div>
          <div>
         
            <p onClick={() => goTo(CART)}className="icon">
              <abbr title="My Cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              </abbr>
              <span>{count}</span>
            </p>
            <p onClick={() => goTo(USER)} className="icon">
              <abbr title={user}>
                <i class="fa fa-user-plus" aria-hidden="true"></i>
              </abbr>
            </p>

            {user && user !== "Guest" ? (
              <p className="signout" onClick={signOut}>
                <abbr title="Logout">
                  <i class="fa fa-stop-circle-o" aria-hidden="true"></i>{" "}
                </abbr>
              </p>
            ) : (
              <p className="signout" onClick={signOut}>
                <abbr title="End Session">
                  <i class="fa fa-stop-circle-o" aria-hidden="true"></i>
                </abbr>
              </p>
            )}
          </div>
          </>
        )}
      </header>

      {!user ? (
        <Home title={title} subtitle={subtitle} enterKey={enterKey} guestUser={guestUser} inputRef={inputRef}/>
      ) : (
        <div>
          {/* {page === PRODUCTS && productsPage()} */}
          {/* {page === CART && cartPage()} */}
          {page === 'products' && <Products addItem={addItem} products={products} cart={cart} setCart={setCart} count={count} setCount={setCount} signOut={signOut}/>}
          {page === 'cart' && <Cart cart={cart} setCart={setCart} removeItem={removeItem} shopMore={shopMore}/>}
          {page === 'user' && <User user={user} count={count} shopMore={shopMore}/>}
        </div>
      )}
    </div>
  );
}

export default App;

