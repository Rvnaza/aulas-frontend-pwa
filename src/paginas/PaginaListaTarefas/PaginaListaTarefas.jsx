import Principal from "../../comum/componentes/Principal/Principal";
import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { FaRegTrashCan } from "react-icons/fa6";

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    if (descricao && descricao.trim()) {
      tarefas.push(descricao);
      setTarefas([...tarefas]);
    } else {
      alert("Preencha o campo Descrição");
    }
    setDescricao("");
    document.getElementById("campoDescricao").focus();
  };
  const removerDaLista = (index) => {
    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  };

  return (
    <Principal titulo={"Lista de Tarefas"} voltarPara={"/"}>
      <div className="listaTarefas-css">
        <input
          id="campoDescricao"
          type="text"
          value={descricao}
          placeholder="Descrição da tarefa"
          onChange={(e) => setDescricao(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              adicionarNaLista();
            }
          }}
        />
        <BotaoCustomizado aoClicar={adicionarNaLista}>+</BotaoCustomizado>
      </div>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <FaRegTrashCan
                color="purple"
                onClick={() => removerDaLista(index)}
              />
            </li>
          );
        })}
      </ul>
    </Principal>
  );
};

export default PaginaListaTarefas;
