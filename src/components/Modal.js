import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props =>{
    return <div    style={{background:'rgba(255, 255, 255, 0.75)'}} className="fixed top-0 left-0 w-[100%] h-[100vh] z-20" onClick={props.onClose}></div>
};

const ModalOverlay = props=>{
    return <div className="border border-solid rounded-xl fixed left-1/2 top-[40%] sm:top-1/2 transform z-30 text-white
          
    p-1 border-secondary-black overlay-tertiary-black fixed lg:w-[80%] w-11/12 xl:max-w-7xl lg:max-w-[95vw] sm:max-h-[90vh] bg-transparent max-w-[1270px] max-h-[670px] rounded-xl " style={{animation:"slide-down 300ms ease-out forwards", opacity: "1", transform: "translate3d(-50%, -50%, 0px) scale(1)"}}>
        <div>  {props.children} </div>
    </div>
};

const PortalElement = document.getElementById('overlays');
const Modal = props =>{
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,PortalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
        </React.Fragment>
    )
};

export default Modal;