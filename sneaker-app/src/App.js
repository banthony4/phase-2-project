import {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom';

import SneakerCollection from './Components/SneakerCollection';
import Header from './Components/Header'
import WishList from "./Components/WishList";
import SneakerContainer from './Components/SneakersContainer';
import SneakerDetails from './Components/SneakerDetails';
import Home from './Components/Home';

function App() {
  const [sneakers, setSneakers] = useState([])
  const [mostPopular, setMostPopular] = useState([])
  const [collection, setCollection] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [search, setSearch] = useState("")
  const [brandSelect, setBrandSelect] = useState('All')
  const [genderSelect, setGenderSelect] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:4000/sneakers')
    .then(r => r.json())
    .then(data => setSneakers(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:4000/popular')
    .then(r => r.json())
    .then(data => setMostPopular(data))
  }, []) 
  useEffect(() => {
    fetch('http://localhost:4000/collection')
    .then(r => r.json())
    .then(data => setCollection(data))
  }, []) 
  useEffect(() => {
    fetch('http://localhost:4000/wishlist')
    .then(r => r.json())
    .then(data => setWishlist(data))
  }, []) 

  const addToCollection = (newSneaker) => {
    setCollection(sneaks => [...sneaks, newSneaker])
  }
  const addToWishlist = (newSneaker) => {
    setWishlist(sneaks => [...sneaks, newSneaker])
  }

  const filterSneakers = () => {
    let filteredSneaks = [...sneakers]
    if (search === '') {
      filteredSneaks = [...sneakers]
    } else {
      filteredSneaks = [...sneakers].filter(sneak => sneak.name.toLowerCase().includes(search.toLowerCase()) || sneak.shoe.toLowerCase().includes(search.toLowerCase()))
    } 

    let filteredSneaks2 = [...filteredSneaks]
    if(brandSelect === 'All') {
      filteredSneaks2 = [...filteredSneaks]
    } else {
      filteredSneaks2 = [...filteredSneaks].filter(sneak => sneak.brand.toLowerCase() === brandSelect.toLowerCase())
    }

    let filteredSneaks3 = [...filteredSneaks2]
    if(genderSelect === '') {
      filteredSneaks3 = [...filteredSneaks2]
    } else {
      filteredSneaks3 = [...filteredSneaks2].filter(sneak => sneak.gender.toLowerCase() === genderSelect.toLowerCase())
    }
    return filteredSneaks3
  }

  return (
    <div className="App">
      <Header className="App-header">
        Sneaker App
      </Header>
      <Switch>
        <Route exact path='/'>
          <Home mostPopular={mostPopular}/>
        </Route>
        <Route path="/sneakers/:id/details" >
          <SneakerDetails addToCollection={addToCollection} addToWishlist={addToWishlist} />
        </Route>
        <Route path="/sneakers" >
          <SneakerContainer sneakers={filterSneakers()} setSearch={setSearch} setBrand={setBrandSelect} setGender={setGenderSelect} />
        </Route>
        <Route path='/sneakercollection' >
          <SneakerCollection collection={collection} />
        </Route>
        <Route path="/wishlist" >
          <WishList wishlist={wishlist} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;