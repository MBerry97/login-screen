import React from 'react';
import Lottie from 'react-lottie'
import animationData from '../../assets/loading_anim.json'

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
    <div>
   <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}

export default LoadingAnim;