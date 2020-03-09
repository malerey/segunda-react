import React from 'react';
import camioncito from '../img/truck.svg';

const Card = props => {
  return (
    <div className="card">
      <div className="top">
        <img alt={props.info.title} src={props.info.thumbnail} />
      </div>
      <div className="bottom">
        <div className="details">
          <h5>{props.info.title}</h5>
          <p>$ {props.info.price}</p>
        </div>
        <div className="shipping">
        {props.info.free_shipping && 
          <img alt="envio gratis" src={camioncito}/>}
        </div>
      </div>
    </div>
  );
};

export default Card;
