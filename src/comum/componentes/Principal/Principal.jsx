import './Principal.css';
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';

function Principal({ voltarPara, titulo, children }) {

  return <main className='principal_root'>

    <div className='principal_titulo'>

      {voltarPara && <Link to={voltarPara}>
      <SlArrowLeft size={30} color='principal' />
       </Link>}

      <h1>{titulo}</h1>
      
    </div>


    {children}

  </main>;
}

export default Principal;
