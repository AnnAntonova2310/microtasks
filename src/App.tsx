import React, {MouseEvent} from 'react';
import ButtonTasks from "./Components/ButtonTasks";


function App() {

    const Button1Foo=(subscriber: string, age: number)=>{
        console.log(subscriber, age)
    }

    const Button2Foo=(subscriber: string)=>{
        console.log(subscriber)
    }

    const Button3Foo=(subscriber: string)=>{
        console.log(subscriber)
    }
    return (
        <div className={'App'}>
            <ButtonTasks name={"My YouTube channel-1"} callBack={() => Button1Foo('I`m Vasya', 21)}/>
            <ButtonTasks name={"My YouTube channel-2"} callBack={() => Button2Foo( 'I`m Ivan')}/>
            <ButtonTasks name={"My YouTube channel-3"} callBack={() => Button3Foo( 'I`m Anya')}/>
        </div>
    )

}

export default App;
