import React, {useEffect} from 'react';
import s from './LoginModal.module.css'
import ReactDOM from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalNonActiveAction} from "../../redux/actions";

const LoginModal = ({children}) => {
    const dispatch = useDispatch()
    const isLoginModalActive = useSelector(store => store?.loginModalReducer.isActive)
    const root = document.createElement('div')

    useEffect(() => {
        document.body.appendChild(root)
        return () => document.body.removeChild(root)
    })

    const onClickModalHandler = () => {
        dispatch(setLoginModalNonActiveAction)
    }

    const onClickModalContentHandler = (e) => {
        e.stopPropagation()
    }

    return (
        ReactDOM.createPortal(
            <div className={isLoginModalActive ? [s.modal, s.active].join(' ') : s.modal} onClick={onClickModalHandler}>
                <div className={isLoginModalActive ? [s.modalContent, s.active].join(' ') : s.modal} onClick={onClickModalContentHandler}>
                    <div className={s.close}><span onClick={onClickModalHandler}>X</span></div>
                    {children}
                </div>
            </div>,
            root
        )

    );
};

export default LoginModal;
