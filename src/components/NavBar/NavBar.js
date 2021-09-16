import './.NavBar.scss';
import logo from '../../assets/logo_authorized_reseller.svg';
import CardWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header className="main-navBar">
            <img src={logo} alt="" />
            <nav className="main-navBar__menu">
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">FAQs</a>
            </nav>
            <div className="main-navBar__cart">
                <CardWidget />
            </div>


        </header>
    )
}

export default NavBar;