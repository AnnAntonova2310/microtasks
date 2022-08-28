type NewComponentType = {
    students: Array<StudentsType>
    topCars: Array<TopCarsType>
    Antonovs: Array<AntonovsType>
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

type ValueType = {
    age: number | string;
    sex: string
}

type AntonovsType = {
    name: string;
    value: ValueType
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
                            <td>{index + 1}</td>
                            <td>{Car.manufacturer}</td>
                            <td>{Car.model}</td>
                        </tr>
                    )
                })}
            </table>

            <ul>
                {props.Antonovs.map((Antonov, index) => {
                        return (
                            <>
                                <li key={index}>
                                    <span> {Antonov.name}</span>
                                    <span> age: {Antonov.value.age}</span>
                                    <span> sex: {Antonov.value.sex}</span>
                                </li>
                            </>
                        )
                    }
                )
                }
            </ul>
        </>
    )

}