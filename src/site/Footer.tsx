type FooterPropsType = {
    titleFooter: string
}

export const Footer = (props: FooterPropsType) => {
    return (
        <h3>{props.titleFooter}</h3>
    )
}