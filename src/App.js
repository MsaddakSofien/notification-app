import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Button, Select, Toaster } from './components';

import './App.css';

function App() {
  const [toastList, setToastList] = useState([]);
  const [position, setPosition] = useState(undefined);

  const postionOptions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];

  const addToast = (type, message = `${type} was clicked!`, duration = 3000) => {
    setToastList([...toastList, { id: uuidv4(), type, message, duration }]);
  };

  const onClose = (id) => {
    const updatedToastList = [...toastList].filter((item) => item.id !== id);
    setToastList(updatedToastList);
  };

  const onPositionChange = (value) => {
    setPosition(value);
  };

  return (
    <div className="App">
      <Toaster list={toastList} position={position} onClose={onClose} />
      <Button type="success" onClick={() => addToast('success')} />
      <Button type="danger" onClick={() => addToast('danger')} />
      <Button type="info" onClick={() => addToast('info')} />
      <Button type="warning" onClick={() => addToast('warning')} />
      <Select value={position} options={postionOptions} onChange={onPositionChange} />
    </div>
  );
}

export default App;
