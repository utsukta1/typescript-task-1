interface Props {
    title: string;
}

function Questions(props: Props) {
    const {
        title,

    } = props
    return (
        <>
            <p>{title}</p>

        </>
    )
}

export default Questions;