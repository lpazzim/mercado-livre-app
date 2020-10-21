import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../assets/Logo_ML2.png';
import searchIcon from '../../assets/ic_Search.png';
import Input from '../Input/Input.jsx'
import MlServices from './../../services/MlServices.js'
import './Header.scss';


export default function Header(props) {
    const [querySearch, setQuerySearch] = useState('');
    const dispatch = useDispatch();

    function searchProducts(query) {
        MlServices.getProducts(query).then((res) => {
            dispatch({ type: 'ADD_PRODUCTS', data: res.results });
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
                        onChange={(e) => setQuerySearch(e)}
                        onClick={() => { searchProducts(querySearch) }
                        }
                    />
                </div>
            </div>
        </div>
    );
}
