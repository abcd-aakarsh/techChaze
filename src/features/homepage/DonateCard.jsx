import React from "react";
import donateg from "../../assets/donateg.png";
const DonateCard = ({ img, bordercolor, btncolor }) => {
  return (
    <div className="border-6   rounded-[20px]" style={bordercolor}>
      <div className="py-[38px] px-5 flex flex-col items-center text-center justify-center">
        <img src={img} className="w-[90px] h-[90px] mb-5" />
        <p className="font-manuale font-semibold pb-5 text-lg leading-normal">
          Donate Money
        </p>
        <p className="font-montserrat font-normal text-base pb-10 leading-snug text-sub-color">
          Your small help can change someone else life and can make someone
          happy and u will have a good deed added in your cart
        </p>
        <div className="  text-center ">
          <button
            className="py-[20px] font-montserrat font-medium text-base px-[30px] bg-circle-color border-r-1.5 border-b-1.5 rounded-[30px] hover:shadow-[6px_6px_5px_0px_#a1a1a1] transition-all delay-75 border-donate-button-border hover:border-donate-button-border hover:bg-circle-color"
            style={btncolor}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
