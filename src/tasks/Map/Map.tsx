type NewComponentPropsType = {
    cars: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>

                {props.cars.map((car, index) => {
                    return (
                            <tr key={index}>
                                <td>{index+1}. </td>
                                <td>{car.manufacturer}</td>
                                <td>{car.model}</td>
                            </tr>
                    )
                })}

            </tbody>
        </table>
    )
}