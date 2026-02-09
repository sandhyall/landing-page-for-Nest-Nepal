import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import userImg from "../../assets/DSC09571 1.png";

const Contact = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
     
      <div className="max-w-6xl mx-auto relative overflow-hidden bg-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center   min-h-[450px]">
        
      
        <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] bg-blue-500/50 rounded-full blur-[80px] -z-0"></div>
        <div className="absolute right-[5%] bottom-[-10%] w-[350px] h-[350px] bg-yellow-400/60 rounded-full blur-[90px] -z-0"></div>
        <div className="absolute right-[-10%] bottom-[0%] w-[300px] h-[300px] bg-green-500/50 rounded-full blur-[70px] -z-0"></div>

       
        <div className="w-full md:w-3/5 z-10 text-left">
          
        
          <div className="flex items-center gap-5 mb-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="h-8" alt="Gmail" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" className="h-8" alt="Drive" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" className="h-8" alt="Meet" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" className="h-8" alt="Calendar" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Google_Gemini_logo.svg" className="h-8" alt="Gemini" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg" className="h-8" alt="Docs" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
            Prefer to talk to sales directly?
          </h2>
          
          <p className="text-gray-700 text-xl md:text-2xl font-medium leading-relaxed mb-10">
            तपाईंको company को unique requirements अनुसार <br /> 
            तयार पारिएको solution सँग efficiency र collaboration <br />
            maximize गर्नुहोस्
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8">
            
            <a 
              href="https://wa.me/9779864333517" 
              className="flex items-center gap-3 bg-[#fce4ec] border-2 border-[#f0627d] text-[#f0627d] px-6 py-3 rounded-2xl font-bold text-lg hover:bg-[#f8bbd0] transition-colors"
            >
              <div className="bg-[#f0627d] p-1 rounded-full">
                <FaWhatsapp className="text-white text-xl" /> 
              </div>
              Message On WhatsApp
            </a>

            
            <div className="text-xl font-bold text-gray-900 border-l-2 border-gray-300 pl-8 hidden md:block">
              Call: +977 9864333517
            </div>
           
            <div className="text-xl font-bold text-gray-900 md:hidden">
              Call: +977 9864333517
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-end relative z-10">
          <img 
            src={userImg} 
            alt="Sales Representative" 
            className="w-full max-w-[450px] h-auto object-contain transform scale-110 origin-bottom"
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;