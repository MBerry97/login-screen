import React from 'react';
import Lottie from 'react-lottie'
import animationData from '../../assets/loading_anim.json'
import './animations.css'

const LoadingAnim = (props) => {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
    <div className='animation__container' id='animation'>
   <Lottie 
	    options={defaultOptions}
        height={200}
        width={200}
      />
    </div>
  );
}

export default LoadingAnim;