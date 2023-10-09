import './loginInput.css'

export default function LoginInput(props) {
    const {useStatesInput, text, att, type} = props
    
    return(
        <input
            placeholder={text}
            type={type}
            value={useStatesInput[att].value}
            onChange={(e) => useStatesInput[att].method(e.target.value)}
            className={`${att}Input loginInput`}
            required
        />
    )
}