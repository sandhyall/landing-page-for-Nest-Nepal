import React from "react";
import security from "../../assets/Googlesecurity.png";
import picture from "../../assets/Picture.png";
import Digital from "../../assets/Digital.png";

const SolutionBusiness = () => {
  const Solution = [
    {
      title: "For enterprise",
      desc: "Secure collaboration tools for enterprise, with premium AI and enterprise-grade security built in for all the ways work is changing.",
      img: security,
    },
    {
      title: "For small business",
      desc: "Tools for small businesses that help teams and individuals with everyday tasks like scheduling appointments and email marketing.",
      img: picture,
    },
    {
      title: "For new business",
      desc: "Essentials tools for new businesses and startups, including business email domains, online file sharing and storage, and more.",
      img: Digital,
    },
  ];

  return (
    <div className="py-20 bg-white px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Solutions for businesses,
        </h1>
        <p className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
          साना देखि ठूला सबैका लागि
        </p>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          No matter the size, Google Workspace ले तपाईंको business
          <br className="hidden md:block" /> को सबै needs पूरा गर्छ
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {Solution.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-[1.4/1] bg-[#f8f9fa] rounded-[2.5rem] border border-gray-100 flex items-center justify-center overflow-hidden mb-8 p-8 transition-transform hover:scale-[1.02]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center px-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionBusiness;
