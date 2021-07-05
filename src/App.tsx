import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from './blocks/header/header';
import Home from './pages/Home/home'
import ItemPage from './pages/ItemPage/itemPage'

function App() {
  return (
    
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/item/:id" component={ItemPage}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
