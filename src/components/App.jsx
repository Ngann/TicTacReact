import React from 'react';
import Header from './Header';
import CardList from './CardList';
import { Switch, Route } from 'react-router-dom';
import NewCardForm from './NewCardForm';
import NewCardControl from './NewCardControl';
import ImageExample from './ImageExample';
import Error404 from './Error404';
import ExampleClassComponent from './ExampleFunctionalComponent'

function App(){
  return (
    <div>
      <Header/>
      <ExampleClassComponent/>
      <ImageExample/>
      <Switch>
        <Route exact path='/' component={CardList} />
        <Route path='/newcard' component={NewCardControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
