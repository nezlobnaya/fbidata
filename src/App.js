import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import DataList from './components/DataList';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import styled from 'styled-components';

const Container =styled.div`
    display: flex;
    flex-wrap: wrap;
`

function App(props) {
  console.log('App props',props);
  return (
    <Container>
      <Navigation />
        <Route exact path='/' component={DataList} />
        <Route path='/search/' component={SearchForm} />
    </Container>
  );
}

export default App;
