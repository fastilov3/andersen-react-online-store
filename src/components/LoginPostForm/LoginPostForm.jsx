import React, {useState} from 'react';
import s from './LoginPostForm.module.css'
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/button/MyButton";
import {EMPTY_INPUT} from "../../redux/constants";
import {useDispatch, useSelector} from "react-redux";
import {loginAndPasswordActionCreator, setLoginAction} from "../../redux/actions";


const LoginPostForm = () => {
    const dispatch = useDispatch()
    const login = useSelector(store => store?.loginAndPasswordReducer.login)
    const password = useSelector(store => store?.loginAndPasswordReducer.password)
    const isOnceLogin = useSelector(store => store?.authReducer.once)
    const [postForm, setPostForm] = useState({
        login: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        emptyInputs: {
            login: false,
            password: false,
        }
    })

    const isDisabled = isOnceLogin && (password !== postForm.password || login !== postForm.login)

    const checkEmptyInput = (inputName) => {
        if (postForm[inputName]?.trim() === '') {
            setErrors((prevState => {
                return {
                    ...prevState, emptyInputs: {
                        ...prevState.emptyInputs, [inputName]: true,
                    }
                }
            }))
        }
    }

    const checkEmptyInputs = () => {
        const inputs = Object.keys(postForm)
        inputs.map(input => checkEmptyInput(input))
    }

    const handeInputChange = (e) => {
        setPostForm({...postForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        checkEmptyInputs()
        if(!errors.emptyInputs.login && !errors.emptyInputs.password) {
            dispatch(setLoginAction)
            dispatch(loginAndPasswordActionCreator(postForm))
        }
    }

    const onClickCancelHandler = () => {
       setPostForm({
            firstName: '',
            secondName: '',
        })
        setErrors({
            emptyInputs: {
                login: false,
                password: false,
            }
        })
    }

    return <form className={s.Form} onSubmit={handleSubmit}>
        <MyInput
            htmlFor='login'
            type='text'
            name='login'
            value={postForm.login}
            onChange={handeInputChange}
            content='Login'
        />
        {errors.emptyInputs.login && <span className={s.span}>{EMPTY_INPUT}</span>}
        {
            isOnceLogin &&
            postForm.login !== login &&
            <span className={s.span}>Логин не совпадает!</span>
        }
        <MyInput
            htmlFor='password'
            type='text'
            name='password'
            value={postForm.password}
            onChange={handeInputChange}
            content='Password'
        />
        {errors.emptyInputs.password && <span className={s.span}>{EMPTY_INPUT}</span>}
        {
            isOnceLogin &&
            postForm.password !== password &&
            <span className={s.span}>Пароль не совпадает!</span>
        }
        <div className={s.buttons}>
            <MyButton type='submit' disabled={isDisabled}>Login</MyButton>
            <MyButton type='reset'onClick={onClickCancelHandler}>Cancel</MyButton>
        </div>
    </form>;
};
export default LoginPostForm;

