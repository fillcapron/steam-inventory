import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/blocks/footer';
import Header from './components/blocks/header';
import Home from './pages/home'
import ItemPage from './pages/itemPage'
import './scss/style.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/item/:id" component={ItemPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
