import React from 'react';
import next from "../../assets/image.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 pb-10">
      
      <div className="max-w-7xl mx-auto bg-[#0035f5] rounded-[2rem] p-10 md:p-16 text-white relative overflow-hidden">
        
       
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <h1 className="text-[12rem] font-black tracking-tighter">NEST NEPAL</h1>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            
           
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded">
                <img src={next} alt="Nest Nepal" className="h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">NEST NEPAL</span>
            </div>

           
            <div className="text-right space-y-2">
              <p className="font-medium">Nepal</p>
              <p className="text-white/80">Call us : +977 986-160-1174</p>
              <p className="text-white/80">Kupondole, Lalitpur, Nepal</p>
              <p className="text-white/80">support@nestsms.com</p>
            </div>
          </div>

          
          <div className="mt-24 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-lg font-medium">Google Workspace</div>
            
            <nav className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium">
              <a href="#why" className="hover:text-white/70 transition-colors">Why google workspace?</a>
              <a href="#pricing" className="hover:text-white/70 transition-colors">Pricing</a>
              <a href="#quotation" className="hover:text-white/70 transition-colors flex items-center gap-1">
                Get A Quotation <span className="text-lg">↗</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;