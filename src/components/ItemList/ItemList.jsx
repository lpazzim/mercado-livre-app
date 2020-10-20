import React from 'react';
import './ItemList.scss';


export default function ItemList(props) {
  return (
    <div className="item-list-container">
      <div className="item-img">
        <img src={props.image ? props.image : null} alt="product-image" />
      </div>
      <div className="item-info">
        <p>{props.description ? props.description : null}</p>
        <p>{props.moreInfo ? props.moreInfo : null}</p>
      </div>
      <div className="item-location">
        <p>{props.location ? props.location : null}</p>
      </div>
    </div>
  );
}
