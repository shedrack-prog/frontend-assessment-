'use client';

import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export const ToastProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Toaster
      // duration={4000}
      position="bottom-right"
    />
  );
};
