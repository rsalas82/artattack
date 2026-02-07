const TextField = (props) => {

    const {id, label, className, role} = props

    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input id={id} role={role} aria-label={label} {...props}></input>
        </div>
    )
}

export default TextField
