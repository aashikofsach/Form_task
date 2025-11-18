import { createPortal } from "react-dom";
import '../css/index.css'

function Modal({ children }) {
    return createPortal(<div className="modal">{children}</div>, document.getElementById('portal-root'));
}

export default Modal;