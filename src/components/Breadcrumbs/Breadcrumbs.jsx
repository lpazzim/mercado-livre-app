import React from 'react';
import './Breadcrumbs.scss';


export default function Input(props) {
  return (
    <div className="breadcrumbs-container">
      {props.list ? props.list.map((e) => (
        <div className="breadcrumb-item">
          <span> {`${e.name}`}</span>
          <span className="tag"> {' >'} </span>
        </div>
      ))
        : null}
    </div>
  );
}
