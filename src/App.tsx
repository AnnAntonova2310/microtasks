import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";


type moneyType='All' | 'Ruble' | 'Dollar'

function App() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])
        let [filter, setFilter]=useState<moneyType>('All')
    // let currentMoney=money.filter((filteredMoney)=> filteredMoney.banknote==='ruble')
    let currentMoney=money
    if (filter==='Dollar') {
        currentMoney=money.filter((filteredMoney)=> filteredMoney.banknote==='dollar')
    }

    if (filter==='Ruble') {
        currentMoney=money.filter((filteredMoney)=> filteredMoney.banknote==='ruble')
    }

    const onClickFilterHandler=(filter: moneyType)=>{
    setFilter(filter)
    }
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
            <button onClick={()=>onClickFilterHandler('All')}>All</button>
            <button onClick={()=>onClickFilterHandler('Ruble')}>Rubles</button>
            <button onClick={()=>onClickFilterHandler('Dollar')}>Dollars</button>
            </div>
        </>


    );
}

export default App;

