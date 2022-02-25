import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ type, onClick }) => (
  <div className={`button ${type}`} onClick={onClick}>
    {type}
  </div>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
