import React, { Component } from 'react';
import { catalog } from './../data/mock.json';

const Items = ({name, imageURL, currency, price } ) => catalog.map((data) =>
  <div className="product">
    <img src={data.imageURL} alt= "imagen"/>
    <p> {data.name} </p>
    <p> {data.currency} {data.price} </p>
    <button>Add</button>
  </div>);


export default Items;