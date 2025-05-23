import { useState } from 'react'
import Cabecalho from '../Cabecalho/Cabecalho.jsx'
import './Principal.css'
import FormInput from '../FormInput/FormInput.jsx'
import FormSelect from '../FormSelect/FormSelect.jsx'
import FormSearch from '../FormSearch/FormSearch.jsx'
import ActionDelete from '../Actions/ActionDelete.jsx'
import ActionAdd from '../Actions/ActionAdd.jsx'
import ActionUpdate from '../Actions/ActionUpdate.jsx'
import ActionSave from '../Actions/ActionSave.jsx'
import ActionConsultAll from '../Actions/ActionConsultAll.jsx'
import VisualTable from '../VisualTable/VisualTable.jsx'

export default function Principal() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const [pais, setPais] = useState('');
    const paises = [
        { value: '', text: 'Selecione' },
        { value: 'Afeganistão', text: 'Afeganistão' },
        { value: 'África do Sul', text: 'África do Sul' },
        { value: 'Albânia', text: 'Albânia' },
        { value: 'Alemanha', text: 'Alemanha' },
        { value: 'Andorra', text: 'Andorra' },
        { value: 'Angola', text: 'Angola' },
        { value: 'Antígua e Barbuda', text: 'Antígua e Barbuda' },
        { value: 'Arábia Saudita', text: 'Arábia Saudita' },
        { value: 'Argélia', text: 'Argélia' },
        { value: 'Argentina', text: 'Argentina' },
        { value: 'Armênia', text: 'Armênia' },
        { value: 'Austrália', text: 'Austrália' },
        { value: 'Áustria', text: 'Áustria' },
        { value: 'Azerbaijão', text: 'Azerbaijão' },
        { value: 'Bahamas', text: 'Bahamas' },
        { value: 'Bangladesh', text: 'Bangladesh' },
        { value: 'Barbados', text: 'Barbados' },
        { value: 'Barein', text: 'Barein' },
        { value: 'Bélgica', text: 'Bélgica' },
        { value: 'Belize', text: 'Belize' },
        { value: 'Benim', text: 'Benim' },
        { value: 'Bielorrússia', text: 'Bielorrússia' },
        { value: 'Bolívia', text: 'Bolívia' },
        { value: 'Bósnia e Herzegovina', text: 'Bósnia e Herzegovina' },
        { value: 'Botsuana', text: 'Botsuana' },
        { value: 'Brasil', text: 'Brasil' },
        { value: 'Brunei', text: 'Brunei' },
        { value: 'Bulgária', text: 'Bulgária' },
        { value: 'Burkina Faso', text: 'Burkina Faso' },
        { value: 'Burundi', text: 'Burundi' },
        { value: 'Butão', text: 'Butão' },
        { value: 'Cabo Verde', text: 'Cabo Verde' },
        { value: 'Camarões', text: 'Camarões' },
        { value: 'Camboja', text: 'Camboja' },
        { value: 'Canadá', text: 'Canadá' },
        { value: 'Catar', text: 'Catar' },
        { value: 'Cazaquistão', text: 'Cazaquistão' },
        { value: 'Chade', text: 'Chade' },
        { value: 'Chile', text: 'Chile' },
        { value: 'China', text: 'China' },
        { value: 'Chipre', text: 'Chipre' },
        { value: 'Colômbia', text: 'Colômbia' },
        { value: 'Comores', text: 'Comores' },
        { value: 'Coreia do Norte', text: 'Coreia do Norte' },
        { value: 'Coreia do Sul', text: 'Coreia do Sul' },
        { value: 'Costa do Marfim', text: 'Costa do Marfim' },
        { value: 'Costa Rica', text: 'Costa Rica' },
        { value: 'Croácia', text: 'Croácia' },
        { value: 'Cuba', text: 'Cuba' },
        { value: 'Dinamarca', text: 'Dinamarca' },
        { value: 'Djibouti', text: 'Djibouti' },
        { value: 'Dominica', text: 'Dominica' },
        { value: 'Egito', text: 'Egito' },
        { value: 'El Salvador', text: 'El Salvador' },
        { value: 'Emirados Árabes Unidos', text: 'Emirados Árabes Unidos' },
        { value: 'Equador', text: 'Equador' },
        { value: 'Eritreia', text: 'Eritreia' },
        { value: 'Eslováquia', text: 'Eslováquia' },
        { value: 'Eslovênia', text: 'Eslovênia' },
        { value: 'Espanha', text: 'Espanha' },
        { value: 'Estados Unidos', text: 'Estados Unidos' },
        { value: 'Estônia', text: 'Estônia' },
        { value: 'Eswatini', text: 'Eswatini' },
        { value: 'Etiópia', text: 'Etiópia' },
        { value: 'Fiji', text: 'Fiji' },
        { value: 'Filipinas', text: 'Filipinas' },
        { value: 'Finlândia', text: 'Finlândia' },
        { value: 'França', text: 'França' },
        { value: 'Gabão', text: 'Gabão' },
        { value: 'Gâmbia', text: 'Gâmbia' },
        { value: 'Gana', text: 'Gana' },
        { value: 'Geórgia', text: 'Geórgia' },
        { value: 'Granada', text: 'Granada' },
        { value: 'Grécia', text: 'Grécia' },
        { value: 'Guatemala', text: 'Guatemala' },
        { value: 'Guiana', text: 'Guiana' },
        { value: 'Guiné', text: 'Guiné' },
        { value: 'Guiné Equatorial', text: 'Guiné Equatorial' },
        { value: 'Guiné-Bissau', text: 'Guiné-Bissau' },
        { value: 'Haiti', text: 'Haiti' },
        { value: 'Honduras', text: 'Honduras' },
        { value: 'Hungria', text: 'Hungria' },
        { value: 'Iêmen', text: 'Iêmen' },
        { value: 'Ilhas Marshall', text: 'Ilhas Marshall' },
        { value: 'Ilhas Salomão', text: 'Ilhas Salomão' },
        { value: 'Índia', text: 'Índia' },
        { value: 'Indonésia', text: 'Indonésia' },
        { value: 'Irã', text: 'Irã' },
        { value: 'Iraque', text: 'Iraque' },
        { value: 'Irlanda', text: 'Irlanda' },
        { value: 'Islândia', text: 'Islândia' },
        { value: 'Israel', text: 'Israel' },
        { value: 'Itália', text: 'Itália' },
        { value: 'Jamaica', text: 'Jamaica' },
        { value: 'Japão', text: 'Japão' },
        { value: 'Jordânia', text: 'Jordânia' },
        { value: 'Kiribati', text: 'Kiribati' },
        { value: 'Kuwait', text: 'Kuwait' },
        { value: 'Laos', text: 'Laos' },
        { value: 'Lesoto', text: 'Lesoto' },
        { value: 'Letônia', text: 'Letônia' },
        { value: 'Líbano', text: 'Líbano' },
        { value: 'Libéria', text: 'Libéria' },
        { value: 'Líbia', text: 'Líbia' },
        { value: 'Liechtenstein', text: 'Liechtenstein' },
        { value: 'Lituânia', text: 'Lituânia' },
        { value: 'Luxemburgo', text: 'Luxemburgo' },
        { value: 'Macedônia do Norte', text: 'Macedônia do Norte' },
        { value: 'Madagáscar', text: 'Madagáscar' },
        { value: 'Malásia', text: 'Malásia' },
        { value: 'Malaui', text: 'Malaui' },
        { value: 'Maldivas', text: 'Maldivas' },
        { value: 'Mali', text: 'Mali' },
        { value: 'Malta', text: 'Malta' },
        { value: 'Marrocos', text: 'Marrocos' },
        { value: 'Maurícia', text: 'Maurícia' },
        { value: 'Mauritânia', text: 'Mauritânia' },
        { value: 'México', text: 'México' },
        { value: 'Micronésia', text: 'Micronésia' },
        { value: 'Moçambique', text: 'Moçambique' },
        { value: 'Moldávia', text: 'Moldávia' },
        { value: 'Mônaco', text: 'Mônaco' },
        { value: 'Mongólia', text: 'Mongólia' },
        { value: 'Montenegro', text: 'Montenegro' },
        { value: 'Myanmar', text: 'Myanmar' },
        { value: 'Namíbia', text: 'Namíbia' },
        { value: 'Nauru', text: 'Nauru' },
        { value: 'Nepal', text: 'Nepal' },
        { value: 'Nicarágua', text: 'Nicarágua' },
        { value: 'Níger', text: 'Níger' },
        { value: 'Nigéria', text: 'Nigéria' },
        { value: 'Noruega', text: 'Noruega' },
        { value: 'Nova Zelândia', text: 'Nova Zelândia' },
        { value: 'Omã', text: 'Omã' },
        { value: 'Países Baixos', text: 'Países Baixos' },
        { value: 'Palau', text: 'Palau' },
        { value: 'Panamá', text: 'Panamá' },
        { value: 'Papua Nova Guiné', text: 'Papua Nova Guiné' },
        { value: 'Paquistão', text: 'Paquistão' },
        { value: 'Paraguai', text: 'Paraguai' },
        { value: 'Peru', text: 'Peru' },
        { value: 'Polônia', text: 'Polônia' },
        { value: 'Portugal', text: 'Portugal' },
        { value: 'Quênia', text: 'Quênia' },
        { value: 'Quirguistão', text: 'Quirguistão' },
        { value: 'Reino Unido', text: 'Reino Unido' },
        { value: 'República Centro-Africana', text: 'República Centro-Africana' },
        { value: 'República Democrática do Congo', text: 'República Democrática do Congo' },
        { value: 'República Dominicana', text: 'República Dominicana' },
        { value: 'República Tcheca', text: 'República Tcheca' },
        { value: 'Romênia', text: 'Romênia' },
        { value: 'Ruanda', text: 'Ruanda' },
        { value: 'Rússia', text: 'Rússia' },
        { value: 'Samoa', text: 'Samoa' },
        { value: 'San Marino', text: 'San Marino' },
        { value: 'Santa Lúcia', text: 'Santa Lúcia' },
        { value: 'São Cristóvão e Névis', text: 'São Cristóvão e Névis' },
        { value: 'São Tomé e Príncipe', text: 'São Tomé e Príncipe' },
        { value: 'São Vicente e Granadinas', text: 'São Vicente e Granadinas' },
        { value: 'Senegal', text: 'Senegal' },
        { value: 'Serra Leoa', text: 'Serra Leoa' },
        { value: 'Sérvia', text: 'Sérvia' },
        { value: 'Seychelles', text: 'Seychelles' },
        { value: 'Singapura', text: 'Singapura' },
        { value: 'Síria', text: 'Síria' },
        { value: 'Somália', text: 'Somália' },
        { value: 'Sri Lanka', text: 'Sri Lanka' },
        { value: 'Sudão', text: 'Sudão' },
        { value: 'Sudão do Sul', text: 'Sudão do Sul' },
        { value: 'Suécia', text: 'Suécia' },
        { value: 'Suíça', text: 'Suíça' },
        { value: 'Suriname', text: 'Suriname' },
        { value: 'Tailândia', text: 'Tailândia' },
        { value: 'Tajiquistão', text: 'Tajiquistão' },
        { value: 'Tanzânia', text: 'Tanzânia' },
        { value: 'Timor-Leste', text: 'Timor-Leste' },
        { value: 'Togo', text: 'Togo' },
        { value: 'Tonga', text: 'Tonga' },
        { value: 'Trinidad e Tobago', text: 'Trinidad e Tobago' },
        { value: 'Tunísia', text: 'Tunísia' },
        { value: 'Turcomenistão', text: 'Turcomenistão' },
        { value: 'Turquia', text: 'Turquia' },
        { value: 'Tuvalu', text: 'Tuvalu' },
        { value: 'Ucrânia', text: 'Ucrânia' },
        { value: 'Uganda', text: 'Uganda' },
        { value: 'Uruguai', text: 'Uruguai' },
        { value: 'Uzbequistão', text: 'Uzbequistão' },
        { value: 'Vanuatu', text: 'Vanuatu' },
        { value: 'Vaticano', text: 'Vaticano' },
        { value: 'Venezuela', text: 'Venezuela' },
        { value: 'Vietnã', text: 'Vietnã' },
        { value: 'Zâmbia', text: 'Zâmbia' },
        { value: 'Zimbábue', text: 'Zimbábue' }
    ];
    const [uf, setUf] = useState('');
    const [estado, setEstado] = useState('');

    const [regiao, setRegiao] = useState('');
    const [cidade, setCidade] = useState('');

    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');

    const [parametroConsulta, setParametroConsulta] = useState('');


    const [conteudoTabela, setConteudoTabela] = useState(Array);

    const [EntidadeID, setEntidadeID] = useState('');
    const [actionRequest, setActionRequest] = useState('')

    function carregarEndereco() {
        if (cep !== '' && cep.length >= 8) {
            let cepFiltrado = cep.replace(/\D/g, '');
            if (cepFiltrado !== '') {
                const validadorCep = /^[0-9]{8}$/;
                if (validadorCep.test(cepFiltrado)) {
                    const url = `https://viacep.com.br/ws/${cepFiltrado}/json/`;
                    fetch(url)
                        .then(response => response.json())
                        .then((json) => {
                            if (json.erro) {
                                alert("CEP não encontrado");
                                setCep('')
                                setEstado('')
                                setUf('')
                                setRegiao('')
                                setCidade('')
                                setBairro('')
                                setLogradouro('')
                            } else {
                                setCep(json.cep)
                                setEstado(json.estado)
                                setUf(json.uf)
                                setRegiao(json.regiao)
                                setCidade(json.localidade)
                                setBairro(json.bairro)
                                setLogradouro(json.logradouro)
                            }
                        })
                        .catch(error => console.log(error))
                } else {
                    alert("Formato de CEP Inválido")
                }
            }
        } else {
            alert("Por favor insira um CEP válido")
        }

    }
    function actionConsultAll() {
        const url = 'http://localhost:3000/api/clientes';
        fetch(url)
            .then(response => response.json())
            .then(json => json.map(informacoes => (
                {
                    ClienteID: informacoes.ClienteID,
                    NomeCliente: informacoes.NomeCliente,
                    CPF: informacoes.CPF,
                    Telefone: informacoes.Telefone,
                    Pais: informacoes.Pais,
                    CEP: informacoes.CEP,
                    Estado: informacoes.Estado,
                    Cidade: informacoes.Cidade,
                    Bairro: informacoes.Bairro,
                    Logradouro: informacoes.Logradouro,
                    Complemento: informacoes.Complemento,
                    Numero: informacoes.Numero
                })))
            .then(conteudoMapeado => setConteudoTabela(conteudoMapeado))
            .catch(error => {
                console.log(error)
                alert("Falha na conexão com o Banco de Dados")
            })

    }
    function consultaPorParametro(parametro, metodo) {
        const parametroPadrao = parametroConsulta;
        if (typeof parametro != 'object' || parametroPadrao !== '') {
            const url = parametro === '' ? `http://localhost:3000/api/clientes/${parametro}` : `http://localhost:3000/api/clientes/${parametroPadrao}`;
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (json.erro) {
                        alert(json.erro);
                    } else {
                        switch (metodo) {
                            case 'Update':
                                json.map(informacoes => {
                                    setNome(informacoes.NomeCliente);
                                    setCpf(informacoes.CPF);
                                    setTelefone(informacoes.Telefone);
                                    setPais(informacoes.Pais);
                                    setCep(informacoes.CEP);
                                    setEstado(informacoes.Estado);
                                    setCidade(informacoes.Cidade);
                                    setBairro(informacoes.Bairro);
                                    setLogradouro(informacoes.Logradouro);
                                    setNumero(informacoes.Complemento);
                                    setNumero(informacoes.Numero);
                                    setEntidadeID(informacoes.ClienteID);
                                })
                                break;

                            case 'Delete':
                                const method = 'DELETE';
                                const idAlvoDelete = json.map(informacoes => (informacoes.ClienteID))
                                const url = `http://localhost:3000/api/clientes/${idAlvoDelete}`;
                                fetch(url, {
                                    method: method,
                                })
                                    .then(response => response.json())
                                    .then(json => alert(json.msg))
                                    .catch(error => console(error))
                                
                                break;

                            default:
                                let conteudoFiltrado = json.map(informacoes => (
                                    {
                                        ClienteID: informacoes.ClienteID,
                                        NomeCliente: informacoes.NomeCliente,
                                        CPF: informacoes.CPF,
                                        Telefone: informacoes.Telefone,
                                        Pais: informacoes.Pais,
                                        CEP: informacoes.CEP,
                                        Estado: informacoes.Estado,
                                        Cidade: informacoes.Cidade,
                                        Bairro: informacoes.Bairro,
                                        Logradouro: informacoes.Logradouro,
                                        Complemento: informacoes.Complemento,
                                        Numero: informacoes.Numero,
                                    }
                                ))
                                setEntidadeID(conteudoFiltrado[0]['ClienteID']);
                                setConteudoTabela(conteudoFiltrado);
                                break;
                        }
                    }
                })
                .catch(error => {
                    console.log(error)
                    alert("Falha na conexão com o Servidor")
                })
        }


    }
    function actionAdd() {
        setNome('');
        setCpf('');
        setTelefone('');
        setPais('');
        setCep('');
        setUf('')
        setEstado('');
        setRegiao('');
        setCidade('');
        setBairro('');
        setLogradouro('');
        setComplemento('');
        setNumero('');
        setParametroConsulta('');
        setEntidadeID('');
        setActionRequest('');
    }
    function buscarErro(bodyContent) {
        let campoMensagem = {};
        let listaMensagens = [];
        let bodyContentFormated = {"content":{}}
        const contentBody = bodyContent['content']
        for (const campo in contentBody) {
            if (Object.prototype.hasOwnProperty.call(contentBody, campo)) {
                const conteudo = contentBody[campo]
                switch (campo) {
                    case 'NomeCliente':
                        campoMensagem[campo] = conteudo === '' ? 'Por favor informe o seu Nome Completo.' : null;
                        listaMensagens.push(campoMensagem[campo])
                        bodyContentFormated['content'][campo] = conteudo;
                        break;
                    case 'CPF':
                        let cpfFiltrado = conteudo.replace(/\D/g, '');
                        if (cpfFiltrado !== '') {
                            const validadorCpf = /^[0-9]{11}$/;
                            campoMensagem[campo] = validadorCpf.test(cpfFiltrado) === false ? `Por favor um ${campo} válido!` : null;
                            listaMensagens.push(campoMensagem[campo]);
                            bodyContentFormated['content'][campo] = cpfFiltrado;
                            break
                        } else {
                            campoMensagem[campo] = `Por favor um ${campo} válido!`;
                            listaMensagens.push(campoMensagem[campo]);
                            break;
                        }
                    case 'Telefone':
                        let telefoneFiltrado = conteudo.replace(/\D/g, '');
                        if (telefoneFiltrado !== '') {
                            const validadorTelefone = /^[0-9]{11}$/;
                            campoMensagem[campo] = validadorTelefone.test(telefoneFiltrado) === false ? `Por favor informe um ${campo} válido! Lembre-se do DDD.` : null;
                            listaMensagens.push(campoMensagem[campo]);
                            bodyContentFormated['content'][campo] = telefoneFiltrado;
                            break;
                        } else {
                            campoMensagem[campo] = `Por favor informe um ${campo} válido!`;
                            listaMensagens.push(campoMensagem[campo]);
                            break;
                        }
                    case 'Pais':
                        campoMensagem[campo] = conteudo === '' ? `Por favor selecione o seu ${campo}.` : null;
                        listaMensagens.push(campoMensagem[campo]);
                        bodyContentFormated['content'][campo] = conteudo;
                        break;
                    case 'CEP':
                        let cepFiltrado = conteudo.replace(/\D/g, '');
                        if (cepFiltrado) {
                            const validadorCep = /^[0-9]{8}$/;
                            campoMensagem[campo] = validadorCep.test(cepFiltrado) === false ? `Por favor informe um ${campo} válido!` : null;
                            listaMensagens.push(campoMensagem[campo]);
                            bodyContentFormated['content'][campo] =  conteudo;
                            break;
                        } else {
                            campoMensagem[campo] = `Por favor informe um ${campo} válido!`;
                            listaMensagens.push(campoMensagem[campo]);
                            break;
                        }
                    case 'Numero':
                        if (conteudo !== '' && conteudo.toUpperCase() === 'S/N') {
                            campoMensagem[campo] = null;
                            listaMensagens.push(campoMensagem[campo]);
                            bodyContentFormated['content'][campo] = conteudo;
                            break;
                        }
                        if (!isNaN(parseInt(conteudo)) && conteudo !== '') {
                            campoMensagem[campo] = null;
                            listaMensagens.push(campoMensagem[campo]);
                            bodyContentFormated['content'][campo] = conteudo;
                            break;
                        }
                        else {
                            campoMensagem[campo] = 'Por favor informe o número da sua residência!\nSe não houver informe S/N';
                            listaMensagens.push(campoMensagem[campo]);
                            break;
                        }

                    default:
                        campoMensagem[campo] = null;
                        listaMensagens.push(campoMensagem[campo]);
                        bodyContentFormated['content'][campo] = conteudo;
                        break;
                }

            }
        }
        //Pode ser retornado a variavel CampoMensagem, objeto que contem as mensagens de erro ou não para cada campo do body
        return [listaMensagens,bodyContentFormated];
    }
    async function buscarRedundacia(bodyContent) {
        const parametrosDeDistincao = [
            'Telefone',
            'CPF'
        ];
        const contentBody = bodyContent['content']
        let listaMensagens = [];

        for (const parametro of parametrosDeDistincao) {
            if (parametro !== '') {
                try {
                    const valorParametro = contentBody[parametro];
                    const url = `http://localhost:3000/api/clientes/${valorParametro}`
                    const response = await fetch(url);
                    const json = await response.json();
                    if (json.erro) {
                        listaMensagens.push(null);
                    } else {
                        listaMensagens.push(`Já existe um cliente cadastrado com o mesmo ${parametro}`);
                    }
                } catch (error) {
                    console.log(error);
                    listaMensagens.push('Servidor Indisponível ')
                }
            }
        }
        return listaMensagens;
    };
    async function actionSave() {
        const bodyContent = {
            "content": {
                "NomeCliente": nome,
                "CPF": cpf,
                "Telefone": telefone,
                "Pais": pais,
                "CEP": cep,
                "Estado": estado,
                "Cidade": cidade,
                "Bairro": bairro,
                "Logradouro": logradouro,
                "Complemento": complemento,
                "Numero": numero
            }
        }
        let [erroRetornado, bodyContentFormated] = buscarErro(bodyContent)
        erroRetornado = erroRetornado.find(msg => msg !== null);
        const method = actionRequest === 'Update' ? 'PUT' : 'POST'
        const windowConfirmMessage = method === 'PUT' ? 'Modificar as informações do cliente no Banco de Dados?' : "Inserir o novo cliente no Banco de Dados?";

        if (!erroRetornado) {
            const retornoBuscaRedundancia = await buscarRedundacia(bodyContentFormated);
            let redundanciaRetornada = retornoBuscaRedundancia.find(msg => msg !== null);
            if (!redundanciaRetornada || method === 'PUT') {
                var confirmacao = window.confirm(windowConfirmMessage);
                if (confirmacao) {
                    const url = method === 'PUT' ? `http://localhost:3000/api/clientes/${EntidadeID}` : `http://localhost:3000/api/clientes`;
                    fetch(url, {
                        method: method,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(bodyContentFormated)
                    })
                        .then(response => response.json())
                        .then(json => {
                            alert(json.msg)
                            setTimeout(() => {
                                actionAdd();    
                            }, 1500);
                            
                        })
                        .catch(error => console.log(error))
                }

            } else {
                alert(redundanciaRetornada);
            }

        } else {
            alert(erroRetornado);
        }
    }
    async function actionUpdate() {
        const parametroUpdate = parametroConsulta;
        if (parametroUpdate !== '') {
            consultaPorParametro(parametroUpdate, 'Update');
            setActionRequest('Update');

        } else {
            alert("É necessário informar algum parâmetro no campo de consulta para atualizar as informações do cliente desejado.")
        }
    }

    function actionDelete() {
        const parametroDelete = parametroConsulta;
        if (parametroDelete !== '') {
            const windowConfirmMessage = 'Excluir as informações do cliente no Banco de Dados?';
            let confirmacao = window.confirm(windowConfirmMessage);
            if (confirmacao) {
                consultaPorParametro(parametroDelete, 'Delete');

            }


        } else {
            alert("É necessário informar algum parâmetro no campo de consulta para excluir as informações do cliente desejado.")
        }
    }


    return (
        <main>
            <Cabecalho></Cabecalho>
            <section className="section_form">
                <FormInput type={"text"} infoInput={"InputNome"} labelContent={"Nome Completo"} placeholderContent={"Ex: Felipe Nogueira"} textInput={nome} onChangeInput={setNome} maxLength={255} readOnly={false}></FormInput>
                <FormInput type={"text"} infoInput={"InputCPF"} labelContent={"CPF"} placeholderContent={"Ex: 12345678910"} textInput={cpf} onChangeInput={setCpf} maxLength={14} readOnly={false}></FormInput>
                <FormInput type={"text"} infoInput={"InputTelefone"} labelContent={"Telefone"} placeholderContent={"Ex: 32991986860"} textInput={telefone} onChangeInput={setTelefone} maxLength={100} readOnly={false}></FormInput>
                <FormSelect idSelect={"SelectPaises"} opcoesSelect={paises} onChangeSelect={setPais} labelContent={"Pais"}></FormSelect>
                <FormSearch onClickIcon={carregarEndereco} type={"Text"} infoInput={"InputCEP"} labelContent={"CEP"} placeholderContent={"Ex: 36080-560"} textInput={cep} onChangeInput={setCep} maxLength={9} readOnly={false}></FormSearch>
                {estado !== '' && <FormInput type={"text"} infoInput={"InputEstado"} labelContent={'Estado'} textInput={estado} readOnly={true}></FormInput>}
                {cidade !== '' && <FormInput type={"text"} infoInput={"InputCidade"} labelContent={'Cidade'} textInput={cidade} readOnly={true}></FormInput>}
                {bairro !== '' && <FormInput type={"text"} infoInput={"InputBairro"} labelContent={'Bairro'} textInput={bairro} readOnly={true}></FormInput>}
                {logradouro !== '' && <FormInput type={"text"} infoInput={"InputLogradouro"} labelContent={'Logradouro'} textInput={logradouro} readOnly={true}></FormInput>}
                {logradouro !== '' && <FormInput type={"text"} infoInput={"InputComplemento"} labelContent={'Complemento'} placeholderContent={"Ex: Apto. 201"} textInput={complemento} onChangeInput={setComplemento} maxLength={895} readOnly={false} ></FormInput>}
                {logradouro !== '' && <FormInput type={"text"} infoInput={"InputNumero"} labelContent={'Número'} placeholderContent={"Ex: 1200 ou S/N"} textInput={numero} onChangeInput={setNumero} maxLength={10} readOnly={false}></FormInput>}
            </section>
            <section className="section_actions">
                <ActionAdd onClickAction={actionAdd}></ActionAdd>
                <ActionSave onClickAction={actionSave}></ActionSave>
                <ActionUpdate onClickAction={actionUpdate}></ActionUpdate>
                <ActionDelete onClickAction={actionDelete}></ActionDelete>
            </section>
            <section className="section_consult">
                <FormSearch onClickIcon={consultaPorParametro} type={"text"} infoInput={"InputParametro"} labelContent={"Consulta de Cliente por Parâmetro:"} placeholderContent={"Ex: ID | Nome | CPF | CEP"} textInput={parametroConsulta} onChangeInput={setParametroConsulta} maxLength={190} readOnly={false}></FormSearch>
                <ActionConsultAll onClickAction={actionConsultAll} ></ActionConsultAll>
            </section>
            <section className="section_table">
                <VisualTable conteudo={conteudoTabela}></VisualTable>
            </section>

        </main>
    )
}
