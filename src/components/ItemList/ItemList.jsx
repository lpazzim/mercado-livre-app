import React from 'react';
import './ItemList.scss';


export default function ItemList(props) {
  return (
    <div className="item-list-container">
      <div className="item-info">
        <div className="item-img">
          <img src={props.item.thumbnail ? props.item.thumbnail : null} alt="product-image" />
        </div>
        <div className="info-description">
          <p className="price" >{props.item.price ? `$ ${props.item.price}` : null}</p>
          <p className="title">{props.item.title ? props.item.title : null}</p>
          <p>{props.item.moreInfo ? props.item.moreInfo : null}</p>
        </div>
      </div>
      <div className="item-location">
        <p className="state-name">{props.item.address ? props.item.address.state_name : null}</p>
      </div>
    </div>
  );
}
