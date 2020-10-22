import React, { useState } from 'react';
import logo from '../../assets/Logo_ML2.png';
import searchIcon from '../../assets/ic_Search.png';
import Input from '../Input/Input.jsx';
import './Header.scss';


export default function Header(props) {
  const [querySearch, setQuerySearch] = useState('');
  const limit = 4;

  function redirectToSearch(query) {
    if (query) {
      window.location.href = `${window.location.origin}/items?search=${query}&limit=${limit}`
    }
  }

  function redirectToHome() {
    window.location.href = window.location.origin;
  }

  return (
    <div className="header-container">
      <div className="header">
        <img src={logo} className="logo" alt="logo" onClick={() => redirectToHome()} />
        <div className="input-search">
          <Input
            placeholder="Buscar produtos, marcas e muito mais…"
            maxLength={120}
            icon={searchIcon}
            onChange={(e) => setQuerySearch(e)}
            onClick={() => { redirectToSearch(querySearch) }
            }
          />
        </div>
      </div>
    </div>
  );
}
