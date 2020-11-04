import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap'
import "../awayFromTop.css"

function Cart(props) {
  const cards = props.details.map((home) => {
    if (home.in_cart) {
      return (
        <Col className="my-4" lg={3} sm="6" xs="auto" md="auto">
          <div className="card mx-3" key={home.id} style={{ width: '18rem' }} >
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
              <button className="btn btn-primary" onClick={() => props.cartHandler(home)} >
                {home.in_cart ? "Remove" : "Add"}
              </button>
            </div>
          </div>
        </Col>
      );
    }
  });


  return (
    <React.Fragment>
      <Container fluid className="awayFromTop">
        <Row>
          {cards}
        </Row>
      </Container>
    </React.Fragment>
  );
}


export default Cart;