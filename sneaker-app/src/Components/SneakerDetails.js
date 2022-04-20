import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SneakerDetails({ addToCollection, addToWishlist }) {
  const [sneaker, setSneaker] = useState({})
  const { id } = useParams();

  
  useEffect(() => {
    fetch(`http://localhost:4000/sneakers/${id}`)
    .then(r => r.json())
    .then(sneak => setSneaker(sneak))
  },[id])
  
  const { image, name, story, releaseDate, retailPrice } = sneaker
  
  return (
    <div className="SneakerDetails">
      <h1>Sneaker Details:</h1>
      <h3>Name: {name}</h3>
      <img id="details-img" src={image} alt={name}></img>
      <p>Release Date: {releaseDate}</p>
      <p>Price: {retailPrice}</p>
      <p>Story:</p>
      {story ? <p>{story}</p> : 'N/A'}
      <br></br>
      <button onClick={() => addToCollection(sneaker)}>Buy Now</button>
      <button onClick={() => addToWishlist(sneaker)} >Add to Wishlist</button>
    </div>
  );
}

export default SneakerDetails;