const TextField = (props) => {

    const {id, label, className} = props

    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}></input>
        </div>
    )
}

export default TextField