import { Link } from 'react-router-dom'


function Sneaker({ sneaker }) {
  const {id, brand, image, name, year} = sneaker

  return (
    image ? 
      <li className="Sneaker">
        <section className='details'>
          <p id='year'>{year}</p>
          <p id='brand'>{brand}</p>
        </section>
        <h5>{name}</h5>
        <figure>
          <Link to={`/sneakers/${id}/details`}>
            <img src={image} alt={name}></img>
          </Link>
        </figure>
      </li>
      : null
  );
}

export default Sneaker;
