'use client';

import { ExternalLink } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  bgColor: string;
  hoverColor: string;
}

// Default social media links - easily editable
const defaultSocialLinks: SocialLink[] = [
  {
    name: "Telegram",
    url: "https://t.me/+16673164844", // Edit this URL
    icon: "M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.55-1.1.55-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z",
    bgColor: "bg-[#26A5E4]",
    hoverColor: "hover:bg-[#1d8bc4]"
  },
  {
    name: "Discord",
    url: "https://discord.gg/Yc7dVvGV",
    icon: "M19.54 5.34A17.5 17.5 0 0 0 15.89 4l-.18.32c1.76.54 2.7 1.34 2.7 1.34-1.18-.61-2.32-.93-3.41-1.05a12.38 12.38 0 0 0-2.32 0C11.6 4.04 10.46 4.36 9.28 4.97c0 0 .94-.8 2.7-1.34L11.8 4A17.5 17.5 0 0 0 8.16 5.34C4.9 10.06 5.7 14.65 5.7 14.65a9.1 9.1 0 0 0 3.2 1.6l.66-.9c-1.16-.35-2.03-1.08-2.03-1.08l.32.18c.02.01.03.02.05.03 0 0 .02 0 .02.02 1.28.71 2.68 1.14 4.19 1.14s2.91-.43 4.19-1.14h.02l.07-.05s-.86.74-2.03 1.08l.66.9a9.1 9.1 0 0 0 3.2-1.6s.8-4.59-2.46-9.31ZM9.85 12.8c-.65 0-1.19-.6-1.19-1.33 0-.73.52-1.33 1.19-1.33.67 0 1.21.6 1.19 1.33 0 .73-.52 1.33-1.19 1.33Zm4.3 0c-.65 0-1.19-.6-1.19-1.33 0-.73.52-1.33 1.19-1.33s1.19.6 1.19 1.33c0 .73-.52 1.33-1.19 1.33Z",
    bgColor: "bg-[#5865F2]",
    hoverColor: "hover:bg-[#4752c4]"
  }
];

interface SocialMediaLinksProps {
  links?: SocialLink[];
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SocialMediaLinks({ 
  links = defaultSocialLinks, 
  showLabels = false,
  size = 'md',
  className = ""
}: SocialMediaLinksProps) {
  
  const sizeClasses = {
    sm: 'w-7 mobile:w-8 h-7 mobile:h-8',
    md: 'w-8 mobile:w-10 h-8 mobile:h-10',
    lg: 'w-10 mobile:w-12 h-10 mobile:h-12'
  };

  const iconSizes = {
    sm: 'w-3.5 mobile:w-4 h-3.5 mobile:h-4',
    md: 'w-4 mobile:w-5 h-4 mobile:h-5',
    lg: 'w-5 mobile:w-6 h-5 mobile:h-6'
  };

  return (
    <div className={`flex items-center gap-1.5 mobile:gap-2 ${className}`}>
      {links.map((social) => (
        <div key={social.name} className="flex flex-col items-center gap-2">
          {social.name === 'Discord' ? (
            // Discord logo without link
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${sizeClasses[size]}
                ${social.bgColor}
                ${social.hoverColor}
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-200
                group
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-0.5
              `}
              aria-label={`Visit our ${social.name}`}
            >
              <svg
                className={`${iconSizes[size]} text-white fill-current`}
                viewBox="0 0 24 24"
              >
                <path d={social.icon} />
              </svg>
              <ExternalLink className="w-2 h-2 text-white/70 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            // Other social media with links
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${sizeClasses[size]}
                ${social.bgColor}
                ${social.hoverColor}
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-200
                group
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-0.5
              `}
              aria-label={`Visit our ${social.name}`}
            >
              <svg
                className={`${iconSizes[size]} text-white fill-current`}
                viewBox="0 0 24 24"
              >
                <path d={social.icon} />
              </svg>
              <ExternalLink className="w-2 h-2 text-white/70 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
          {showLabels && (
            <span className="text-xs text-neutral-300 dark:text-neutral-400 font-medium">
              {social.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// Export the default links for easy editing
export { defaultSocialLinks };
export type { SocialLink };
