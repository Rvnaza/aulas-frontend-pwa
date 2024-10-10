import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
   const navigate =  useNavigate ();
    
    return (
        <Principal titulo={"Página inicial"}>
            <BotaoCustomizado cor="primaria" aoClicar={() => navigate('/lista-produtos')}>
                Lista Produtos
            </BotaoCustomizado>
            {/* <BotaoCustomizado cor="secundaria" aoClicar={() => alert('TONY')}>
                TONY
            </BotaoCustomizado>
            <BotaoCustomizado cor="terciaria" aoClicar={() => alert('*CHOPPER*')}>
                CHOPPER
            </BotaoCustomizado> */}
        </Principal>
    );
};

export default PaginaInicial;
