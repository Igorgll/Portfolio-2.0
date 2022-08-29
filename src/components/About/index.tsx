import * as style from './styles';
import handsome from '../../assets/handsome.jpg';

const About = () => {
    return (
        <style.aboutIgor>
            <img src={handsome} alt="Picture of me" />
        
            <p>My name's <span>Igor</span></p>
            <p>and I'm a <span>Front End Developer</span></p>
        </style.aboutIgor>
    );
}

export default About;