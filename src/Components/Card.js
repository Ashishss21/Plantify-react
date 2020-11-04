import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component
{
    render(){
        
        return(
            <React.Fragment>
                <main className="d-flex align-items-center min-vh-100 py-3 py-md-0" id="body"><br/><br/><br/>
                <div className="container">
                <div className="card login-card">
                    <div className="row no-gutters">
                    <div className="col-md-5">
                        <img src="/img/pic1.jpg" alt="login" className="login-card-img" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                        <div className="brand-wrapper">
                            <img src="/img/plantify.png" alt="logo" className="logo" />
                        </div>
                        <p className="login-card-description">Enter your details</p>
                        <form action="#!">
                            <div className="form-group">
                                <label for="Name" className="sr-only">Name</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Email address" />
                            </div>
                            <div className="form-group mb-4">
                                <label for="email" className="sr-only">Email</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="Card No." />
                            </div>
                            <div className="form-group">
                                <label for="Name" className="sr-only">Name</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="Address" />
                            </div>
                            <div className="form-group mb-4">
                                <label for="email" className="sr-only">Email</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="CVV" />
                            </div>
                            <div className="form-group mb-4">
                                <label for="password" className="sr-only">Pin Code</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="OTP" />
                            </div>
                            <Link to="/menu"><input name="Confirm order" id="login" className="btn btn-block login-btn mb-4" type="button" value="Confirm Order" /></Link>
                            </form>
                            <nav className="login-card-footer-nav">
                            <a href="#!">Terms of use.</a>
                            <a href="#!">Privacy policy</a>
                            </nav>
                        </div>
                    </div>
                    </div>
                </div>
               </div>
            </main>
            </React.Fragment>
        );
    }
}

export default Card;