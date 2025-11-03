'use client';

import React, { useState } from 'react';

const WhatsAppChatButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = "https://wa.me/18632101640?text=Hello%20from%20your%20site";
  const telegramUrl = "https://t.me/+16673164844";
  const discordUrl = "https://discord.gg/Yc7dVvGV";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-row gap-2 md:gap-3">
        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Chat with us on WhatsApp"
        >
          <div className={`
            w-12 h-12 md:w-14 md:h-14
            bg-green-500 hover:bg-green-600
            rounded-full
            flex items-center justify-center
            shadow-lg hover:shadow-2xl
            transition-all duration-300 ease-in-out
            transform scale-[.88] hover:scale-110 active:scale-95
            cursor-pointer
            relative
            overflow-hidden
            ring-2 ring-green-400/0 hover:ring-green-400/40
          `}>

            {/* WhatsApp Icon */}
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.706"/>
            </svg>
          </div>
        </a>

        {/* Discord button */}
        <a
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label="Join us on Discord"
        >
          <div className={`
            w-12 h-12 md:w-14 md:h-14
            bg-[#5865F2] hover:bg-[#4752c4]
            rounded-full
            flex items-center justify-center
            shadow-lg hover:shadow-2xl
            transition-all duration-300 ease-in-out
            transform scale-[.88] hover:scale-110 active:scale-95
            cursor-pointer
            relative
            overflow-hidden
            ring-2 ring-[#5865F2]/0 hover:ring-[#5865F2]/40
          `}>
            {/* Discord Icon */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F84d1b65b864e4f14b5d3e9cbfac03509%2F89ccdba049ea431381cdd8106521167f?format=webp&width=800"
              alt="Discord"
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        {/* Telegram button */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label="Chat with us on Telegram"
        >
          <div className={`
            w-12 h-12 md:w-14 md:h-14
            bg-blue-500 hover:bg-blue-600
            rounded-full
            flex items-center justify-center
            shadow-lg hover:shadow-2xl
            transition-all duration-300 ease-in-out
            transform scale-[.88] hover:scale-110 active:scale-95
            cursor-pointer
            relative
            overflow-hidden
            ring-2 ring-blue-400/0 hover:ring-blue-400/40
          `}>

            {/* Telegram Icon */}
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
        </a>
      </div>

      {/* Mobile bottom spacing adjustment */}
      <div className="md:hidden h-2"></div>
    </div>
  );
};

export default WhatsAppChatButton;
