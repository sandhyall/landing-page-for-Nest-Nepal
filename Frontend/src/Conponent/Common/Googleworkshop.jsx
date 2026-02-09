import React, { useState } from "react";

const DiscountCard = ({ title1, title2, amount, currency, rotated }) => (
  <div
    className={`relative flex items-center justify-center p-1 ${rotated ? "rotate-2" : ""}`}
  >
    <div className="relative bg-[#f0627d] text-white py-4 px-8 w-[340px] min-h-[100px] flex items-center justify-between border-[1.5px] border-dashed border-white/40 shadow-xl rounded-sm">
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-white rounded-full shadow-inner border-[1px] border-gray-100"></div>
      <div className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full shadow-inner border-[1px] border-gray-100"></div>
      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-white rounded-full shadow-inner border-[1px] border-gray-100"></div>
      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white rounded-full shadow-inner border-[1px] border-gray-100"></div>

      <div className="flex flex-col text-left leading-tight">
        <span className="text-xl font-bold tracking-tight uppercase leading-none">
          {title1}
        </span>
        <span className="text-xl font-bold tracking-tight uppercase">
          {title2}
        </span>
      </div>

      <div className="h-14 w-[1.5px] bg-white/60 mx-4"></div>

      <div className="flex items-baseline">
        {currency && (
          <span className="text-lg font-bold mr-1 italic">{currency}</span>
        )}
        <span className="text-6xl font-black italic tracking-tighter">
          {amount}
        </span>
      </div>
    </div>
  </div>
);

const GoogleWorkshop = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/gDZ6czwuQ18",
  );
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center bg-white font-sans">
      <h1 className="text-4xl font-semibold text-[#4285F4] mb-4 tracking-tight">
        Google Workspace
      </h1>

      <div className="flex justify-center items-center gap-5 mb-8 text-3xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          className="h-6"
          alt="Gmail"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
          className="h-6"
          alt="Calendar"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
          className="h-6"
          alt="Drive"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg"
          className="h-6"
          alt="Docs"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg"
          className="h-6"
          alt="Meet"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-800 leading-snug">
          <span className="text-[#1a73e8]">किन केही</span> Businesses
          efficiently <span className="text-[#1a73e8]">चल्छन्,</span>
          <br />र केही daily operations मै struggle{" "}
          <span className="text-[#1a73e8]">गर्छन्?</span>
        </h2>
        <p className="text-gray-700 text-lg mt-4 font-medium">
          Reason luck, ads वा team size होइन. Reason हो{" "}
          <span className="font-bold">right partner with right tools.</span>
        </p>
      </div>

      <div className="flex flex-col items-center -space-y-1 mb-10">
        <DiscountCard title1="Discount" title2="Up To" amount="20%" />
        <DiscountCard
          title1="After"
          title2="Discount"
          amount="499"
          currency="Rs."
          rotated
        />
      </div>

      <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-10 leading-relaxed">
        Everything Your Business Needs to Work Smarter. A complete Google
        Workspace setup done right by{" "}
        <span className="font-bold text-gray-800">Nest Nepal</span>.
      </p>

      <div className="flex justify-center items-center gap-5">
        <button className="bg-[#f0627d] text-white px-8 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#d8526a] transition-all transform hover:scale-105">
          15 min · Free Demo
        </button>
        <button className="border-2 border-gray-300 px-8 py-3 rounded-full font-bold text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50 transition-all">
          Get a quotation <span className="text-lg">↗</span>
        </button>
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto py-10 px-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-black">
            {videoUrl ? (
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="Business Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-400/50">
                    <div className="ml-2 h-0 w-0 border-b-[15px] border-l-[25px] border-t-[15px] border-b-transparent border-l-gray-600 border-t-transparent"></div>
                  </div>
                  <p className="text-gray-500 font-medium">
                    Video Coming Soon...
                  </p>
                </div>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-gray-700 text-lg font-semibold tracking-tight">
            Get A Free 15 Min Demo · See if it fits your business
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleWorkshop;
