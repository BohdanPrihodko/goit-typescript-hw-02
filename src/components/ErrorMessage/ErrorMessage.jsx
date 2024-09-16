import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => (
  <div className="ErrorMessage">
    <p>{message}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
