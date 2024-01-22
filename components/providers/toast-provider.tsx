'use client';

import { Toaster } from 'react-hot-toast';

export const ToastProvider = () => {
  return (
    <Toaster
      // duration={4000}
      position="bottom-right"
    />
  );
};
