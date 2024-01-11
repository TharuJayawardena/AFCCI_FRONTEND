import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from '../../../src/styles/offer.css';
import  {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OfferCard from './OfferCard';
const Offer = () => {
    const [swiper, setSwiper] = useState(null);
    useEffect(() => {
        setSwiper(new Swiper('.swiper', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 40
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        }));
    }, []);
    return (
        <div className='container mt-5'>
        <div id="Offers" className={styles.Offers}>
            <div className='text-center'>
                <h6><span style={{color: "#005ea2"}}><b>What We Offer</b></span></h6>
                <p style={{fontSize:"30px", fontWeight:"10px"}}><b>Our Comphrehensive</b><span style={{color:"#0a98ff"}}><b> Services</b></span></p>
                <p>Empowering Buisness with tailored soulutions, AccFin ensures success through expert guidens,
                    precision, and <p>unwavering support</p>
                </p>
            </div>
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <OfferCard comment="Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim inani splendide consetetur ea, nec ex virtute gubergren. Aliquam splendide mei in, te vivendum recusabo philosophia qui, dolor omnes utroque mea at. Fugit altera adolescens mea ad."
                                        imagePath="abstract_720652 1.svg" designation="Buisness Setup" readMore="Read More"
                                       />
                            <OfferCard comment="Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim inani splendide consetetur ea, nec ex virtute gubergren. Aliquam splendide mei in, te vivendum recusabo philosophia qui, dolor omnes utroque mea at. Fugit altera adolescens mea ad."
                                        imagePath="abstract_720652 1.svg" designation="Financial Clarity" readMore="Read More"
                                      />
                            <OfferCard comment="Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim inani splendide consetetur ea, nec ex virtute gubergren. Aliquam splendide mei in, te vivendum recusabo philosophia qui, dolor omnes utroque mea at. Fugit altera adolescens mea ad."
                                        imagePath="abstract_720652 1.svg" designation="Buisness Setup"  readMore="Read More"
                                        />
                            <OfferCard comment="Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim inani splendide consetetur ea, nec ex virtute gubergren. Aliquam splendide mei in, te vivendum recusabo philosophia qui, dolor omnes utroque mea at. Fugit altera adolescens mea ad."
                                        imagePath="abstract_720652 1.svg" designation="Financial Clarity" readMore="Read More"
                                        />
                            <OfferCard comment="Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim inani splendide consetetur ea, nec ex virtute gubergren. Aliquam splendide mei in, te vivendum recusabo philosophia qui, dolor omnes utroque mea at. Fugit altera adolescens mea ad." 
                            imagePath="abstract_720652 1.svg" designation="Buisness Setup" readMore="Read More"
                                        />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}

export default Offer;