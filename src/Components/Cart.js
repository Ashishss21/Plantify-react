import React from 'react';
import { Modal, Col, span, Button, Row, Container } from 'react-bootstrap'
import "../awayFromTop.css"

class Cart extends React.Component {
  constructon() {
    this.sumUp = this.sumUp.bind(this)
    this.modalHide = this.modalHide.bind(this)
  }

  state = {
    modalShow: false,
    out: [],
    total: 0
  }

  cards() {
    return this.props.details.map((home) => {
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
                <button className="btn btn-primary" onClick={() => this.props.cartHandler(home)} >
                  {home.in_cart ? "Remove" : "Add"}
                </button>
              </div>
            </div>
          </Col>
        );
      }
    })
  }

  modalHide() {
    this.setState({ modalShow: false })
  }
  sumUp() {
    let sum = 0
    let outProduct = this.props.details.filter(product => product.in_cart)
    console.log(outProduct)
    outProduct.forEach(product => sum += parseInt(product.price.split('$')[1]))
    this.setState({ total: sum })
    this.setState({ out: outProduct })
    this.setState({ modalShow: !this.state.modalShow })
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid className="awayFromTop">
          <Row>
            {this.cards()}
          </Row>
          <Row>
            <button className="btn btn-primary" onClick={() => this.sumUp()}>
              Sum Up
          </button>
          </Row>
          <Modal show={this.state.modalShow} onHide={() => this.modalHide()} size="lg">
            <Modal.Header closeButton>
              Place Order
            </Modal.Header>
            <Modal.Body>
              {this.state.out.map(e => {
                return (
                  <Row>
                    <Col>{e.name}</Col>
                    <Col>{e.price}</Col>
                  </Row>
                )
              })}
            </Modal.Body>
            <Modal.Footer>
              Total: {this.state.total}
            </Modal.Footer>
          </Modal>
        </Container>
      </React.Fragment>
    );
  }
}


export default Cart;