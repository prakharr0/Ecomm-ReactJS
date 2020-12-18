import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import Product__1 from './product1.png';
import './Product.css';


class ProductComponent extends Component {
    render() {
        return (
            <div className = "product">

                <div className = "product__info">
                    <p>The E-comm Startup</p>

                    <p className = "product__price" ><small>$</small><strong>19,17</strong></p>

                    <div className="product__rating">
                        <p>
                            <StarIcon fontSize="small"/><StarIcon fontSize="small"/>
                        </p>
                    </div>

                    <img src = {Product__1}/>

                    <button>Add to Basket</button> 
                    
                </div>
            </div>
        );
    }
}

export default ProductComponent;