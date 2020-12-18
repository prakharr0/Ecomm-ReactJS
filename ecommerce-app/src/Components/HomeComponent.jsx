import React, { Component } from 'react';
import Home from './Home.css'
import MyStore from './mystore.png'

class HomeComponent extends Component {
    render() {
        return (
            <div className = "home">
                <div className="home__container">
                    <img className="home__image" src = {MyStore}></img>
                </div>
            </div>
        );
    }
}

export default HomeComponent;