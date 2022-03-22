export default function User({ user, count, shopMore}) {
  const images = [
    "https://cdn.pixabay.com/photo/2016/08/22/12/16/wink-1611815__480.png",
    "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972__480.png",
    "https://cdn.pixabay.com/photo/2020/05/24/13/57/luck-5214413__480.jpg",
    "https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967__480.jpg",
    "https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518__340.png",
    "https://cdn.pixabay.com/photo/2016/08/22/11/00/emoticon-1611718__340.png",
    "https://cdn.pixabay.com/photo/2016/08/28/17/18/emoticon-1626442__480.png",
    "https://cdn.pixabay.com/photo/2016/09/10/14/54/emoticon-1659233__480.png",
    "https://cdn.pixabay.com/photo/2016/09/30/20/20/smiley-1706235__340.jpg",
  ];

  const userImg = Math.floor(Math.random() * images.length);

  return (
    <div>
      <div className="user-page">
        <img className="user-image" src={images[userImg]} alt="" />
        <h2>{user}</h2>
        <p>
          Hi {user}! You currently have {count} item(s) in your shopping cart.
        </p>
        <button className="shop-more" onClick={shopMore}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
