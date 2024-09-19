import React from "react";
import { ImageGalleryProps } from "./ImageGallery.types";
import ImageCard from "./ImageCard/ImageCard";
import { Image as ImageType } from "../../App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul>
      {images.map((image: ImageType) => (
        <li
          key={image.id}
          onClick={() =>
            onImageClick(image.urls.regular, image.alt_description || "Image")
          }
        >
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description || "Image"}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
