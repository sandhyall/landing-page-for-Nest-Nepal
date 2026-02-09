import React from 'react';
import whatapp from "../../assets/Whatapp.png";
import government from "../../assets/image 1.png"
import Sita from "../../assets/sita.png"
import Sitaair from "../../assets/image 10.png";
import Min from "../../assets/image 3.png";
import Nagarik from "../../assets/image 7.png";
import Ims from "../../assets/image 12.png";
import Dni from "../../assets/image 8.png";
import keystone from "../../assets/image 14.png";
import google from "../../assets/google sheets.png";
import slides from "../../assets/google slides.png";
import security from "../../assets/google admin console.png";
import standard from "../../assets/google endpoint.png";
import search from "../../assets/smart search.png";
import vault from "../../assets/vault.png";
import drive from "../../assets/google drive.png";



const Truestedclient = () => {
  return (
    <div className="w-full bg-white py-8 md:py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
       
        <p className="text-gray-600 text-base md:text-xl font-medium mb-6 md:mb-10">
          Trusted by 1,000+ Nepali businesses on their growth journey. 
          <br/>
          <span className="text-blue-600 ml-1">अब तपाईंको team तयार छ?</span>
        </p>

       
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 mb-10 md:mb-20 opacity-80">
          
          <img src={government} alt="Gov Nepal" className="h-8 object-contain" />
          <img src={Sita} alt="Sita Air" className="h-8 object-contain" />
          <img src={Sitaair} alt="Sita Air" className="h-10 object-contain" />
          <img src={Min} alt="" className="h-8 object-contain" />
          <img src={Nagarik} alt="Nagarik" className="h-8 object-contain" />
          <img src={Ims} alt="IMS Group" className="h-8 object-contain" />
          <img src={Dni} alt="DHI" className="h-8 object-contain" />
          <img src={keystone} alt="Keystone" className="h-8 object-contain" />
        </div>

       
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            के <span className="text-blue-600">Google Workspace</span> तपाईंको <br />
            business growth <span className="text-blue-600">को लागि best fit हो?</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई <br />
            Elevate र Empower गर्न
          </p>
        </div>

       
        <div className="flex justify-center items-center gap-6 mb-16">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="h-8 w-8" alt="Gmail" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" className="h-8 w-8" alt="Calendar" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" className="h-8 w-8" alt="Drive" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg" className="h-8 w-8" alt="Docs" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" className="h-8 w-8" alt="Meet" />
        </div>

        
        <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-left">
            
            
            <div className="p-10 flex flex-col items-center justify-center bg-gray-50/30">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Starter</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-sm font-bold text-gray-500">Rs.</span>
                <span className="text-5xl font-black text-gray-900">499</span>
                <span className="text-2xl text-gray-400 line-through ml-2">560</span>
              </div>
              <p className="text-center text-xs text-gray-500 leading-relaxed mb-8">
                per user / month,<br />1 year commitment ⓘ
              </p>
              <button className="w-full py-3 px-6 rounded-full border border-pink-200 bg-pink-50 text-pink-600 font-bold flex items-center justify-center gap-2 hover:bg-pink-100 transition-colors">
                <span className="text-xl"><img src={whatapp} alt="" /></span> Contact Sales
              </button>
            </div>

            
            <div className="p-10 space-y-8">
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase  mb-4">Storage</h4>
                <div className="flex items-center gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" className="h-5 w-5" alt="" />
                  <p className="text-sm font-bold text-gray-800">30GB Pooled <span className="font-medium text-gray-500 italic">Storage per user</span></p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-600 uppercase  mb-4">Communicate</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="h-4 w-4" alt="" />
                    Secured & Personalized Gmail
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" className="h-4 w-4" alt="" />
                    Always in Track with Schedule
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" className="h-4 w-4" alt="" />
                    HD Video Calls <span className="font-bold ml-1">(100 Users)</span>
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="p-10 space-y-8">
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase  mb-4">Collaborate</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg" className="h-4 w-4" alt="" />
                    Documents with Google Docs
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src={google} className="h-4 w-4" alt="" />
                    Data Insight with Google sheets
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src={slides} className="h-4 w-4" alt="" />
                    Present with Google Sides
                  </li>


                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" className="h-4 w-4" alt="" />
                    Surveys, To-dos and Many More
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase  mb-4">Control</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src={security} alt="" />
                    <span className="font-bold">Basic</span> Security & Admin Control
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src={standard} alt="" />
                    <span className="font-bold">Standard</span> Endpoint management
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src={search} alt="" />
                    Smart search with Workspace
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <img src={vault} alt="" />
                     Vault for rDecovery
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700 italic">
                   <img src={drive} alt="" />
                    Backup options for Drive and Gmail
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Truestedclient;