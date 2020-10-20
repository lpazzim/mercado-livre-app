import React, { useState } from 'react';
import logo from '../../assets/Logo_ML2.png';
import searchIcon from '../../assets/ic_Search.png';
import Input from '../Input/Input.jsx'
import MlServices from './../../services/MlServices.js'
import './Header.scss';


export default function Header(props) {
    const [querySearch, setQuerySearch] = useState('');

    function searchProducts(query) {
        console.log('aqui');
        MlServices.getProducts(query).then((res) => {
            console.log('res', res)
        })
            .catch((error) => {
                return error;
            });
    }



    return (
        <div className="header-container">
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <div className="input-search">
                    <Input
                        placeholder="Buscar produtos, marcas e muito mais…"
                        maxLength={120}
                        icon={searchIcon}
                        onChange={(e) =>  setQuerySearch(e)}
                        onClick={() => { searchProducts(querySearch) }
                        }
                    />
                </div>
            </div>
        </div>
    );
}
