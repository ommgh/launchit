import React from "react";

const PushableButton = ({ text = "Push me" }) => {
  return (
    <button className="relative border-none bg-transparent p-0 cursor-pointer outline-offset-4 transition duration-250 ease-linear">
      <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-black/25 will-change-transform translate-y-2 transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] hover:translate-y-4 active:translate-y-1"></span>
      <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-orange-800 via-orange-700 to-orange-800"></span>
      <span className="font-bold tracking-wider relative block px-10 py-3 text-lg text-white rounded-lg bg-orange-500 will-change-transform -translate-y-1 transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] hover:-translate-y-1.5 active:translate-y-0.5">
        {text}
      </span>
    </button>
  );
};

export default PushableButton;
