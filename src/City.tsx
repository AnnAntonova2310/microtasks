import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";

type CityPropsType = {
    data: MoneyType[]
}

export const City = (props: CityPropsType) => {


    const mappedMoney = props.data.map((el: MoneyType, index) => (
        <CurrentBankomat
            key={index}
            money={el}
        />
    ))

    return (
        <div>
            <div>{mappedMoney}</div>
        </div>
    );
};
