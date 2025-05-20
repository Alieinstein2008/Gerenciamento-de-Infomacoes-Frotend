import './FormSelect.css';
export default function FormSelect({ idSelect, opcoesSelect, onChangeSelect, labelContent }) {
    let options;
    if (opcoesSelect) {
        options = opcoesSelect.map(
            opt => <option value={opt.value} key={opt.value}>{opt.text}</option>
        )
    }
    return (
        <div className="select-group">
            <label htmlFor={idSelect} className='label'>{labelContent}</label>
            <div className="select-row">
                <select
                    type="text"
                    id={idSelect}
                    className='select'
                    onChange={(e) => onChangeSelect(e.target.value)}
                >
                    {options}
                </select>
            </div>
        </div>

    )
}