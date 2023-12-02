type HeaderPropsType = {
    titleHeader: string
}
export const Header = (props: HeaderPropsType) => {
    return (
        <h1>{props.titleHeader}</h1>
    )
}
