type FilterPropsType = {
    currentMoney: Array<FilterType>
}

type FilterType = {
    banknote: string
    nominal: number
    number: string
}
export const MoneyList = (props: FilterPropsType) => {
    return (
        <ul>
            {props.currentMoney.map((el, index) => {
                return (
                    <li key={index}>
                        <span> {el.banknote}</span>
                        <span> {el.nominal}</span>
                        <span> {el.number}</span>
                    </li>
                )
            })}
        </ul>
    )
}