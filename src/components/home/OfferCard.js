import React from 'react';
import styles from '../../../src/styles/offer.css';

const OfferCard = ({comment, imagePath, designation, name}) => {
 return(
<div className="swiper-slide">
                <div className={styles.content}>
                  
                    
                        <img
                            src={imagePath}
                            className="testimonial-img"
                            alt="{name}"
                        />
                        <h4>{designation}</h4>
                        
                    
                    <p>{comment}</p>
                </div>
            </div>
 );
};

export default OfferCard;