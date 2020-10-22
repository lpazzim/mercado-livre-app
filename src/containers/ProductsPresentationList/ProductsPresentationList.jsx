import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from './../../components/ItemList/ItemList.jsx';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import MlServices from './../../services/MlServices.js';
import './ProductsPresentationList.scss';


export default function ProductsPresentationList(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data);
  const listBreadcrumbs = products.filters && products.filters.length > 0 ? products.filters[0].values[0].path_from_root : null;

  useEffect(() => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var param = url.searchParams.get("search");
    var limit = url.searchParams.get("limit");
    searchProducts(param, limit);
  }, []);

  function searchProducts(query, limit) {
    MlServices.getProducts(query, limit).then((res) => {
      dispatch({ type: 'ADD_PRODUCTS', data: res });
    })
      .catch((error) => {
        return error;
      });
  }

  return (
    <>
      <div>
        <Breadcrumbs list={listBreadcrumbs} />
      </div>
      <div className="products-presentation-container" key={products}>
        {products && products.results.map((e) => (
          <ItemList item={e} key={e.id} />
        ))
        }
      </div>
    </>

  );
}
