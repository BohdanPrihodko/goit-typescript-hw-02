import { ImageCardProps } from "./ImageCard.types"; 

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt || "Image"} />{" "}
  </div>
);

export default ImageCard;
