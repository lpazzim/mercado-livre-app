import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MlServices from './../../services/MlServices.js'
import './ProductDetail.scss'


export default function ProductDetail(props) {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [desc, setProductDesc] = useState(null);

  useEffect(() => {
    getProductDetails(id);
    getProductDesc(id);
  }, []);

  function getProductDetails(id) {
    MlServices.getProductDetail(id).then((res) => {
      setProduct(res);
    })
      .catch((error) => {
        return error;
      });
  }

  function getProductDesc(id) {
    MlServices.getProductDescription(id).then((res) => {
      setProductDesc(res);
      console.log('res', res);
    })
      .catch((error) => {
        return error;
      });
  }


  return (
    <div className="product-detail-container">
      <div className="product-information">
        <div className="product-image">
          <div>
            <img src={product ? product.pictures[0].secure_url : null} alt="product-image" />
          </div>
          <div className="right-info">
            <p className="condition"> {product ? product.condition : null} {product ? ` ${product.sold_quantity} vendidos` : null} </p>
            <p className="title"> {product ? product.title : null} </p>
            <p className="price"> {product ? `$ ${product.price}` : null}</p>
            <button> Comprar </button>
          </div>
        </div>
        <div className="product-description">

        </div>
      </div>
      <div className="product-abstract">
        <h3 className="title"> {'Descrição do Produto'} </h3>
        <p className="description"> {desc ? desc[0].plain_text : null} </p>
      </div>
    </div>
  );
}
