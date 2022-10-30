import React from 'react';

type ButtonType={
    name: string
    callBackButtonHandler: ()=>void
    disabled?: boolean
    className?: string
}


export const Button = (props: ButtonType) => {
    const onClickButtonHandler=()=> {
        props.callBackButtonHandler()
    }

    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
};

