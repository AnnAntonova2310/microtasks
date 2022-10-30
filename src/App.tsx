import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {FullInput} from "./Repetition/FullInput";
import {Input} from "./Repetition/Input";
import {Button} from "./Repetition/Button";

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle]=useState('')

    const addMessage = (title: string)=> {
        setMessage([{message: title},...message])

    }

    const callBackButtonHandler=()=>{
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FullInput addMessage={addMessage} message={message} />*/}

            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBackButtonHandler={callBackButtonHandler}/>
            {message.map((el, index)=> {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>


    );
}

export default App;

