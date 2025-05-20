import './VisualTable.css'
export default function VisualTable({ conteudo }) {
    let atributosLinhas;
    let nomesAtributos;
    let atributosOrganizados;

    if (conteudo.length > 0) {
        nomesAtributos = Object.keys(conteudo[0]).map(
            nome => <td key={nome}>{nome}</td>
        );
        atributosLinhas = conteudo.map((atributo, index, entidades) => {
            let linhaAtributos = [];
            for (const key in entidades[index]) {
                if (Object.prototype.hasOwnProperty.call(entidades[index], key)) {
                    const element = entidades[index][key];
                    linhaAtributos.push(<td key={element}>{element}</td>)

                }
            }
            return linhaAtributos;
        })
        atributosOrganizados = atributosLinhas.map(
            (linha,id) => <tr key={id}>{linha}</tr>)

    }

    return (
        <table className='table_atributos'>
            <tbody>
                <tr className="nomes_atributos">
                    {nomesAtributos}
                </tr>
                {atributosOrganizados}



            </tbody>
        </table>
    )
}