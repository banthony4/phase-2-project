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
          <SneakerContainer sneakers={sneakers} />
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