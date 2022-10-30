import React, {ChangeEvent, useState} from 'react';

// type PropsType = {
//     setMessage: (mess: Array<{message: string}>) => void,
//     message: Array<{message: string}>
// }

type FullInputType = {
    message: Array<messageType>
    addMessage: (title: string) => void
}

type messageType = {
    message: string
}

export const FullInput = (props: FullInputType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickHandler = (title: string) => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={() => {onClickHandler(title)}}>+</button>
        </div>
    );
};

