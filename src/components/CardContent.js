import React from 'react';
import CardToDo from './CardToDo';

const CardContent = () => {
  return (
    <div className="card__content">
      <div className="card__title">
        <h2>My Tasks</h2>
        <p className="dateTask"></p>
      </div>
      <CardToDo></CardToDo>
    </div>
  );
};

export default CardContent;