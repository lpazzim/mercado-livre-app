import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.scss';


export default function ItemList(props) {
  return (
    <div className="item-list-container">
      <div className="item-info">
        <Link to={`/items/${props.item.id}`} className="item-img">
          <img src={props.item.thumbnail ? props.item.thumbnail : null} alt="product-image" />
        </Link>
        <div className="info-description">
          <p className="price" >{props.item.price ? `$ ${props.item.price}` : null}</p>
          <Link className="title" to={`/items/${props.item.id}`}>{props.item.title ? props.item.title : null} </Link>
          <p>{props.item.moreInfo ? props.item.moreInfo : null}</p>
        </div>
      </div>
      <div className="item-location">
        <p className="state-name">{props.item.address ? props.item.address.state_name : null}</p>
      </div>
    </div>
  );
}
