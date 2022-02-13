import React from 'react';
import Header from "../../header/Header";
import ProductCard from "../../ProductCard/ProductCard";
import s from './Home.module.css'
import {useSelector} from "react-redux";

const Home = () => {
    const products = useSelector(store => store?.productReducer.products)

    return (
        <>
            <Header/>
            <div className="wrapper">
                <div className={s.products}>
                    {products && products.map(({ id, url, inStock, price, title, body }) => {
                        return <div key={id}>
                            <ProductCard id={id} title={title} url={url} inStock={inStock} price={price} body={body}/>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
};

export default Home;
