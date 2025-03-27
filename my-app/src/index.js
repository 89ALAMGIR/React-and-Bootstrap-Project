import React from 'react';
import ReactDom from 'react-dom/client';

const Display = () => {
    return (<h1>Hi! This is Alamgir!</h1>)
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render (<Display/>);