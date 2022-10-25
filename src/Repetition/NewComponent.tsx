import React from 'react';
import {studentType, topCarType} from "./MicroTasks";


type NewComponentType = {
    students: Array<studentType>
    topCars: Array<topCarType>

}



export const NewComponent = (props: NewComponentType) => {
    return (
        // <ul>
        //     {props.students.map((s, index) => {
        //         return (
        //             <li key={index}>
        //                 <span>   {s.name} </span>
        //                 <span>   {s.age} </span>
        //
        //             </li>
        //         )
        //     })}
        // </ul>


        <table>
            <td>
                {props.topCars.map((c, index)=>{

                    
                    return(
                        <tr>
                            Manufacturer:
                            {c.manufacturer }
                            Model:
                            {c.model}
                        </tr>
                    )
                })}
            </td>
        </table>
    );
};

