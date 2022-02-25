import PropTypes from 'prop-types';

import ToastItem from './ToastItem';

import './Toaster.css';

const Toaster = ({ list, position, onClose }) => (
  <div className={`toaster ${position}`}>
    {list.map((toast) => (
      <ToastItem key={toast.id} toast={toast} onClose={onClose} />
    ))}
  </div>
);

Toaster.defaultProps = {
  position: 'top-right'
};

Toaster.propTypes = {
  position: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired
};

export default Toaster;
