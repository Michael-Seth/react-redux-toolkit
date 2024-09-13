import { ArrowRightSquare } from "lucide-react";
import Food from "@/assets/food-plate.png";
import FoodItemA from "@/assets/image 27.svg";
import FoodItemB from "@/assets/image 28.svg";
import FoodItemC from "@/assets/image 29.svg";
// import FoodItemD from "@/assets/image 30.svg";

function SplashScreenA() {
  return (
    <div className="relative h-screen bg-[#4059CF] max-w-md mx-auto flex overflow-hidden">
      <div className="absolute top-0 right-0 -mt-8 -mr-20">
        <img
          src={Food}
          alt="Food Image"
          className="w-[14rem] rounded-full shadow-lg"
        />
      </div>
      <div className="absolute top-0 left-0 mt-8 ml-20">
        <img
          src={FoodItemA}
          alt="Food Image"
          className="w-[2rem] rounded-full shadow-lg"
        />
      </div>
      <div className="absolute top-0 left-6 mt-16 ml-2">
        <img
          src={FoodItemB}
          alt="Food Image"
          className="w-[2rem] rounded-full shadow-lg"
        />
      </div>
      <div className="absolute top-0 left-0 mt-32 ml-20">
        <img
          src={FoodItemC}
          alt="Food Image"
          className="w-[2rem] rounded-full shadow-lg"
        />
      </div>
      <div className="text-left mt-[70%] p-8">
        <h3 className="text-4xl text-white mb-4">
          <b>Food</b> you love,
          <br /> delivered <b>to you</b>
        </h3>
        <p className="text-lg mb-4 text-white">
          Your journey starts here. Get ready to explore!
        </p>
        <button className="bg-white mt-10 w-full border border-white text-slate-800 py-4 px-4 rounded hover:bg-transparent hover:border-2 hover:text-white font-medium focus:outline-none">
          Get Started
          <ArrowRightSquare className="ml-2" />
        </button>
      </div>
      <div className="">

      </div>
    </div>
  );
}

export default SplashScreenA;
