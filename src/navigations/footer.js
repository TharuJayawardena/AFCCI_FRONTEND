
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
                        <p style={{ color: "#fff", fontSize: "8px", fontWeight: "5px" }}>Join our newsletter to stay up to date on features and releases</p>
                        <form  style={{width: "50%", display:"flex", alignItems: "center"}}>    
                                <input type="text" />
                                <button class="btn-1" style={{marginLeft:"10px"}}>Subscribe</button>
                        </form>
                        <p class="mt-3" style={{ color: "#fff", fontSize: "8px", fontWeight: "5px", }}>By subscribing you agree to our privacy policies and provide contet <p>to recive updates from our company</p></p>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;