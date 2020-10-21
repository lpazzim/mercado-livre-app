import React from 'react';
import { useSelector } from 'react-redux'
import ItemList from './../../components/ItemList/ItemList.jsx';


export default function ProductsPresentationList(props) {
  const products = useSelector(state => state.data);
  return (
    <div className="products-presentation-container">
      {products.map((e) => (
        <ItemList item={e} />
      ))
      }
    </div>
  );
}
