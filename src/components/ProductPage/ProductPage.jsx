import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../header/Header";
import s from './ProductPage.module.css'
import MyButton from "../UI/button/MyButton";
import {addPurchaseActionCreator, setCartActionCreator, setProductActionCreator} from "../../redux/actions";
import {addPurchase} from "../../helpers/helpers";
import {ADD_TO_CART} from "../../redux/constants";

const ProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const products = useSelector(store => store?.productReducer.products)
    const isAuth = useSelector(store => store?.authReducer.isAuth)
    const cart = useSelector(store => store?.cartReducer)
    const [product] = products.filter(product => product.id === +id)
    const [inputValue, setInputValue] = useState(0)
    const purchase = {
        count: inputValue,
        value: inputValue * product.price
    }

    const onClickButtonHandler = () => {
        return addPurchase(
            dispatch,
            addPurchaseActionCreator,
            setProductActionCreator,
            purchase,
            id,
            {
                ...product,
                inStock: product.inStock - purchase.count
            },
            setCartActionCreator,
            {
                ...product,
                product: product.title, url: product.url, count: inputValue, price: inputValue * product.price
            },
            cart
        )
    }

    return (
        <>
            <Header/>
            <div className="wrapper">
                <main className={s.main}>
                    <h2 className={s.title}>Подробное описание товара</h2>
                    <p>Наименование:&nbsp;<span className={s.name}>{product.title}</span></p>
                    <p>Оригинальная упаковка:</p>
                    <img className={s.img} src={product.url} alt="sweet-bar"/>
                    <p>Описание товара:&nbsp; <span className={s.body}>{product.body}</span></p>
                    <p>Количество товара в наличии:&nbsp; <span>{product.inStock} ед.</span></p>
                    <p>Стоимость одной единицы:&nbsp; <span>{product.price} $</span></p>
                    <div className={s.purchase}>
                        <label htmlFor='purchase'>
                            Количество товара, которое вы хотите приобрести:
                            <input className={s.input}
                                   type="number"
                                   name='purchase'
                                   value={inputValue}
                                   onChange={(e) => setInputValue(+e.target.value)}
                            />
                        </label>
                        {
                            !isAuth ? <span className={s.notAvailable}>{ADD_TO_CART}</span> :
                                +product.inStock !== 0 ?
                                    <MyButton onClick={onClickButtonHandler}>Добавить в корзину</MyButton> :
                                    <span className={s.notAvailable}>Not available</span>
                        }
                    </div>

                </main>
            </div>
        </>
    );
};

export default ProductPage;
