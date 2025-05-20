import './FormInput.css';
export default function FormInput({ infoInput, labelContent, placeholderContent, textInput, onChangeInput, type, maxLength, readOnly}) {
    return (
        <div className="input-group">
            <label htmlFor={infoInput} className="label">{labelContent}</label>
            <input
                placeholder={placeholderContent}
                required=''
                type={type}
                id={infoInput}
                value={textInput}
                onChange={(e) => onChangeInput(e.target.value)}
                autoComplete="off"
                className="input"     
                maxLength={maxLength}       
                readOnly={readOnly}
            />
        </div>

    )
}