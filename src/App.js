import './App.css';
import React, { useEffect } from 'react';
import { setProductActionCreator } from './redux/actions';
import { useDispatch } from 'react-redux';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProductActionCreator());
    });

    return (
        <>
            <AppRouter />
        </>
    );
}

export default App;
