import React from 'react';
import {Button,Modal,ModalHeader,ModalBody,Row,Col,Label} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import { MDBContainer } from 'mdbreact';
import { Link } from 'react-router-dom';


class CommentForm extends React.Component{
    constructor(){
        super();
        this.state={
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }
    handleClick(){
        this.toggleModal();
    }
    render(){
        return(
          <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Payment Method</ModalHeader>
            <ModalBody> 
            <MDBContainer>
                <Row>
                    <label>Cash On Delivery:</label>
                    <Link to="/cod"><button className="btn btn-primary">Continue</button></Link>
                </Row>
                <Row>
                    <label>UPI :</label>
                    <Link to="/upi"><button className="btn btn-primary">Continue</button></Link>
                </Row>
                <Row>
                    <label>CARD :</label>
                    <Link to="/card"><button className="btn btn-primary">Continue</button></Link>
                </Row>
            </MDBContainer>
            </ModalBody>
            </Modal>
            <Button className="mx-auto mt-3" onClick={this.handleClick}>Buy This</Button>
          </React.Fragment>
        );
    }
}

export default CommentForm;