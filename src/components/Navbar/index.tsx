import * as style from './styles';
import NavToggle from '../NavToggle';

const Navbar = () => {
    return (
    <style.Navbar>
        <nav>
            <h1>Igor Lima</h1>

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