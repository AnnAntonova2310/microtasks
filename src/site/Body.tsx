type BodyPropsType = {
    titleBody: string
}
export const Body = (props: BodyPropsType) => {
    return (
        <h2>{props.titleBody}</h2>
    )
}