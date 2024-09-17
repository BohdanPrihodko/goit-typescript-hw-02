interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="ErrorMessage">
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
