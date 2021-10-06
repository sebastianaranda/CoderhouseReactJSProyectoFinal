import './.NavBar.scss';
import logo from '../../assets/logo_authorized_reseller.svg';
import CardWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const NavBar = () => {
    const { theme, handleTheme } = useContext(ThemeContext);

    return (
        <header className="navBar">
            <Link className="navBar__logo" to='/' >
                <img src={logo} alt="" />
            </Link>
            <nav className="navBar__nav">
                <ul className='navBar__menu'>
                    <Link to="/">
                        <li>Inicio</li>
                    </Link>
                    <li className='navBar__productos'>Productos
                        <ul className='submenu'>
                            <Link to="/category/iphone">
                                <div>iPhone</div>
                            </Link>
                            <Link to='/category/watch'>
                                <div>Watch</div>
                            </Link>
                            <Link to='/category/mac'>
                                <div>Mac</div>
                            </Link>
                            <Link to='/category/ipad'>
                                <div>iPad</div>
                            </Link>
                        </ul>
                    </li>
                    <Link to="/faqs">
                        <li>Contacto</li>
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