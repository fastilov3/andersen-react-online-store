import React from 'react';
import s from './MyButton.module.css'

const MyButton = (props) => {
    return (
        <button className={s.button} {...props}>{props.children}</button>
    );
};

export default MyButton;
