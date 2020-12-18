import React, { Component } from 'react';
import './Header.css'
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


class HeaderComponent extends Component {
    render() {
        return (
            <div className = "header">
              
                  <img className="header__logo" src={logo} />

                <div className="header__search">
                    <input placeholder = "Search" className="header_search_input" type = "text"/>
                    <SearchIcon className = "header__search_icon"></SearchIcon>
                </div>
                
                <div className = "header__nav">
                    <div className = "header__option">
                        <span className = "header__option_line1">
                            Hello User
                        </span>
                        <span className = "header__option_line2">
                            Sign In
                        </span>
                    </div>

                    <div className = "header__option">
                        <span className = "header__option_line1">
                            View Your
                        </span>
                        <span className = "header__option_line2">
                            Orders/Returns
                        </span>
                    </div>

                    <div className = "header__option">
                    <span className = "header__option_line1">
                            Your
                        </span>
                        <span className = "header__option_line2">
                            Settings
                        </span>
                    </div>

                    <div className="header_basket_option">
                        <ShoppingBasketIcon/>
                        <span className = "header__option_line2 header_basket_count">
                            0
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderComponent;