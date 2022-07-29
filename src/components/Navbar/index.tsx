import * as style from './styles';
import NavToggle from '../NavToggle';
import IgorLima from '../../assets/igorLima.png'

const Navbar = () => {
    return (
    <style.Navbar>
        <nav>
            <img src={IgorLima} alt="" />

            <ul>
                <li>About me</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            <NavToggle />
        </nav>
    </style.Navbar>);
}

export default Navbar;