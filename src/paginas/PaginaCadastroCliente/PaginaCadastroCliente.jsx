import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaCadastroCliente.css";
import ServicoCliente from "../../comum/servicos/servicoCliente";
import { useNavigate } from "react-router-dom";

const PaginaCadastroCliente = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const servicoCliente = new ServicoCliente();


  const salvar = () => {
    const novoCliente = { 
        nome, 
        email, 
        celular, 
        dataNascimento, 
        cpf };
    console.log("Novo Cliente", novoCliente);

    servicoCliente.salvar(novoCliente);
    navigate('/lista-clientes');
  };

  return (
    <Principal voltarPara={"/lista-clientes"} titulo={"New User"}>
      <div className="campo">
        <label>Nome: </label>
        <input
          type="text"
          placeholder="Digite seu nome:"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>E-mail: </label>
        <input
          type="text"
          placeholder="Digite seu e-mail:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Celular:</label>
        <input
          type="tel"
          placeholder="Digite seu número de celular:"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Data de Nascimento: </label>
        <input
          type="date"
          placeholder="Digite sua data de nascimento:"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>CPF: </label>
        <input
          type="tel"
          placeholder="Digite seu CPF:"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <BotaoCustomizado cor={"sucesso"} aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroCliente;
