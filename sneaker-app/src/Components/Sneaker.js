
function Sneaker({ sneaker }) {
  const {brand, image, name,releaseYear} = sneaker



  return ( 
    image.small === '' ? null :
    <li className="Sneaker">
      <section className='details'>
        <p id='year'>{releaseYear}</p>
        <p id='brand'>{brand}</p>
      </section>
      <h5>{name}</h5>
      <figure>
        <img src={image.original} alt={name}></img>

      </figure>
    </li>
  );
}

export default Sneaker;
