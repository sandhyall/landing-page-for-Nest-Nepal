import React from 'react';

const FeaturesSection = () => {
  const workspaceIcons = [
    { name: "Gmail", src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" },
    { name: "Drive", src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" },
    { name: "Meet", src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" },
    { name: "Calendar", src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" },
    { name: "Chat", src: "https://upload.wikimedia.org/wikipedia/commons/d/de/Google_Chat_icon_%282020%29.svg" },
    { name: "Gemini", src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
    { name: "Docs", src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg" },
    { name: "Sheets", src: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" },
    { name: "Slides", src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg" },
    { name: "Forms", src: "https://cdn.prod.website-files.com/6737568a4ac417efeb387e5a/67448912b380ba6aec215e07_6703e2de09a9a0a3606d3f48_Google_Forms_Logo.svg" },
    {name :"Keep", src:"https://cdn.prod.website-files.com/6737568a4ac417efeb387e5a/67448912abb0bfe237e1e65d_6703e31fea6d047d8326f539_Google_Slides_Logo.svg"},
    {name:"Tasks",src:"https://iconlogovector.com/uploads/images/2024/09/lg-66d5cf32e3203-Google-Tasks.webp"},
    {name:"notebookLM",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzN8HuRehRQl8GCWM798nV8C_-9Da7NyVsg&s"}
  ];

  return (
    <div className="w-full bg-white py-20 px-4 font-sans text-center">
      <div className="max-w-6xl mx-auto">
        
      
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-blue-600">सबै  <span className='text-black'>Tools</span> एउटै</span> Platform मा
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-blue-500/80 mb-12">
          Google Workspace
        </h3>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 px-6">
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Premium AI built-in</h4>
            <p className="text-gray-600 leading-relaxed">
              Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Tools born in the Cloud</h4>
            <p className="text-gray-600 leading-relaxed">
              Collaborate in real time, from any device, across tools that are always up-to-date.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Enterprise-grade security</h4>
            <p className="text-gray-600 leading-relaxed">
              Protect your emails, files, and meetings with AI-powered security and compliance controls.
            </p>
          </div>
        </div>

       
        <div className="mb-20">
          <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-800 hover:text-white transition-all flex items-center gap-2 mx-auto">
            Get a quotation <span className="text-xl">↗</span>
          </button>
        </div>

       
        <div className="border-t border-gray-100 pt-10">
          <p className="text-xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
            Google Workspace includes:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-7 overflow-x-auto pb-4">
            {workspaceIcons.map((icon, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[60px]">
                <img src={icon.src} alt={icon.name} className="h-6 w-6 mb-2 object-contain" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesSection;