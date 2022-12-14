import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">E-Commerce</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign IN</a>
            </div>
        </header>
        <main>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/' component={HomeScreen} exact={true}></Route>
        </main>
        <footer className="row center">
            All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
