import React from 'react';
import {Link} from 'react-router-dom';

function Cart(props)
{
    const cards = props.cart.map((home) => {
        return (
          <div className="container">
            <div className="card mx-3" key={home.id} style={{ width:'18rem' }} >
              <img className="card-img-top" src={home.image1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{home.name}</h5>
                <p className="card-text">{home.description1}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Save Plants</li>
                <li className="list-group-item">Plant Are Important</li>
                <li className="list-group-item">Plants Save Environment</li>
              </ul>
              <div className="card-body">
                Remove from cart
              </div>
            </div>
          </div>
        );
      });


        return(
            <div className="d-flex">
                {cards}
            </div>
        );
}


export default Cart;