import React from "react";
import { ImageGalleryProps } from "./ImageGallery.types";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul>
      {images.map(({ id, urls, alt_description }) => (
        <li
          key={id}
          onClick={() => onImageClick(urls.regular, alt_description || "Image")}
        >
          <ImageCard src={urls.small} alt={alt_description || "Image"} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
