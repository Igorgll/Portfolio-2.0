import * as style from './styles';
import handsome from '../../assets/IMG_20220604_143731_198.jpg';

const AboutMeSection = () => {
    return (
        <style.aboutMeSection>
            <div className='about_me_box'>
                <div className="col-left">
                    <img src={handsome} alt="Some handsome guy" />
                </div>
                <div className="col-right">
                    <h1>about me</h1>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quas dolorem praesentium eveniet tempora expedita ad quod libero in! Eveniet provident laboriosam neque beatae impedit vel velit nobis assumenda eius!</h2>
                </div>
            </div>
        </style.aboutMeSection>
    );
}

export default AboutMeSection;