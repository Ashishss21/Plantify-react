import React from 'react';
import {Button,Modal,ModalHeader,ModalBody,Row,Col,Label} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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
    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
    render(){
        return(
          <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>SUPPORT US</ModalHeader>
            <ModalBody> 
            <div className="row row-content pt-2">
                   <div className="col">
                   <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                   <Row className="form-group mx-auto">
                        <Label htmlFor="fullname">Name</Label>
                        <Control.text model=".fullname" id="fullname" name="fullname" placeholder="Full Name" className="form-control" 
                                     validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                     }}/>
                        <Errors
                        className="text-danger"
                        model=".fullname"
                        show="touched"
                        messages={{
                            required: 'The filed cannot be left empty. ',
                            minLength: 'Name must be greater than 2 characters. ',
                            maxLength: 'Name must be 15 characters or less. '
                        }}
                        />
                    </Row>
                   <Row className="form-group mx-auto">
                        <Label htmlFor="message">Email</Label>
                        <Control.text model=".message" id="message" name="message" className="form-control" />
                    </Row>
                   <Row className="form-group mx-auto">
                        <Button type="submit" color="primary">
                            Send Feedback
                        </Button>
                    </Row>
                   </LocalForm>
                   </div>
            </div>
            </ModalBody>
            </Modal>
            <Button className="mx-auto mt-3" onClick={this.handleClick}><i className="fa fa-pencil mr-1" />Support Us</Button>
          </React.Fragment>
        );
    }
}

export default CommentForm;