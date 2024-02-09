import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { useRef } from 'react';
import Button from './Button.jsx';

const Modal = forwardRef(function Modal({ children }, ref) {
  let dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("root")
    );
});

export default Modal;
