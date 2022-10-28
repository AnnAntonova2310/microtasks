import React, {ChangeEvent, useState} from 'react';

export const FullInput = () => {

    let [title, setTitle] = useState('')
    console.log(title)
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickHandler=()=>{
        console.log('+')
    }
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={()=>onClickHandler()}>+</button>
        </div>
    );
};

