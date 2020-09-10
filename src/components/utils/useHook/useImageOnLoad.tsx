import React, { CSSProperties, useState } from 'react';
// Usage
export const ImageOnLoad = () => {
  const { handleImageOnLoad, css } = useImageOnLoad();
  const style: { [key: string]: CSSProperties } = {
    wrap: {
      position: 'relative',
      width: 600,
      height: 600,
    },
    image: {
      position: 'absolute',
      width: `100%`,
      height: `100%`,
    },
  };
  return (
    <div style={style.wrap}>
      {/* Small image load fast */}
      <img
        style={{ ...style.image, ...css.thumbnail }}
        src='https://via.placeholder.com/150'
        alt='thumbnail'
      />
      {/* Full size image */}
      <img
        onLoad={handleImageOnLoad}
        style={{ ...style.image, ...css.fullSize }}
        src='https://via.placeholder.com/600'
        alt='fullImage'
      />
    </div>
  );
};

// Hook
interface ImageStyle {
  thumbnail: CSSProperties;
  fullSize: CSSProperties;
}
interface ImageOnLoadType {
  handleImageOnLoad: () => void;
  css: ImageStyle;
}
const useImageOnLoad = (): ImageOnLoadType => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // Triggered when full image will be loaded.
  const handleImageOnLoad = () => {
    setIsLoaded(true);
  };
  const css: ImageStyle = {
    // Thumbnail style.
    thumbnail: {
      visibility: isLoaded ? 'hidden' : 'visible',
      filter: 'blur(8px)',
      transition: 'visibility 0ms ease-out 500ms',
    },
    // Full image style.
    fullSize: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 500ms ease-in 0ms',
    },
  };
  return { handleImageOnLoad, css };
};
