import React from 'react';
import image from "../img/X2oObC4.png"
import CardContent from './CardContent';
import Filter from './Filter';
import "./style.css"
const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <img src={image} />
      </div>
      <div className="card__body">
       <Filter></Filter>
       <CardContent></CardContent>
      </div>
    </div>
  );
};

export default Card;