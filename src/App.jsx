
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header.jsx';
import Routes from './routes/index.jsx';
import history from './utils/history';
import store from './store'
import './styles/main.scss'

function App(props) {

  return (
    <Provider store={store}>
      <Header />
      <div className="app-container">
        <Router history={history}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Router >
      </div>
    </Provider>
  );
}

export default App;
