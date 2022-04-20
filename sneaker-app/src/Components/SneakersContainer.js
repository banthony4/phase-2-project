import Sneaker from './Sneaker'

function SneakerContainer({ sneakers }) {
  const RenderSneakers = () => {
    return sneakers.map(sneak => {
      return <Sneaker key={sneak.id} sneaker={sneak} />
    })
  }
  return (
    <div>
      {/* <form>
        <label>Search:</label>
        <input tpye='text' id='name' name='name' ></input>
        <label>Select Brand:</label>
        <select id='brand' name='brand'>
          <option value='nike'>Nike</option>
          <option value='adidas'>Adidas</option>
          <option value='converse'>Converse</option>
          <option value='jordan'>Air Jordan</option>
          <option value='yeezy'>Yeezy</option>
          <option value='reebok'>Reebok</option>
        </select>
        <input type='checkbox' id='mens' name='mens'>Mens</input>
        <input type='checkbox' id='womens' name='womens'>Womens</input>
      </form> */}
      <ul className="SneakerCollection">
        {RenderSneakers()}
      </ul>
    </div>
  );
}

export default SneakerContainer;
