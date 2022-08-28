import React from 'react';

const Buttons = () => {

    // const onClickHandler =(name: string)=> {
    //     console.log(name)
    // }


    const foo1 =()=> {
        console.log('100200')
    }


    const foo2 =(name: string)=> {
        console.log(name)
    }

    return (
            <div>
                {/*<button onClick={() => onClickHandler('Vasya')}>My YouTube channel</button>*/}
                {/*<button onClick={() => onClickHandler('Anya')}>My YouTube channel</button>*/}


                <button onClick={foo1}>Button1</button>
                <button onClick={() => foo2('100200')}>Button2</button>
            </div>
    );
};

export default Buttons;