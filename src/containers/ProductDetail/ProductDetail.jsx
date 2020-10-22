import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MlServices from './../../services/MlServices';
import { formatCurrencyAR } from "../../utils/utils";
import './ProductDetail.scss';


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
            <img src={product ? product.pictures[0].secure_url : null} alt="product" />
          </div>
          <div className="right-info">
            <p className="condition"> {product ? product.condition : null} {product ? ` ${product.sold_quantity} vendidos` : null} </p>
            <h1 className="title"> {product ? product.title : null} </h1>
            <p className="price"> {product ? `$ ${formatCurrencyAR(product.price)}` : null}</p>
            <button> Comprar </button>
          </div>
        </div>
        <div className="product-description">

        </div>
      </div>
      <div className="product-abstract">
        <h1 className="title"> {'Descrição do Produto'} </h1>
        <p className="description"> {desc ? desc[0].plain_text : null} </p>
      </div>
    </div>
  );
}
