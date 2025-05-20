import './Actions.css'
export default function ActionSave({onClickAction}) {
    return (
        <div className="action-button-group" onClick={onClickAction}>
            <div className="button-row">
                <div className="button-icon">
                    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"}>
                        <path d="m8.1675 6.7028h24.795c1.0087 0 1.8208 0.8122 1.8208 1.8211v23.266c0 1.0089-0.81208 1.8211-1.8208 1.8211h-12.397l-7.6774-0.36974-2.9463-0.04108-0.56383 0.41083h-1.2098l-1.8208-1.8211v-23.266c0-1.0089 0.81208-1.8211 1.8208-1.8211z" fill="#707171" fillOpacity=".07059" stroke="#000" strokeOpacity=".16863" strokeWidth="1.1" />
                        <path d="m8.4415 6.9989h24.321c0.98947 0 1.786 0.79658 1.786 1.786v22.818c0 0.98947-0.79658 1.786-1.786 1.786h-12.161l-7.5309-0.36263-2.89-0.04029-0.55307 0.40293h-1.1867l-1.786-1.786v-22.818c0-0.98947 0.79658-1.786 1.786-1.786z" fill="#707171" stroke="#000" strokeWidth=".3375" />
                        <path d="m9.60353,7.33372v13.89039c0,.55932.43834.97598.97814.97598h19.81642c.5398,0 .97814-.41666.97814-.97598v-13.89039h-21.7727z" fill="#909192" />
                        <path d="m10.89217,7.1914v12.8624c0,.48636.38872.84867.8674.84867h17.57296c.47869,0 .8674-.36231.8674-.84867v-12.8624h-19.30777z" fill="#fff" stroke="#000" strokeWidth=".15544" />
                        <path d="m10.986 7.345h19.099v1.8145h-19.099z" fill="#f00" fillOpacity=".74118" />
                        <path d="m12.383 11.291h16.198" fill="none" stroke="#000" strokeWidth=".12953" />
                        <path d="m12.383 13.675h16.198" fill="none" stroke="#000" strokeWidth=".12953" />
                        <path d="m12.383 16.059h16.198" fill="none" stroke="#000" strokeWidth=".12953" />
                        <path d="m12.383 18.443h16.198" fill="none" stroke="#000" strokeWidth=".12953" />
                        <path d="m7.3045 8.6009h1.3615v0.95158h-1.3615z" fill="#fff" stroke="#000" strokeWidth=".13052" />
                        <path d="m32.487 8.6009h1.3615v0.95158h-1.3615z" fill="#fff" stroke="#000" strokeWidth=".13052" />
                        <path d="m31.08 27.746v0.98577h-0.70572l1.165 2.6437 1.165-2.6437h-0.69452v-0.98577h-0.92976z" fill="#909192" stroke="#000" strokeWidth=".04481" />
                        <path d="m12.31144,25.09212c-.49487,0-.875.38013-.875.875v7.3125h17.68096v-7.3125c0-.49487-.41138-.875-.90625-.875h-15.89971z" fill="#909192" stroke="#000" strokeWidth=".125" />
                        <path d="m12.56974,25.34216c-.49487,0-.875.38013-.875.875l-.04546,7.3125h13.46691l.04546-7.3125c0-.49487-.41138-.875-.90625-.875h-11.68566zm1.42329,1.3125h1.78125c.36099,0 .65625.29526.65625.65625v5.01683h-3.09375v-5.01683c0-.36099.29526-.65625.65625-.65625z" fill="#a2a4a1" stroke="#000" strokeWidth=".075" />
                        <path d="m10.482 22.148h19.815" fill="none" stroke="#9c9e9e" strokeWidth=".125" />
                        <path d="m12.275 25.179h15.503" fill="none" stroke="#acabac" strokeWidth=".1" />
                    </svg>
                </div>
                <p>Salvar</p>
            </div>
        </div>
    )
}