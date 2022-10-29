import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    setMessage: (mess: Array<{message: string}>) => void,
    message: Array<{message: string}>
}

export const FullInput = (props: PropsType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickHandler=()=>{
        props.setMessage([...props.message, {message: title}])
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

