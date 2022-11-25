import React from "react";
import logo from './VITlogo.png';
export default function Footer() {
    return <footer className="Box">
            <div className="Container">
                <div className="Row">
                    <div className="Logo-Column">
                        <img src={logo} className="FooterLink-Logo"/>
                        <hr />
                        <div className="Heading-Logo">Near Vijayawada - 522237, Andhra Pradesh</div>
                        
                    </div>
                    <div className="Column">
                        <div className="Heading">Information</div>
                        <div className="FooterLink" href="#">Application Process</div>
                        <div className="FooterLink" href="#">Vision</div>
                        <div className="FooterLink" href="#">Testimonials</div>
                    </div>
                    <div className="Column">
                        <div className="Heading">Quick Links</div>
                        <div className="FooterLink" href="#">Academics</div>
                        <div className="FooterLink" href="#">Programmes</div>
                        <div className="FooterLink" href="#">Careers</div>
                        <div className="FooterLink" href="#">Terms Of Use</div>
                    </div>
                    <div className="Column">
                        <div className="Heading">VIT Connect</div>
                        <div className="FooterLink" href="#">VTOP Login</div>
                        <div className="FooterLink" href="#">VTOP Parent Login</div>
                        <div className="FooterLink" href="#">VIT-AP Mail</div>
                        <div className="FooterLink" href="#">Contact Us</div>
                    </div>
                </div>
            </div>
    </footer>
}
