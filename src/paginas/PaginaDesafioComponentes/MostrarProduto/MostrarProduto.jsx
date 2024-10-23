const MostrarProduto = (props) => {

    return (
        <>
        <span>
            <strong>Produto: </strong><br />
            <strong>Nome: </strong>
            {props.produtos.nome} <br />
            <strong>Preço: </strong>
            {props.produtos.preco} <br />
            <strong>Estoque: </strong>
            {props.produtos.estoque}
        </span>
        </>
    );
};

export default MostrarProduto;