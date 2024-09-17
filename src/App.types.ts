export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

export interface ModalImage {
  imageUrl: string;
  alt: string;
}
