import React from 'react';
import s from './CartProduct.module.css';
import { useSelector } from 'react-redux';

const CartProduct = (props) => {
    const { title, url } = props;
    const product = useSelector((store) => store?.cartReducer[title]);
    return (
        <div className={s.wrapper}>
            <img className={s.img} src={url} alt="product" />
            <p className={s.title}>{title}</p>
            <p>{product.count} шт.</p>
            <p>К оплате {product.cost} $</p>
        </div>
    );
};

export default CartProduct;
