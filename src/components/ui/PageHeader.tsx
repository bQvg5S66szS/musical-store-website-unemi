
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bgImage }) => {
  return (
    <div 
      className="py-16 bg-cover bg-center relative"
      style={{ 
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundColor: bgImage ? 'none' : 'rgba(92, 58, 148, 0.1)',
      }}
    >
      {bgImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${bgImage ? 'text-white' : 'text-music-primary'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-xl md:text-2xl ${bgImage ? 'text-gray-200' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
