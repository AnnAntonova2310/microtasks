import React, {MouseEvent} from 'react';
import {Header} from "./Components/Header";
import Body from './Components/Body';
import {Footer} from "./Components/Footer";
import {NewComponent} from "./Components/NewComponent";

import {ParentFromButton} from './Components/ParentFromButton';
import Buttons from "./Components/Buttons";


function App() {
    return (
        <Buttons/>
    )


}


// const students = [
//     {id: 1, name: "James", age: 8},
//     {id: 2, name: "Robert", age: 18},
//     {id: 3, name: "John", age: 28},
//     {id: 4, name: "Michael", age: 38},
//     {id: 5, name: "William", age: 48},
//     {id: 6, name: "David", age: 58},
//     {id: 7, name: "Richard", age: 68},
//     {id: 8, name: "Joseph", age: 78},
//     {id: 9, name: "Thomas", age: 88},
//     {id: 10, name: "Charles", age: 98},
//     {id: 11, name: "Christopher", age: 100},
// ]
//
// const topCars = [
//     {manufacturer: "BMW", model: 'm5cs'},
//     {manufacturer: "Mercedes", model: 'e63s'},
//     {manufacturer: "Audi", model: 'rs6'}
// ]
//
// const Antonovs = [
//     {
//         name: "ParentFromButton",
//         value: {age: 28, sex: 'male'}
//     },
//     {name: "Anya", value: {age: 27, sex: 'female'}},
//     {name: "Olga", value: {age: 48, sex: 'female'}},
//     {name: "Ivan", value: {age: 15, sex: 'male'}},
//     {name: "Taison", value: {age: 2, sex: 'male'}},
//     {name: "Grisha", value: {age: 'no info', sex: 'male'}},
//     {name: "Dushes", value: {age: 'no info', sex: 'male'}},
// ]
//
// // @ts-ignore
// // @ts-ignore
// return (
//     <div>
//
//
//         {/*<NewComponent*/}
//         {/*    students={students}*/}
//         {/*    topCars={topCars}*/}
//         {/*    Antonovs={Antonovs}*/}
//         {/*/>*/}
//
//
//         <MyDescribers/>
//
//         {/*<ParentFromButton/>*/}
//     </div>
// );


export default App;
