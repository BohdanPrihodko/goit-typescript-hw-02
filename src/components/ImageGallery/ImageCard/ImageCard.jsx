import PropTypes from "prop-types";

const ImageCard = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} />
  </div>
);

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageCard;
