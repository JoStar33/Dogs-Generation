import React from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  children: React.ReactNode;
}

export default function Portal({ children }: IPortal) {
  const element = document.getElementById('portal');

  if (!element) {
    return <></>;
  }

  return element && children ? ReactDOM.createPortal(children, element) : null;
}
