import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';


const Theory = () => {
  return (
    <React.Fragment>
      <img src="/care/bring.jpg" className="img-fluid" alt="Responsive image" />
      <br /><br />
      <MDBContainer>
        <b className="heading">MENU</b>
      </MDBContainer>
    </React.Fragment>
  );
}

class RenderMenu extends React.Component {
  constructor(props) {
    super(props)
    this.in_cart_request = this.in_cart_request.bind(this)
  }

  state = {
    in_cart: false
  }

  //to handle 'add in cart request'
  in_cart_request() {
    // this.setState({ in_cart: !this.state.in_cart }, () => {
    //   console.log("in_cart", this.state.in_cart)
    // })

    let itis = false
    this.props.cart.forEach(product => {
      if (product.id == this.props.detail.id) itis = true
    })

    if (itis) this.props.removeFromCart(this.props.detail)
    else this.props.addInCart(this.props.detail)
  }

  render() {
    return (
      <Row className="carding">
        <div className="col-md-12">
        <div className="container" >
          <div className="card mx-3">
            <img className="card-img-top" src={this.props.detail.image1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{this.props.detail.name1}</h5>
              <p className="card-text">{this.props.detail.description1}</p>
            </div>
            <div className="card-body">
              <button type="button" className="btn btn-primary" onClick={this.in_cart_request}>{this.state.in_cart == true ? "Remove" : "Add"}</button><br />
              <Link to={`/menu/${this.props.detail.id}`} ><button type="button" className="btn btn-primary">View Product</button></Link>
            </div>
          </div>
        </div>
        </div>
      </Row>
    );
  }
}

class Menu extends React.Component {

  render() {
    return (
      <div>
        <Theory />
        <br /><br />
        <Row>
          <div className="col-md-4" id="column">
          {this.props.detail.map((detail) => {
            return (
              <div key={detail.id}>
                <RenderMenu detail={detail} addInCart={this.props.addInCart} cart={this.props.cart} removeFromCart={this.props.removeFromCart} />
              </div>
            );
          })}
          </div>
        </Row>
      </div>
    );
  }
}

export default Menu;