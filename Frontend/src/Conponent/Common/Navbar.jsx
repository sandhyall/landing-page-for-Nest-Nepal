import React from "react";
import goggle from "../../assets/google 1.png";
import whatapp from "../../assets/Whatapp.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white sticky top-0 z-50 py-3 md:py-4 shadow-sm">
     
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
      
        <div className="flex-shrink-0">
          <img
            src={goggle}
            alt="Google"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </div>

        
        <div className="flex flex-col items-center">
          <p
            className="text-[18px] md:text-[22px] text-[#f0627d] italic leading-tight mb-[-2px]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Valentine's offer
          </p>

          <div className="flex items-start gap-1">
            {[
              { value: "03", label: "Days" },
              { value: "14", label: "Hrs" },
              { value: "40", label: "Min" },
              { value: "35", label: "Sec" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#1a73e8] leading-none tracking-tight">
                    {item.value}
                  </p>
                  {index !== 3 && (
                    <span className="mx-0.5 md:mx-1 text-2xl md:text-3xl font-bold text-[#1a73e8]">
                      :
                    </span>
                  )}
                </div>
                <p className="text-[9px] md:text-[11px] font-bold text-gray-800 mt-0.5 uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="w-full md:w-auto flex justify-center">
          <Link
            to="/contact"
            className="w-full md:w-auto flex items-center justify-center gap-2 border border-green-400 bg-green-50/50 hover:bg-green-100 px-6 md:px-4 py-2 rounded-xl transition-all group shadow-sm"
          >
            <img src={whatapp} alt="WhatsApp" className="h-5 md:h-6 w-5 md:w-6" />
            <span className="text-sm font-semibold text-green-700 whitespace-nowrap">
              Contact Sales
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;