import './FormSearch.css'
export default function FormSearch({ infoInput, textInput, onClickIcon, onChangeInput, type, placeholderContent, maxLength, labelContent }) {
    return (
        <div className="search-group">
            <label htmlFor={infoInput} className="label">{labelContent}</label>
            <div className="search-row">
                <input
                    type={type}
                    className="search-input"
                    placeholder={placeholderContent}
                    required=''
                    id={infoInput}
                    value={textInput}
                    onChange={(e) => onChangeInput(e.target.value)}
                    autoComplete="off"
                    maxLength={maxLength}

                />

                <div className="search-icon" onClick={onClickIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}>
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </div>
            </div>

        </div>

    )
}