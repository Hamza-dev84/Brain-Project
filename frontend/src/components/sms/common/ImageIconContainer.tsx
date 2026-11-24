import React from "react";

interface ImageIconContainerProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const ImageIconContainer: React.FC<ImageIconContainerProps> = ({
  src,
  alt,
  size = "medium",
  className = "",
}) => {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-20 h-20",
  };

  const iconSizes = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-10 h-10",
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-gradient-radial from-cyan-100 via-cyan-50 to-gray-50/50 border border-cyan-200/30 rounded-xl flex items-center justify-center transition-transform duration-300 ${className}`}
    >
      <img loading="lazy" decoding="async"
        src={src}
        alt={alt}
        className={`${iconSizes[size]} object-contain`}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(162deg) brightness(91%) contrast(101%)",
        }}
      />
    </div>
  );
};

export default ImageIconContainer;
