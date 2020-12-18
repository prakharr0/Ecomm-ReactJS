import React, { Component } from 'react';
import './Header.css'
import logo from './logo.png'


class HeaderComponent extends Component {
    render() {
        return (
            <div className = "header">
                <div className = "header__logo">
                  <img className="photo" src={logo} />
                </div>

                <div className="header__search">
                    <input placeholder = "Search" className="header_search_input" type = "text"/>
                </div>
                
                <div className = "header__nav">
                    <div className = "header__option">
                        <span className = "header__option_line1">
                            Hello User
                        </span>
                    </div>

                    <div className = "header__option">
                        <span className = "header__option_line2">
                            Orders/Return
                        </span>
                    </div>

                    <div className = "header__option">
                        <span className = "header__option_line3">
                            Prime
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderComponent;