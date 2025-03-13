import { Link } from "react-router-dom";
import Loving from "../components/lottieFiles/Loving";
import { SparklesText } from "../components/magicui/sparkles-text";

const Home = () => {
  return (
    <Link to='/message'  className="bg-[#D5E5D5] block">    
      <div className="flex justify-center items-center h-screen">
        <div>
          <Loving />
          <SparklesText 
            sparklesCount={3}
            className="text-[#213956] font-bold text-center text-3xl"
            text="Mật thư"
          />
        </div>
      </div>
    </Link>
  );
};

export default Home;
