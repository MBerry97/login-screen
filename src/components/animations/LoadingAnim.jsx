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
    <div data-testid='loadingAnim' className='animation__LoadingContainer' >
   <Lottie 
	    options={defaultOptions}
        height={250}
        width={250}
      id='loadingAnimation' />
    </div>
  );
}

export default LoadingAnim;