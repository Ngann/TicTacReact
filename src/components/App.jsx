import React from 'react';
import Header from './Header';
import CardList from './CardList';
import { Switch, Route } from 'react-router-dom';
import NewCardForm from './NewCardForm';
import ImageExample from './ImageExample';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <ImageExample/>
      <Switch>
        <Route exact path='/' component={CardList} />
        <Route path='/newcard' component={NewCardForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
