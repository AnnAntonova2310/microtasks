import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {FullInput} from "./Repetition/FullInput";

export type moneyType='All' | 'Ruble' | 'Dollar'

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    return (
        <div className={'App'}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            <FullInput/>
            {message.map((el, index)=> {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>


    );
}

export default App;

