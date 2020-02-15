import React from 'react'
import './sass/banner.scss';

function Banner({ background, image, positionTop, positionLeft }) {
    const styles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: `${positionTop} ${positionLeft}`
    }
    return (
        <div style={styles} className="banner-wrapper">
            {image && 
                <div className="banner-image">
                    <img src={image} />
                </div>
            }
        </div>
    )
}

export default Banner
