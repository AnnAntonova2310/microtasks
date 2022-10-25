import React, {MouseEvent} from 'react';

export const Button = () => {
    // const myFirstSubscriber=(event: MouseEvent)=>{
    //     console.log('Hello, Vasya')
    // }
    // const mySecondSubscriber=()=>{
    //     console.log('Hello, Ivan')
    // }
    // const onclickHandler=(name: string)=>{
    //     console.log(name)
    // }

    const foo1=()=>{
        console.log('foo1')
    }
    const foo2=(number: number)=>{
        console.log(number)
    }
    return (
        <div>
            {/*<button onClick={(event)=>{console.log('Hello')}}>My YouTube Channel-1</button>*/}
            {/*<button onClick={()=>onclickHandler('Vasya')}>My YouTube Channel-1</button>*/}
            {/*<button onClick={()=>onclickHandler('Ivan')}>My YouTube Channel-2</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
        </div>
    );
};

