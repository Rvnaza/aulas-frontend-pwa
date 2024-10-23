const MostrarMultiplicacao = (props) => {
    return (
<span>
    A multiplicação de {props.numeroUm} por {props.numeroDois} é: {' '}
    <strong> {props.numeroUm * props.numeroDois} </strong>
</span>
    );
};

export default MostrarMultiplicacao;