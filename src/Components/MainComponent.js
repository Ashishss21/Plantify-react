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

        this.state = {
            details: DETAILS,
            plants: PLANTS,
            home: HOMEFILE,
            cart: []
        }
        this.addInCart = this.addInCart.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
    }

    addInCart(product) {
        let newCart = [...this.state.cart]
        newCart = newCart.concat(product)
        this.setState({ cart: newCart }, () => {
            console.log("Add", this.state.cart)
        })
    }

    removeFromCart(product) {
        let newCart = [...this.state.cart]
        let newArr = newCart.filter(e => {
            if (e.id != product.id) return e
        })
        this.setState({ cart: newArr }, () => {
            console.log("Remove", this.state.cart)
        })
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
                    <Route path="/cart" component={()=> <Cart cart={this.state.cart} /> } />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/essentials" component={Essentials} />
                    <Route exact path="/card" component={Card} />
                    <Route exact path="/upi" component={UPI} />
                    <Route exact path="/care" component={() => <Care plant={this.state.plants} />} />
                    <Route exact path="/menu" component={() => <Menu detail={this.state.details} cart={this.state.cart} removeFromCart={this.removeFromCart} addInCart={this.addInCart} />} />
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