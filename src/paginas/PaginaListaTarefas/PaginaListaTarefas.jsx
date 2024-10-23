import Principal from "../../comum/componentes/Principal/Principal";
import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { FaRegTrashCan } from "react-icons/fa6";
const PaginaListaTarefas = () => {
    const [descricao, setDescricao] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const adicionarNaLista = () => {
        if (descricao && descricao.trim()) {
            tarefas.push({ descricao, feita: false });
            setTarefas([...tarefas]);
        }
        else {
            alert('Preencha o campo Descrição');
        }
        setDescricao('');
        document.getElementById("campoDescricao").focus()
    };
    const removerDaLista = (index) => {

        if(confirm('Tem Certeza?')){
            tarefas.splice(index, 1);
            setTarefas([...tarefas]);
        }

    };
    const marcarComoFeita = (index) => {
        const tarefaEdicao = tarefas[index];
        tarefas[index] = {
            ...tarefaEdicao,
            feita: !tarefaEdicao.feita
        };

        setTarefas([...tarefas])
    };

    return (
        <Principal titulo={`Lista de Tarefas (${tarefas.length})`} voltarPara={"/"}>
            <div className="listaTarefas-css">
                <input id="campoDescricao"
                    type="text"
                    value={descricao}
                    placeholder="Descrição da tarefa"
                    onChange={(e) => setDescricao(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            adicionarNaLista();
                        }
                    }} />
                <BotaoCustomizado aoClicar={adicionarNaLista}>+</BotaoCustomizado>
            </div>
            <ul>
                {tarefas.map((item, index) => {
                    return (
                        <li key={index} className="pagina-lista-tarefa_item">
                            <input
                                type="checkbox"
                                checked={item.feita}
                                onChange={() => marcarComoFeita(index)} />
                                <span 
                                style={{

                                }}>

                                </span>
                            {item.descricao}
                            <FaRegTrashCan
                                color="purple"
                                onClick={() => removerDaLista(index)} />
                        </li>
                    )
                })}
            </ul>
            {tarefas.length === 0 && (
                <span className="pagina-lista-tarefas_mensagem-vazia">
                    Não tem tarefas listadas.
                </span>
            )
            }
        </Principal>
    );
};

export default PaginaListaTarefas;