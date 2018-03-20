import React, { Component } from 'react';
import Items from './../Items/'

class Cart extends Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div className="total">
        <span>Total:</span>
      </div>
    )
  }

  addCart() {
    console.log('click');
  }
};



export default Cart;