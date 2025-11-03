'use client';

export default function PoweredByAI() {
  const aiServices = [
    {
      name: "Grok",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fb49d7d70fbc84d3d8edd0b5881a9ceec%2F8e307a9d09df4fbeafb57a29cd1d6190?format=webp&width=800",
      url: "https://grok.x.ai/",
      alt: "Grok by xAI"
    },
    {
      name: "ChatGPT",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fb49d7d70fbc84d3d8edd0b5881a9ceec%2Fd31d6e87c0914e338a0eebcdd0480103?format=webp&width=800",
      url: "https://openai.com/chatgpt",
      alt: "ChatGPT by OpenAI"
    },
    {
      name: "Arkham",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2F52be84496bc04498993f825f2f7cf7df?format=webp&width=800",
      url: "https://arkm.com/",
      alt: "Arkham"
    },
    {
      name: "The Block",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Faedaf0b4b11d4a23a6081dfcbd6e0606?format=webp&width=800",
      url: "https://www.theblock.co/",
      alt: "The Block"
    }
  ];


  return (
    <div className="mt-3 mobile:mt-4 w-full overflow-hidden">
      <h3 className="text-sm mobile:text-base font-medium text-neutral-400 dark:text-neutral-300 mb-1.5 mobile:mb-2 transition-colors duration-300 text-left hover:text-neutral-200 cursor-default">
        Powered by
      </h3>
      
      {/* Horizontal Scrolling Container */}
      <div className="relative">
        
        {/* Static content */}
        <div className="flex gap-2 mobile:gap-3 justify-start overflow-x-auto pb-1">
          {aiServices.map((service, index) => (
            <a
              key={`${service.name}-${index}`}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 mobile:gap-2 px-1.5 mobile:px-2 py-1 mobile:py-1.5 rounded-md hover:bg-white/5 dark:hover:bg-neutral-800/50 border border-transparent hover:border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 whitespace-nowrap flex-shrink-0"
              title={service.alt}
            >
              <div className="w-4 mobile:w-5 h-4 mobile:h-5 flex items-center justify-center">
                <img
                  src={service.logo}
                  alt={service.alt}
                  className="w-full h-full object-contain opacity-60 group-hover:opacity-90 transition-all duration-300 scale-[0.93] group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-200 transition-colors duration-300 hidden mobile:inline">
                {service.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
