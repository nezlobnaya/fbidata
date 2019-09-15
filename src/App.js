import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import DataList from './components/DataList';
import SearchForm from './components/SearchForm';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Route path='/' component={DataList} />
      <Route path='/search' render={props => <SearchForm />} />

    </div>
  );
}

export default App;
