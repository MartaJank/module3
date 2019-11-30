import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h4 className="card-title">{props.title}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}

export default Card;
