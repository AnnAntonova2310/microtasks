import React from 'react';

type UnButtonType = {
    name: string
    callBack: () => void
}


const UnButton = (props: UnButtonType) => {
    const onclickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={()=>onclickHandler()}>{props.name}</button>
        </div>
    );
};

export default UnButton;