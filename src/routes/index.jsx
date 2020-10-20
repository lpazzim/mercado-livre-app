import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SearchResult from '../containers/SearchResult/SearchResult.jsx';
import Main from './../containers/Main/Main.jsx'

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/items" exact component={SearchResult} />
    </Switch>
  );


}