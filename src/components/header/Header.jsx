import React, { useEffect } from 'react';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../UI/button/MyButton';
import NavBar from '../NavBar/NavBar';
import {
    setCartModalActiveAction,
    setLoginModalActiveAction,
    setLoginModalNonActiveAction,
    setLogoutAction,
} from '../../redux/actions';
import LoginModal from '../LoginModal/LoginModal';
import LoginPostForm from '../LoginPostForm/LoginPostForm';
import CartModal from '../CartModal/CartModal';
import CartProduct from '../CartProduct/CartProduct';

const Header = () => {
    const dispatch = useDispatch();
    const purchase = useSelector((store) => store?.purchaseReducer);
    const isAuth = useSelector((store) => store?.authReducer.isAuth);
    const cart = useSelector((store) => store?.cartReducer);
    const products = Object.values(cart);

    useEffect(() => {
        if (isAuth) {
            dispatch(setLoginModalNonActiveAction);
        }
    }, [isAuth, dispatch]);

    const onClickLoginButtonHandler = (e) => {
        e.target.innerHTML === 'Login'
            ? dispatch(setLoginModalActiveAction)
            : dispatch(setLoginModalNonActiveAction);
        e.target.innerHTML === 'Logout' && dispatch(setLogoutAction);
    };

    const onClickCartHandler = () => {
        dispatch(setCartModalActiveAction);
    };

    return (
        <header className={s.header}>
            <div className="wrapper">
                <div className={s.wrapper}>
                    <NavBar />
                    {isAuth ? (
                        <p className={s.cart} onClick={onClickCartHandler}>
                            В корзине <span>{purchase.purchaseCount}</span> товаров на сумму{' '}
                            <span>{purchase.purchaseValue} $</span>
                        </p>
                    ) : (
                        <p>Корзина доступна только для авторизованных пользователей!</p>
                    )}

                    <MyButton className={s.login} onClick={onClickLoginButtonHandler}>
                        {isAuth ? 'Logout' : 'Login'}
                    </MyButton>
                    <LoginModal>
                        <LoginPostForm />
                    </LoginModal>
                    <CartModal>
                        {products.map(({ title, url, count, price, id }) => {
                            return (
                                <CartProduct
                                    key={id}
                                    title={title}
                                    url={url}
                                    count={count}
                                    price={price}
                                />
                            );
                        })}
                    </CartModal>
                </div>
            </div>
        </header>
    );
};

export default Header;
