import { Link } from 'react-router-dom'


function Sneaker({ sneaker }) {
  const {id, brand, image, name,releaseYear} = sneaker

  return (
    image.original === '' ? null :
      <li className="Sneaker">
        <section className='details'>
          <p id='year'>{releaseYear}</p>
          <p id='brand'>{brand}</p>
        </section>
        <h5>{name}</h5>
        <figure>
          <Link to={`/sneaker/${id}`}>
            <img src={image.original} alt={name}></img>
          </Link>
        </figure>
      </li>
  );
}

export default Sneaker;
