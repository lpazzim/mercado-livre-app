import React from 'react';
import { Link } from 'react-router-dom';


export default function Main(props) {
  return (
    <div className="main-container">
      <p>Principal</p>
      <Link to="/items" replace />
    </div>
  );
}
