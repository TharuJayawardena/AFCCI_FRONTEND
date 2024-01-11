import React from 'react';

const Header = () => {
    return (
        <header>
            <div class="container" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                Width: "1000px",


            }}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


                <div class="row">
                    {/* <div className="logo float-left">
                        
                            <div className="align-content-center">
                            <img style={{ width: "150px", height: "150px" }} src='logo3png.svg' className='img-fluid'/>
                                
                            </div>
                        
                    </div> */}
                   
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a style={{ marginLeft: "80px" }} class="nav-link" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a style={{ marginLeft: "80px" }} class="nav-link" href="#">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a style={{ marginLeft: "80px" }} class="nav-link" href="#">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a style={{ marginLeft: "80px" }} class="nav-link" href="#">Knowledge Hub</a>
                                    </li>
                                    <li class="nav-item">
                                        <a style={{ marginLeft: "80px" }} class="nav-link" href="#">Careers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a style={{ marginLeft: "80px" }} class="nav-link" href="#">Contact Us</a>
                                    </li>
                                </ul>
                                <div class="d-flex">
                                    <a style={{ marginLeft: "50px" }} href="#"><i class="fa fa-fw fa-search"></i></a>
                                </div>

                                <div class="d-flex" style={{ marginLeft: "50px" }}>
                                    <button type="button" class="btn ">Inquire Now</button>
                                </div>

                            </div>
                        </nav>
                    </div>


                </div>
            </div>





        </header >
    );
};

export default Header;