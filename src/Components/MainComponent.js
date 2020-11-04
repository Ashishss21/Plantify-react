import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomeComponent";
import Contact from './ContactFile';
import Essentials from './Essentials';
import Care from './Care';
import Menu from './MenuComponent';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Cash from './COD';
import Card from './Card';
import UPI from './UPI';
import { DETAILS } from '../Shared/details';
import { PLANTS } from '../Shared/Plants'
import { HOMEFILE } from '../Shared/homefile';
import { Switch, Route, Redirect } from 'react-router-dom';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.cartHandler = this.cartHandler.bind(this)
        this.state = {
            details: DETAILS,
            plants: PLANTS,
            home: HOMEFILE,
        }
    }

    cartHandler(product) {
        let index = this.state.details.indexOf(product)
        let newDetails = [...this.state.details]
        newDetails[index].in_cart = !newDetails[index].in_cart
        this.setState({ details: newDetails })
    }

    onDishSelect(productId) {
        this.setState({ SelectedProduct: productId });
    }


    render() {

        const ProductWithID = ({ match }) => {
            console.log("match", match)
            console.log("Product", this.state.details.filter((detail) => detail.id === parseInt(match.params.productID, 10))[0])
            return (
                <ProductDetail
                    detail={this.state.details.filter((detail) => detail.id === parseInt(match.params.productID, 10))[0]}
                />
            );
        }

        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={() => <Home home={this.state.home} />} />
                    <Route path="/cart" component={() => <Cart details={this.state.details} cartHandler={this.cartHandler} />} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/essentials" component={Essentials} />
                    <Route exact path="/card" component={Card} />
                    <Route exact path="/upi" component={UPI} />
                    <Route exact path="/care" component={() => <Care plant={this.state.plants} />} />
                    <Route exact path="/menu" component={() => <Menu detail={this.state.details} cart={this.state.cart} cartHandler={this.cartHandler} />} />
                    <Route exact path="/menu/:productID" component={ProductWithID} />
                    <Route exact path="/cod" component={Cash} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default MainComponent;