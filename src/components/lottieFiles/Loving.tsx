// src/components/Loving.js
import Lottie from 'lottie-react';
import loving from '../loving.json'
const Loving = () => {
 

  return <Lottie loop autoplay animationData={loving} height={200} width={200} className='md:size-[300px]' />;
};

export default Loving;
