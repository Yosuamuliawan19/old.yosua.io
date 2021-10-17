import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu'
class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar-wrapper">
                <div className="nav-shadow">
                    <div className="nav-bar-container">
                    
                    <div className="nav-bar-menu-btn" onClick={(_) => window.location.href = "/"}>HOME</div>
                    <div className="nav-bar-menu-btn" onClick={(_) => window.location.href = "https://blog.yosua.io/"}>BLOG</div>
                    <div className="nav-bar-menu-btn" onClick={(_) => window.location.href = "https://blog.yosua.io/suas-bookshelf/"}>BOOKSHELF</div>

                    <div className ="nav-bar-menu-btn">
                        <HamburgerMenu
                            isOpen={false}
                            menuClicked={_ => console.log("On click")}
                            width={30}
                            height={18}
                            strokeWidth={3}
                            rotate={0}
                            color='white'
                            borderRadius={3}
                            animationDuration={0.5}
                        />
                    </div>


                </div>
                </div>
                
            </div>

        );
    }
}

export default NavBar;
