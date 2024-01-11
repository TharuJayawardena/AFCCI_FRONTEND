import React from 'react';
import styles from '../../../src/styles/offer.css';

const OfferCard = ({comment, imagePath, designation, readMore}) => {
 return(
<div className="swiper-slide mt-5">
                <div className={styles.content}>
                  
                    
                        <img
                            src={imagePath}
                            className="testimonial-img"
                            alt="{name}"
                            width= "50px"
                            height= "50px"
                        />
                        <h4 className='mt-4'>{designation}</h4>
                        
                    
                    <p>{comment}</p>

                    <p>{readMore}</p>
                </div>
            </div>
 );
};

export default OfferCard;