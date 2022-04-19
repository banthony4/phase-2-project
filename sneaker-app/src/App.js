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
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
        'X-RapidAPI-Key': '114304eb3bmshd241e59ec60bb79p1a3acbjsne5e39a45f3af'
      }
    };
    fetch('https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100', options)
    .then(response => response.json())
    .then(response => setSneakers(response.results))
    .catch(err => console.error(err));
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