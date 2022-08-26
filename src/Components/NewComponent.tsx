type NewComponentType = {
    students: Array<StudentsType>
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string;
    model: string;
}

type StudentsType = {
    id: number;
    name: string;
    age: number;
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.students.map((objectFromStudentsArray: StudentsType, index: number) => {
                        return (
                            <li key={objectFromStudentsArray.id}>
                                <span>{objectFromStudentsArray.name} </span>
                                <span> age: {objectFromStudentsArray.age}</span>
                            </li>
                        )
                    }
                )
                }

            </ul>
            <table>
                {props.topCars.map((Car, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{Car.manufacturer}</td>
                            <td>{Car.model}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )

}