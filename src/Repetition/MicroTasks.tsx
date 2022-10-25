import React from 'react';
import Body from "./Body";
import {NewComponent} from "./NewComponent";
import {Button} from "./Button";
import UnButton from "./UnButton";

export type studentType ={
    id: number
    name: string
    age: number
}

export  type topCarType={
    manufacturer:string
    model:string
}



const MicroTasks = () => {
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const topCars = [
        {manufacturer:"BMW",model:'m5cs'},
        {manufacturer:"Mercedes",model:'e63s'},
        {manufacturer:"Audi",model:'rs6'}
    ]

    const Button1Foo=(subscriber: string, age:number)=>{
        console.log(subscriber, age)
    }

    const Button2Foo=(subscriber: string)=>{
        console.log(subscriber)
    }

    const DeleteButton=()=>{
        console.log('Delete')
    }

    return (
        <div>
            {/*<Body title={'New Body'}/>*/}
            <NewComponent/>
            {/*<Button/>*/}
            {/*<UnButton name={'My channel - 1'} callBack={()=>Button1Foo('Vasya', 21)}/>*/}
            {/*<UnButton name={'My channel - 2'} callBack={()=>Button2Foo('Ivan')}/>*/}
            {/*<UnButton name={'Delete'} callBack={DeleteButton}/>*/}

        </div>
    );
};

export default MicroTasks;