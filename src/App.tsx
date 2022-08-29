import React, {MouseEvent, useState} from 'react';


function App() {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const onClickHandler1 = () => {
        setA(0);
        console.log(0)
    }


    return (

        <div className={'App'}>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler1}>0</button>
        </div>
    )

}

export default App;
