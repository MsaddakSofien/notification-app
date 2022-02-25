import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CheckIcon, DangerIcon, InfoIcon, WarningIcon, CloseIcon } from '..';

import './ToastItem.css';

const ToastItem = ({ onClose, toast }) => {
  const { id, type, message, duration } = toast;
  const [hidden, setHidden] = useState(false);

  const toastIcon = (toastType) => {
    switch (toastType) {
      case 'success':
        return <CheckIcon fill="#21c7a1" />;
      case 'danger':
        return <DangerIcon fill="#f35f77" />;
      case 'info':
        return <InfoIcon fill="#39a8da" />;
      case 'warning':
        return <WarningIcon fill="#febb30" />;
    }
  };

  //when toast item is removed from toastList state it rerender the others which is bad
  //Workaround for autohide since i have not enough time
  //Not a good solution since the toastItem is not removed from toastList state
  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), duration);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;
  ////////////////////////////////////////////////////////////////////////

  return (
    <div id={id} className={`toastItem ${type}`}>
      <div className="toastInfo">
        <div className="toastIconContainer">{toastIcon(type)}</div>
        <div className="toastDescription">
          <div className="toastTile">{type}</div>
          <div className="toastMessage">{message}</div>
        </div>
      </div>
      <CloseIcon className="toastCloseBtn" onClick={() => onClose(id)} />
    </div>
  );
};

ToastItem.propTypes = {
  toast: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ToastItem;
