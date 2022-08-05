import * as style from './styles';
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
        </nav>
    </style.Navbar>);
}

export default Navbar;