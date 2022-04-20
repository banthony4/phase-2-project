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
  const [collection, setCollection] = useState([])
  const [wishlist, setWishlist] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/sneakers')
    .then(r => r.json())
    .then(data => setSneakers(data))
  }, []) 

  const addToCollection = (sneak) => {
    console.log(sneak)
    setCollection(sneakers.filter(kick => kick.id === sneak.id))
  }
  const addToWishlist = (sneak) => {
    console.log(sneak)
    setWishlist(sneakers.filter(kick => kick.id === sneak.id))
  }

  return (
    <div className="App">
      <Header className="App-header">
        Sneaker App
      </Header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/sneakers" >
          <SneakerContainer sneakers={sneakers} />
        </Route>
        <Route path="/sneaker/:id" >
          <SneakerDetails addToCollection={addToCollection} addToWishlist={addToWishlist} />
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