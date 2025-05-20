import './Actions.css'
export default function ActionAdd({onClickAction}) {
    return (
        <div className="action-button-group" onClick={onClickAction}>
            <div className="button-row">
                <div className="button-icon">
                    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"}>
                        <defs>
                            <linearGradient id="a">
                                <stop stopColor="#fff" offset="0" />
                                <stop stopColor="#fff" offset="1" />
                            </linearGradient>
                        </defs>
                        <path d="m29.094 11.236c-3.1838 0-5.7188 2.5662-5.7188 5.75v94.029c0 3.1838 2.535 5.75 5.7188 5.75h69.812c3.1838 0 5.7188-2.5662 5.7188-5.75v-70.654h-21.031c-4.3061 0-8.0625-3.1411-8.0625-7.3125v-21.812zm50.438 0v21.812c0 1.7141 1.632 3.3125 4.0625 3.3125h21.031z" fill="url(#a)" />
                        <path d="m90.675 82.564c-11.189 0-20.25 9.0614-20.25 20.25s9.0614 20.281 20.25 20.281 20.281-9.0927 20.281-20.281-9.0927-20.25-20.281-20.25zm-3.5 7.0312h7v9.75h9.75v6.9688h-9.75v9.7812h-6.9688v-9.75h-9.7812v-7h9.75v-9.75z" fill="#008000" />
                    </svg>

                </div>
                <p>Adicionar</p>
            </div>
        </div>
    )
}