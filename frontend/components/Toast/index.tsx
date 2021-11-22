import { Transition } from '@headlessui/react';
import React, { createContext, useContext, useState } from 'react';

const toastDelay = 5000;

type Toast = {
  text: string;
};

type ToasterCtx = {
  showToast: (toast: Toast) => void;
  toast: Toast | undefined;
};

const ToastContext = createContext<ToasterCtx | undefined>(undefined);

export const useToaster = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }

  return {
    showToast: context.showToast,
  };
};

export const ToasterProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [toast, setToast] = useState<Toast>();
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (newToast: Toast) => {
    setToast(newToast);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, toastDelay);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}

      <div className="fixed top-0 w-screen text-center pt-8">
        <Transition
          show={toastVisible}
          enter="transition-all ease-in"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition-all ease-out"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-full opacity-0"
        >
          <span className="bg-blue-400 text-white p-4 rounded-2xl shadow-lg">
            {toast && toast.text}
          </span>
        </Transition>
      </div>
    </ToastContext.Provider>
  );
};
