import './.NavBar.scss';
import logo from '../../assets/logo_authorized_reseller.svg';

const NavBar = () => {
    return (
        <header className="main-navBar">
            <img src={logo} alt="" />
            <nav className="main-navBar__menu">
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">FAQs</a>
            </nav>
        </header>
    )
}

export default NavBar;