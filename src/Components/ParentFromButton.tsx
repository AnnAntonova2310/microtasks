import React, {useState} from 'react';
import {Button} from "./Button";

export const ParentFromButton = () => {
    const start = 4
    const [boo, setBoo] = useState<number>(start)

    const inc = () => {
        setBoo(boo+1)
    }

    const dec = () => {
        setBoo(boo-1)
    }

    const reset = () => {
        setBoo(start)
    }


    return (
        <div>
            <h1>{`${boo}`}</h1>

            <Button
                name={'inc'}
                callback={inc}
            />

            <Button
                name={'dec'}
                callback={dec}
                disabled={boo <= start}
            />

            <Button
                name={'reset'}
                callback={reset}
            />

        </div>
    );
};

