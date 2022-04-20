import { Link } from 'react-router-dom'


function Sneaker({ sneaker }) {
  const {id, brand, media, name, year} = sneaker

  return (
    media.imageUrl === null ? null :
      <li className="Sneaker">
        <section className='details'>
          <p id='year'>{year}</p>
          <p id='brand'>{brand}</p>
        </section>
        <h5>{name}</h5>
        <figure>
          <Link to={`/sneaker/${id}`}>
            <img src={media.imageUrl} alt={name}></img>
          </Link>
        </figure>
      </li>
  );
}

export default Sneaker;
