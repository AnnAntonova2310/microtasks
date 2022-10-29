import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {FullInput} from "./Repetition/FullInput";

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addTitle=(title: string)=>{
        let newMessage = {message: title};
            setMessage([newMessage, ...message])

        console.log('+')
    }

    return (
        <div className={'App'}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            <FullInput addTitle={addTitle}  messages={message} />
            {message.map((el, index)=> {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>


    );
}

export default App;

