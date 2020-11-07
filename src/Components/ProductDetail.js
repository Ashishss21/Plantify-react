import React from 'react';
import { Row, Col, Card, Container } from 'reactstrap';
import Payment from './Payment';

const RenderDish = (props) => {
    return (
        <div>
            <Card key={props.detail.id}>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={props.detail.image1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={props.detail.image2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={props.detail.image3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br/><br/>
            </Card><br/>
            <Row>
                <br/><br/>
                <Col><img className="d-block w-100" src={props.detail.image1} /></Col>
                <Col><img className="d-block w-100" src={props.detail.image2} /></Col>
                <Col><img className="d-block w-100" src={props.detail.image3} /></Col>
            </Row>

            <br/><br/><br/><br/>
        </div>
    );
}

const RenderComments = ({ detail }) => {
    return (
        <Container fluid>
            <h3>Details</h3>
            <Row key={detail.id}>
                <Row>{detail.name}</Row><br/>
                <Row className="w-100">
                    <Col md="fluid"><br/>--{detail.description}</Col>
                </Row><br/>
                <br/>
                <h2>Price:-</h2>
                <h3>{detail.price}</h3>

                <select className="browser-default custom-select" id="select">
                    <option>Pot Size</option>
                    <option value="1">0.5 gallons</option>
                    <option value="2">2 gallons</option>
                    <option value="3">4 gallons</option>
                </select><br/>

                    <select className="browser-default custom-select" id="select">
                        <option>Quatity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option><br/>
                    </select><br/>
                    <br/><br/>
                <Row id="row">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" id="btn-secondary">Plastic</button>
                        <button type="button" className="btn btn-secondary" id="btn-secondary">Wooden</button>
                        <button type="button" className="btn btn-secondary" id="btn-secondary">Terracots</button>
                    </div>
                </Row>
                
                
                <Payment />
            </Row>
            <br />
        </Container>
    );
}

const ProductDetail = (props) => {
    console.log("ProductDetail", props)
    if (props.detail != null) {
        return (
            <div className="container"><br/><br/><br/>
                <b className="heading">{props.detail.name}</b><hr/>
                <div className="row">
                </div><br/><br/>
                <div className="row">
                    <br/><br/>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish detail={props.detail} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments detail={props.detail} productID={props.detail.id} />
                    </div>
                </div>
            </div>
        );
    } else return <div></div>
}
export default ProductDetail;
