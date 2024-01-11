
import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./foterStyles";

const Footer = () => {
    return (
        <Box>

            <FooterContainer>
                <Row>
                    <Column style={{ marginRight: "50px" }}>
                        <Heading></Heading>
                        <img src="logo.png" />

                    </Column>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Link One
                        </FooterLink>
                        <FooterLink href="#">
                            Link Two
                        </FooterLink>
                        <FooterLink href="#">
                            Link Three
                        </FooterLink>
                        <FooterLink href="#">
                            Link Four
                        </FooterLink>
                        <FooterLink href="#">
                            Link Five
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Link Six
                        </FooterLink>
                        <FooterLink href="#">
                            Link Seven
                        </FooterLink>
                        <FooterLink href="#">
                            Link Eight
                        </FooterLink>
                        <FooterLink href="#">
                            Link Nine
                        </FooterLink>
                        <FooterLink href="#">
                            Link Ten
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Link Eleven
                        </FooterLink>
                        <FooterLink href="#">
                            Link Twele
                        </FooterLink>
                        <FooterLink href="#">
                            Link Threteen
                        </FooterLink>
                        <FooterLink href="#">
                            Link Fourteen
                        </FooterLink>
                        <FooterLink href="#">
                            Link Fifteen
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Subscribe</Heading>
                        <p style={{ color: "#fff", fontSize: "9px", fontWeight: "5px" }}>Join our newsletter to stay up to date on features and releases</p>
                        <form style={{ width: "50%", display: "flex", alignItems: "center" }}>
                            <input type="text" />
                            <button class="btn-1" style={{ marginLeft: "10px" }}>Subscribe</button>
                        </form>
                        <p class="mt-3" style={{ color: "#fff", fontSize: "9px", fontWeight: "5px", }}>By subscribing you agree to our privacy policies and provide contet <p>to recive updates from our company</p></p>
                    </Column>
                </Row>

                <hr style={{ color: "#ffff" }} />
                {/* <div clsss="row">
         
                    <div clas="d-flex">
                    <p style={{color:"#ffff"}}>2023 7Needle.All right recived.</p>
                    </div>
                   
                    <p style={{color:"#ffff"}}>Privacy Policies</p>                  
                    <p style={{color:"#ffff"}}>Terms of service</p>                    
                    <p style={{color:"#ffff"}}>Cookies Settings</p>
                    
             </div> */}
                <div className="mb-1">
                    <div className="row">
                        <div className="col-md-10">

                            <div className="d-flex">
                                <p style={{ color: "#ffff", fontSize: "9px", marginLeft: "10px" }}>2023 7Needle.All right recived.</p>
                                <p style={{ color: "#ffff", fontSize: "9px", marginLeft: "10px" }}>Privacy Policies</p>
                                <p style={{ color: "#ffff", fontSize: "9px", marginLeft: "10px" }}>Terms of Service</p>
                                <p style={{ color: "#ffff", fontSize: "9px", marginLeft: "10px" }}>Cookies settings</p>
                            </div>
                        </div>
                        <div className="col-md-2">

                            <div className="d-flex">
                                <a style={{ backgroundColor: '#005ea2' }} href="https://facebook.com/" className="facebook"><i style={{ color: "#ffff", marginLeft: "40px" }} className="fa fa-facebook" /></a>
                                <a style={{ backgroundColor: '#005ea2' }} href="https://www.twitter.com/" className="twitter"><i style={{ color: "#ffff", marginLeft: "10px" }} className="fa fa-twitter" /></a>
                                <a style={{ backgroundColor: '#005ea2' }} href="https://www.linkedin.com/" className="linkedin"><i style={{ color: "#ffff", marginLeft: "10px" }} className="fa fa-linkedin" /></a>
                                <a style={{ backgroundColor: '#005ea2' }} href="https://www.instagram.com/" className="linkedin"><i style={{ color: "#ffff", marginLeft: "10px" }} className="fa fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>







            </FooterContainer>
        </Box>
    );
};
export default Footer;