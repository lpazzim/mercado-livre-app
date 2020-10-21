import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemList from './../../components/ItemList/ItemList.jsx';
import MlServices from './../../services/MlServices.js'
import './ProductsPresentationList.scss';


export default function ProductsPresentationList(props) {
  let { search } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var param = url.searchParams.get("search");
    searchProducts(param);   
  }, []);

  function searchProducts(query) {
    MlServices.getProducts(query).then((res) => {
      dispatch({ type: 'ADD_PRODUCTS', data: res.results });
    })
      .catch((error) => {
        return error;
      });
  }
  const products = useSelector(state => state.data);

  return (
    <div className="products-presentation-container" key={products}>
      {products.map((e) => (
        <ItemList item={e} key={e.id} />
      ))
      }
    </div>
  );
}
