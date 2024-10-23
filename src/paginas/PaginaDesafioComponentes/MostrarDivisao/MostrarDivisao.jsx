const MostrarDivisao = (props) => {
    return (
<span>
    A divisão entre {props.numeroUm} e {props.numeroDois} é: {' '}
    <strong> {props.numeroUm * props.numeroDois} </strong>
</span>
    );
};

export default MostrarDivisao;