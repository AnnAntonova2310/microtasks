import React from 'react';
import {FilterType} from "./App";

type currentMoneyPropsType = {
    currentMoney: Array<objFromMoneyArrType>
    onClickFilterHandler: (banknote: FilterType) => void
}

type objFromMoneyArrType ={
    banknote: string
    nominal: number
    number: string
}



const NewComponent = (props: currentMoneyPropsType) => {
        return (
        <>

            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollars</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>rubles</button>
            </div>
        </>

    );
};

export default NewComponent;