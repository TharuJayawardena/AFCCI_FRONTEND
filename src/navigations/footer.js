import React from "react";
import { Link } from 'react-router-dom'
const Footer = () => (
    <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Column One</h4>
                        <ul>
                            <li><Link href="#"><a className="no-border-bottom">Link one</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link two</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link three</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link four</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link five</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Column Two</h4>
                        <ul>
                            <li><Link href="#"><a className="no-border-bottom">Link six</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link seven</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link eight</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link nine</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link ten</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Column Three</h4>
                        <ul>
                            <li><Link href="#"><a className="no-border-bottom">Link eleven</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link twel</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link therteen</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link fouteen</a></Link></li>
                            <li><Link href="#"><a className="no-border-bottom">Link fifteen</a></Link></li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;