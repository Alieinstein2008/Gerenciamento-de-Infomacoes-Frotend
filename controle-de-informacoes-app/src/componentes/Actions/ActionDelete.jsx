import './Actions.css'
export default function ActionDelete({onClickAction}) {
    return (
        <div className="action-button-group" onClick={onClickAction}>
            <div className="button-row">
                <div className="button-icon">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" height={"100%"} width={"100%"}>
                        <path d="m251.68 99.531c-27.028 0-48.938 21.91-48.938 48.938s21.91 48.938 48.938 48.938 48.938-21.91 48.938-48.938-21.91-48.938-48.938-48.938zm0 20.969c15.444 0 27.969 12.524 27.969 27.969s-12.524 27.938-27.969 27.938-27.969-12.493-27.969-27.938 12.524-27.969 27.969-27.969z" color="#fffff" fill="#none" />
                        <path d="m150.62 169.42v254.33c0 13.288 10.712 24 24 24h150.75c13.288 0 24-10.712 24-24v-254.33z" color="#000000" fill="#8c9bc2" />
                        <rect x="127.84" y="142.45" width="247.69" height="37.951" ry="8.5007" color="#000000" fill="#6d83b8" />
                        <rect x="166.74" y="197.41" width="21.972" height="226.34" ry="10.986" color="#000000" fill="#6d83b8" />
                        <rect x="202.88" y="197.41" width="21.972" height="226.34" ry="10.986" color="#000000" fill="#6d83b8" />
                        <rect x="239.01" y="197.41" width="21.972" height="226.34" ry="10.986" color="#000000" fill="#6d83b8" />
                        <rect x="275.15" y="197.41" width="21.972" height="226.34" ry="10.986" color="#000000" fill="#6d83b8" />
                        <rect x="311.29" y="197.41" width="21.972" height="226.34" ry="10.986" color="#000000" fill="#6d83b8" />
                        <rect width="500" height="500" fillOpacity="0"/>
                    </svg>

                </div>
                <p>Deletar</p>
            </div>
        </div>
    )
}