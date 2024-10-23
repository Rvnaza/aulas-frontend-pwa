const MostrarProduto = (props) => {

    return (
        <>
            <span>
                Números pares: {props.numeros.filter((n) => n % 2 === 0).map((n) => (
                    <strong>
                    <li key={n}>
                        {n}
                    </li>
                    </strong>
                ))}
            </span>
        </>
    );
};

export default MostrarProduto;