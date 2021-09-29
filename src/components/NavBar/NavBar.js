import './.NavBar.scss';
import logo from '../../assets/logo_authorized_reseller.svg';
import CardWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="navBar">
            <img className="navBar__img" src={logo} alt="" />
            <nav className="navBar__nav">
                <ul>
                    <Link to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link to="/detalle/1">
                        <li>Productos</li>
                    </Link>
                    <Link to="/faqs">
                        <li>FAQs</li>
                    </Link>
                </ul>
            </nav>
            <div className="navBar__cart">
                <CardWidget />
            </div>


        </header>
    )
}

export default NavBar;