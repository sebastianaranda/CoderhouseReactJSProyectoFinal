import React, { useContext } from 'react';
import './.NavBar.scss';
import logo from '../../assets/logo_authorized_reseller.svg';
import CardWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
//context
import CartContext from "../context/CartContext";

const NavBar = () => {

    const { cartItems } = useContext(CartContext)

    const openSubMenu = (e) => {
        if (e.target.classList.contains('show')) {
            e.target.classList.remove('show')
        } else {
            e.target.classList.add('show')
        }
    }

    return (
        <header className="navBar">
            <Link className="navBar__logo" to='/' >
                <img src={logo} alt="" />
            </Link>
            <nav className="navBar__nav">
                <ul className='navBar__menu'>
                    <Link to="/">
                        <li>Tienda</li>
                    </Link>
                    <li className='navBar__productos' onClick={openSubMenu}>Productos
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
                </ul>
            </nav>
            <div className="navBar__cart">
                {
                    cartItems.length !== 0 ? (
                        <CardWidget />
                    )
                        :
                        (<></>)
                }

            </div>
        </header>
    )
}

export default NavBar;