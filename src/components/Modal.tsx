import { createPortal } from "react-dom";
import '../css/index.css'
import { type ReactNode } from "react";

interface ModalProps {
    children: ReactNode
}

function Modal({ children }: ModalProps) {
    const element = document.getElementById('portal-root') 
    return createPortal(<div className="modal">{children}</div>, element as HTMLElement  );
}

export default Modal;