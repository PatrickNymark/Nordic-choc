import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import '../common/sass/animated-card.scss'

import Favi from '../images/favicon3 copy.png';


function AnimatedCard({ frontImage, backImage, text, header, isText, background }) {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80, duration: 500 }
  });

  const frontStyles = {
    opacity: opacity.interpolate(o => 1 - o),
    transform,
    backgroundImage: `url(${frontImage})`
  };

  let backStyles = {};

  if(isText) {
    backStyles = {
      opacity, 
      transform: transform.interpolate(t => `${t} rotateX(180deg)`),
      background
    }
  } else {
    backStyles = {
      opacity, 
      transform: transform.interpolate(t => `${t} rotateX(180deg)`),
      backgroundImage: `url(${backImage})`
    }
  }

  return (
    <div onClick={() => set(state => !state)}>
      <animated.div class="card back" style={backStyles} />
      <animated.div class="card front" style={frontStyles} />
    </div>
  )
}

export default AnimatedCard

