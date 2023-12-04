import {useState} from "react";
import {FullInput} from "./tasks/components/FullInput";
import {Input} from "./tasks/components/Input";
import {Button} from "./tasks/components/Button";

function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let[title, setTitle] =useState('')

    const addTitle =(title: string)=>{
        setMessage([{message: title}, ...message ])
    }

    const callBackButtonHandler=()=>{
        addTitle(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            {/*<FullInput addTitle={addTitle} />*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index)=>{
                return(
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
