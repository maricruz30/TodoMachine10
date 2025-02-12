import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal ({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {/**Aqui le indico que quiero teletransportar lo que sea que le envien como contenido al componente */}
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};
