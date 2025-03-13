// src/components/Loving.js
import Lottie from 'lottie-react';
import draw from '../draw.json'
const LovingDraw = () => {
  return <Lottie loop autoplay animationData={draw} height={200} width={200} />;
};

export default LovingDraw;
