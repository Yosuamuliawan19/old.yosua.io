import React, { Component } from 'react';
import Button from "./Button";

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-container">

                    <div className="footer-title">💬 Lets chat!</div>
                    <div className="footer-text">
                       Every good thing starts with a conversation. Send an email my way and we can talk about tech, design and pop-culture
                    </div>
                    <div className="footer-btn-container"  onClick={_ => window.open("mailto:yosuamuliawan19@gmail.com?body=Hi%20Yosua",'_blank')}>
                        <Button text={"Get in touch"}/>
                    </div>
                    <div className="footer-note">
                        made with lots of ❤️ and ☕ from Nottingham, United Kingdom
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
