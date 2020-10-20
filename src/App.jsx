
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Routes from './routes/index.jsx';
import history from './utils/history';
import './styles/main.scss'

function App(props) {

  return (
    <>
      <Header />
      <Router history={history}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Router >
    </>
  );
}

export default App;
