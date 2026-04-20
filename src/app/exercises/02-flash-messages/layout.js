import React from 'react';
import ToastShelf from '../../../components/ToastShelf/ToastShelf';
import ToastProvider from '../../../components/ToastProvider/ToastProvider';

import './styles.css';

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
          <ToastShelf />
        </ToastProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
