import { Image as ImageType } from "../../App.types";

export interface ImageGalleryProps {
  images: ImageType[];
  onImageClick: (imageUrl: string, alt: string) => void;
}
