import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import displayMenu from './displayMenu.js';
import closeMenu from './closeMenu.js';

const bars = <FontAwesomeIcon icon={faBars} className="text-white"/>;
const xIcon = <FontAwesomeIcon icon={faX} className="text-white"/>;

export default function NavBar(){
    return(
        <nav className="nav bg-dark d-flex align-items-center">
            <h3 className='title text-white'>Sábrium<b className='h6'>Comidas rápidas a domicilio</b></h3>
            <div className="activeMenu d-flex justify-content-center align-items-center p-2 rounded-circle position-fixed" onClick={displayMenu}>
                {bars}
            </div>
            <div className='menu d-none flex-column text-center position-fixed'>
                <button className='closeMenu d-flex justify-content-center align-items-center position-absolute text-white' onClick={closeMenu}>
                    {xIcon}
                </button>
                <a className='food-index' href='#'>Pizzas</a>
                <a className='food-index' href='#'>Hamburguesas</a>
                <a className='food-index' href='#'>Empanadas</a>
                <a className='food-index' href='#'>Refrescos</a>
            </div>
        </nav>
    )
}