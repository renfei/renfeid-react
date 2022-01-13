import logo from './logo.svg';
import React from 'react';
import {Button} from 'antd';
import './App.css';

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Button type="primary">Button</Button>
        </header>
    </div>
)

export default App;
