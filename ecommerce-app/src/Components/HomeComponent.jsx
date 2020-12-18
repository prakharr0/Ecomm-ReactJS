import React, { Component } from 'react';
import './Home.css';
import MyStore from './mystore.png';
import ProductComponent from './ProductComponent';

class HomeComponent extends Component {
    render() {
        return (
            <div className = "home">
                <div className="home__container">
                    <img className="home__image" src = {MyStore}></img>
                </div>

                <div className="home__row">
                    {/* 2 product components */}
                    <ProductComponent/>
                    <ProductComponent/>
                </div>

                <div className="home__row">
                    {/* 3 product components */}
                    <ProductComponent/>
                    <ProductComponent/>
                    <ProductComponent/>
                </div>

                <div className="home__row">
                    {/* 1 product component */}
                    <ProductComponent/>
                </div>
            </div>
        );
    }
}

export default HomeComponent;