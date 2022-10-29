import React, {ChangeEvent, useState} from 'react';

// type PropsType = {
//     setMessage: (mess: Array<{message: string}>) => void,
//     message: Array<{message: string}>
// }

type inputType={
    messages: Array<titlesType>
    addTitle: (title: string)=>void
}

type titlesType={
    message: string
}

export const FullInput = (props: inputType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickHandler=(title: string)=>{
        // props.setMessage([...props.message, {message: title}])
        // setTitle('')
        props.addTitle(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={()=>{onClickHandler(title)}}>+</button>
        </div>
    );
};

