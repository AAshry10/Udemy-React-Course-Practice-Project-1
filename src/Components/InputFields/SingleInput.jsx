export default function SingleInput({label, onChange, identifier, value}) {
    return (
        <p> 
            <label> {label} </label>
            <input type="number" value={value} onChange={(event) => onChange(identifier, event.target.value)} />
        </p>
    )
}