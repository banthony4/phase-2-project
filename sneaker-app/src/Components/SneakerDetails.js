import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SneakerDetails({ addToCollection, addToWishlist }) {
  const [sneaker, setSneaker] = useState({})
  const { id } = useParams();

  const { image, name, story, releaseDate, retailPrice } = sneaker
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
        'X-RapidAPI-Key': '114304eb3bmshd241e59ec60bb79p1a3acbjsne5e39a45f3af'
      }
    };
    fetch(`https://the-sneaker-database.p.rapidapi.com/sneakers/${id}`, options)
      .then(response => response.json())
      .then(sneak => setSneaker(sneak.results[0]))
  },[id])

  return (
    <div className="SneakerDetails">
      <h1>Sneaker Details:</h1>
      {image ? <img id="details-img" src={image.small} alt={name}></img> : null}
      <h3>Name: {name}</h3>
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