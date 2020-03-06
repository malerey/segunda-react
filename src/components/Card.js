import React from 'react';
import './Card.css';

const Card = props => {
  console.log(props)
  return (
    <div className="card">
      <div className="img">
        <img src={props.info.thumbnail}></img>
        <h5>{props.info.title}</h5>
        <h6>{props.info.price}</h6>

        <h6>Condicion: {props.info.condition}</h6>
        <h6>Envio gratuito: {props.info.free_shipping.toString()}</h6>
      </div>

    </div>
  );
};

export default Card;
