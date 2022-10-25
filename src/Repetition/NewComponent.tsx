import React, {useState} from 'react';


export const NewComponent = () => {

    let [a, setA]=useState(0)
    const onClickHandler=()=>{
        setA(++a)
        console.log(a)
    }

    const deleteHandler=()=>{
        setA(0)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={deleteHandler}>0</button>
        </div>
    );
}
