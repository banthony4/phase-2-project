import Sneaker from './Sneaker'

function SneakerContainer({ sneakers, setSearch, setBrand, setGender }) {

  const renderSneakers = () => {
    return sneakers.map(sneak => {
      return <Sneaker key={sneak.id} sneaker={sneak} />
    })
  }

  const handleChange = (e) => {
    if(e.target.checked){
      setGender(e.target.value)
    } else {
      setGender('')
    }
  }

  return (
    <div>
      <br></br>
      <div className='filters'>
      <strong>Set Filters:</strong>
      <br></br>
        <label >
          Search:
          <input tpye='text' name='name' onChange={(e) => setSearch(e.target.value)}/>
        </label>
      <br></br>
      <br></br>
        <label>
          Select Brand:
          <select name='brand' onChange={(e) => setBrand(e.target.value)}>
          <option value='All'>All</option>
            <option value='nike'>Nike</option>
            <option value='adidas'>Adidas</option>
            <option value='converse'>Converse</option>
            <option value='jordan'>Air Jordan</option>
          </select>
        </label>
      <br></br>
        <br></br>
        <label>
          Mens
          <input  type='checkbox' value='men' name='gender' onChange={handleChange}/>
        </label>
        <br></br>
        <label>
          Womens
          <input type='checkbox' value='women' name='gender' onChange={handleChange}/>
        </label>
      </div>
      <ul>
        {renderSneakers()}
      </ul>
    </div>
  );
}

export default SneakerContainer;
