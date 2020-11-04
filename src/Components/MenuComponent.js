import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardTitle, CardText, CardImg, Container } from 'reactstrap';


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
  render() {
    return (
      <Col className="my-3" lg={3} sm="6" xs="auto" md="auto" >
        <Card>
          <CardImg src={this.props.detail.image1}>
            {/* <img src={this.props.detail.image1} alt="Card image cap" /> */}
          </CardImg>
          <CardBody>
            <CardTitle>{this.props.detail.name1}</CardTitle>
            <CardText>{this.props.detail.description1}</CardText>
            <button type="button" className="btn btn-primary" onClick={() => { this.props.in_cart_request(this.props.detail) }}>{this.props.detail.in_cart ? "REMOVE" : "ADD"}</button><br />
            <Link to={`/menu/${this.props.detail.id}`} ><button type="button" className="btn btn-primary">View Product</button></Link>
          </CardBody>
        </Card>
      </Col>
      // <Col className="my-0" lg={8} sm="6" xs="auto"  >
      //   <div className="card">
      //     <img className="card-img-top" src={this.props.detail.image1} alt="Card image cap" />
      //     <div className="card-body">
      //       <h5 className="card-title">{this.props.detail.name1}</h5>
      //       <p className="card-text">{this.props.detail.description1}</p>
      //     </div>
      //     <div className="card-body">
      //       <button type="button" className="btn btn-primary" onClick={() => { this.props.in_cart_request(this.props.detail) }}>{this.props.detail.in_cart ? "REMOVE" : "ADD"}</button><br />
      //       <Link to={`/menu/${this.props.detail.id}`} ><button type="button" className="btn btn-primary">View Product</button></Link>
      //     </div>
      //   </div>
      // </Col>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.in_cart_request = this.in_cart_request.bind(this)
  }

  //to handle 'add in cart request'
  in_cart_request(detail) {
    // this.setState({ in_cart: !this.state.in_cart }, () => {
    //   console.log("in_cart", this.state.in_cart)
    // })

    // let itis = false
    // this.props.cart.forEach(product => {
    //   if (product.id == detail.id) itis = true
    // })
    this.props.cartHandler(detail)
  }

  render() {
    return (
      <Container fluid>
        <Theory />
        <br /><br />
        <Row>
          {this.props.detail.map((detail) => {
            return (
              <RenderMenu key={detail.id} detail={detail} in_cart_request={this.in_cart_request} />
            );
          })}
        </Row>
      </Container >
    );
  }
}

export default Menu;