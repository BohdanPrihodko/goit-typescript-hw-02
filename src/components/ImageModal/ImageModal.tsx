import Modal from "react-modal";
import { FC, useEffect } from "react";
import { ImageModalProps } from "./ImageModal.types";


Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  alt,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          background: "rgba(0, 0, 0, 0.8)",
          overflow: "hidden",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      <img src={imageUrl} alt={alt || "Image"} />
    </Modal>
  );
};

export default ImageModal;
