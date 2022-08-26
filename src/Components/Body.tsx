type BodyType = {
    title: string
}

function Body(props: BodyType ) {
    return <div> {props.title} </div>
}

export  default Body