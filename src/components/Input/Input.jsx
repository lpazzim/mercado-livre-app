import React from 'react';
import { Link } from 'react-router-dom';
import './Input.scss';


export default function Input(props) {

  function onClick(evt) {
    const { onClick, disabled } = props

    if (!disabled && onClick) {
      props.onClick();
    }
  }

  function onChange(e) {
    props.onChange(e);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      props.onClick();
    }
  }

  return (
    <div className="input-container">
      <input
        placeholder={props.placeholder ? props.placeholder : ''}
        maxLength={props.maxLength ? props.maxLength : 100}
        onChange={(e) => { onChange(e.target.value) }}
        onKeyDown={(e) => handleKeyDown(e)}
        type='text'
      />
      <img src={props.icon ? props.icon : null} className="ico" alt="input-icon" onClick={() => onClick()} disabled={props.disabled} />
    </div>
  );
}
