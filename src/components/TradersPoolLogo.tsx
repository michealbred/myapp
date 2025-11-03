import Link from "next/link";

interface TradersPoolLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
}

export default function TradersPoolLogo({ 
  size = 'medium', 
  className = '', 
  href = '/' 
}: TradersPoolLogoProps) {
  const sizeClasses = {
    small: 'text-lg mobile:text-xl',
    medium: 'text-xl mobile:text-2xl',
    large: 'text-2xl mobile:text-3xl tablet:text-4xl lg:text-5xl xl:text-6xl'
  };

  const logoText = (
    <span className={`
      font-bold tracking-tight leading-tight
      bg-gradient-to-r from-orange-400 via-pink-500 via-purple-500 to-blue-500 
      bg-clip-text text-transparent
      hover:from-orange-300 hover:via-pink-400 hover:via-purple-400 hover:to-blue-400
      transition-all duration-300
      ${sizeClasses[size]} 
      ${className}
    `}>
      Traderspool
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logoText}
      </Link>
    );
  }

  return logoText;
}
