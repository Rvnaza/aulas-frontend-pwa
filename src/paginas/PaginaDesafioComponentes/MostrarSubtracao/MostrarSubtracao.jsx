const MostrarSubtracao = (props) => {
    return (
<span>
    A subtração de {props.numeroUm} - {props.numeroDois} é: {' '}
    <strong> {props.numeroUm - props.numeroDois} </strong>
</span>
    );
};

export default MostrarSubtracao;