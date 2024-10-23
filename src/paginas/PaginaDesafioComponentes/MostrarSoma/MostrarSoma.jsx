const MostrarSoma = (props) => {
    return (
<span>
    A soma de {props.numeroUm} + {props.numeroDois} é: {' '}
    <strong> {props.numeroUm + props.numeroDois} </strong>
</span>
    );
};

export default MostrarSoma;