import React from 'react';
import s from './ProductCard.module.css'
import MyButton from "../UI/button/MyButton";
import {NavLink} from "react-router-dom";
import {addPurchase} from "../../helpers/helpers";
import {addPurchaseActionCreator, setCartActionCreator, setProductActionCreator} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_CART} from "../../redux/constants";

const ProductCard = (props) => {
    const {title, url, inStock, price, id} = props;
    const dispatch = useDispatch()
    const isAuth = useSelector(store => store?.authReducer.isAuth)
    const cart = useSelector(store => store?.cartReducer)
    const purchase = {
        count: 1,
        value: price
    }

    const onClickButtonHandler = () => {
        return addPurchase(dispatch,
            addPurchaseActionCreator,
            setProductActionCreator,
            purchase,
            id,
            {
                ...props,
                inStock: inStock - purchase.count
            },
            setCartActionCreator,
            {
                title, url, count: 1, price
            }, cart
            )
    }

    return (
        <div className={s.card}>
            <div className={s.wrapper}>
                <img className={s.img} src={url} alt="product"/>
                <NavLink className={s.title} to={`/sweet-bars/${id}`}>{title}</NavLink>
                <p className={s.cart}>Стоимость:&nbsp;<span
                    className={s.price}>{price}$</span></p>
                <br/>
                {
                    !isAuth ? <span className={s.notAvailable}>{ADD_TO_CART}</span> :
                    +inStock !== 0 ?
                        <MyButton onClick={onClickButtonHandler}>Добавить в корзину</MyButton> :
                        <span className={s.notAvailable}>Not available</span>
                }
            </div>
        </div>
    );
};

export default ProductCard;
