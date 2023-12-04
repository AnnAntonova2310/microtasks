import {useState} from "react";
import {FullInput} from "./tasks/components/FullInput";

function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const addTitle =(title: string)=>{
        setMessage([{message: title}, ...message ])
    }

    return (
        <div className={'App'}>
            <FullInput addTitle={addTitle} />
            {message.map((el, index)=>{
                return(
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
