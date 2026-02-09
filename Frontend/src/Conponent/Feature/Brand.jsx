import React, { useState } from "react";
import security from "../../assets/Product.png";

const Brand = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Your files, all in one place",
      desc: "Edit and organize Google Docs, Sheets, Slides, Microsoft Office files, and PDFs in real-time. Plus, access over 100 other file types!",
      highlight: ["Google Docs", "Sheets", "Slides"],
    },
    { title: "Annotate PDFs", desc: "" },
    { title: "AI-powered search", desc: "" },
    { title: "Activity view", desc: "" },
  ];

  return (
    <div className="w-full bg-white py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Brands using Google Workspace to <br />
            succeed online, <span className="text-blue-600">कसरी?</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            कसरी teams Google Workspace सँग productivity <br />
            बढाउँछन् र समय बचत गर्छन्
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center h-[400px]">
            <div className="relative w-full max-w-[450px]">
              <img
                src={security}
                alt="Google Workspace Security"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="pl-6 border-l-2 transition-all duration-300"
                style={{
                  borderColor: activeTab === index ? "#2563eb" : "#e5e7eb",
                }}
              >
                <h3
                  className={`text-xl font-bold cursor-pointer mb-2 ${activeTab === index ? "text-gray-900" : "text-gray-400"}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </h3>

                {activeTab === index && (
                  <div className="mt-2 animate-fadeIn">
                    <p className="text-gray-600 leading-relaxed max-w-md">
                      Edit and organize{" "}
                      <span className="text-blue-600 cursor-pointer">
                        Google Docs, Sheets, Slides
                      </span>
                      , Microsoft Office files, and PDFs in real-time. Plus,
                      access over 100 other file types!
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
