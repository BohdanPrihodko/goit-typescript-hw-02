import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, imageUrl, alt }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      onKeyDown={handleKeyDown}
      style={{
        content: {
          background: 'rgba(0, 0, 0, 0.8)',
          overflow: 'hidden',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <img src={imageUrl} alt={alt} />
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageModal;