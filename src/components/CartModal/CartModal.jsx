import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import s from '../LoginModal/LoginModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCartModalNonActiveAction } from '../../redux/actions';

const CartModal = ({ children }) => {
    const dispatch = useDispatch();
    const isCartModalActive = useSelector((store) => store?.cartModalReducer.isActive);
    const root = document.createElement('div');

    useEffect(() => {
        document.body.appendChild(root);
        return () => document.body.removeChild(root);
    });

    const onClickModalHandler = () => {
        dispatch(setCartModalNonActiveAction);
    };

    const onClickModalContentHandler = (e) => {
        e.stopPropagation();
    };

    return ReactDOM.createPortal(
        <div
            className={isCartModalActive ? [s.modal, s.active].join(' ') : s.modal}
            onClick={onClickModalHandler}
        >
            <div
                className={isCartModalActive ? [s.modalContent, s.active].join(' ') : s.modal}
                onClick={onClickModalContentHandler}
            >
                <div className={s.close}>
                    <span onClick={onClickModalHandler}>X</span>
                </div>
                <div className={s.wrapper}>
                    <h2 className={s.cartTitle}>Товары в корзине</h2>
                    {children}
                </div>
            </div>
        </div>,
        root,
    );
};

export default CartModal;
