import React from 'react';
import {moneyType} from "./App";

export type MoneyType={
    banknote: string
    nominal: number
    number: string
}

type currentMoneyType={
    currentMoney: Array<MoneyType>
    onClickFilterHandler: (filter: moneyType)=>void
}

export const NewComponent = (props: currentMoneyType) => {
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
                <button onClick={()=>props.onClickFilterHandler('All')}>All</button>
                <button onClick={()=>props.onClickFilterHandler('Ruble')}>Rubles</button>
                <button onClick={()=>props.onClickFilterHandler('Dollar')}>Dollars</button>
            </div>
        </>
    );
};