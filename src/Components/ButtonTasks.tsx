import React from 'react';

type ButtonTasksType = {
    name: string;
    callBack: () =>void;
}

const ButtonTasks = (props: ButtonTasksType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default ButtonTasks;