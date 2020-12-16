import React from 'react';
import Lottie from 'react-lottie'
import animationData from '../../assets/jumping_dots_anim.json'
import './animations.css'

const JumpingDotsAnim = (props) => {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
    <div className='animation__DotsContainer' id='dotsAnimation'>
   <Lottie 
	    options={defaultOptions}
        height={13}
        width={22}
      />
    </div>
  );
}

export default JumpingDotsAnim;