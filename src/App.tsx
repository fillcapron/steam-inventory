import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/blocks/Footer';
import Header from './components/blocks/Header';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';
import './scss/style.scss';

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
