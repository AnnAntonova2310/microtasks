import {Button} from "./tasks/components/Button";
import {useState} from "react";
import {MoneyList} from "./tasks/components/MoneyList";

type FilterType = 'All' | 'Rubles' | 'Dollars'

function App() {

    const [money, setMoney] = useState([
        {banknote: "Dollars", nominal: 100, number: "a123456789"},
        {banknote: "Dollars", nominal: 50, number: "b123456789"},
        {banknote: "Rubles", nominal: 100, number: "c123456789"},
        {banknote: "Dollars", nominal: 100, number: "d123456789"},
        {banknote: "Dollars", nominal: 50, number: "e123456789"},
        {banknote: "Rubles", nominal: 100, number: "f123456789"},
        {banknote: "Dollars", nominal: 50, number: "j123456789"},
        {banknote: "Rubles", nominal: 50, number: "h123456789"}
    ])
    let [filtered, setFiltered] = useState<FilterType>('All')

    // отфильтрованные деньги
    let currentMoney = money;
    if (filtered === 'Rubles') {
        currentMoney = money.filter((el) => el.banknote === 'Rubles')
    }
    if (filtered === 'Dollars') {
        currentMoney = money.filter((el) => el.banknote === 'Dollars')
    }

    const onClickFilteredHandler = (filteredName: FilterType) => {
        setFiltered(filteredName)
    }

    return (
        <>
            {/*<MoneyList currentMoney={currentMoney}/>*/}
            {/*<Button name={'Rubles'} callBack={() => onClickFilteredHandler('Rubles')}/>*/}
            {/*<Button name={'Dollars'} callBack={() => onClickFilteredHandler('Dollars')}/>*/}
            {/*<Button name={'All'} callBack={() => onClickFilteredHandler('All')}/>*/}
        </>
    )
}

export default App;
