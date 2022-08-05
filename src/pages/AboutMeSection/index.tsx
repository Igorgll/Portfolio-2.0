import * as style from './styles';
import handsome from '../../assets/IMG_20220604_143731_198.jpg';

const about_me_text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ex, eos dolore quae placeat rem distinctio itaque iusto quasi, deleniti quos totam aperiam asperiores autem est tempora fugiat odio accusantium.Aperiam, labore explicabo. Sequi at iure excepturi atque natus, molestiae dicta voluptates quo explicabo cupiditate non, consectetur, sed blanditiis. Dolores quasi perferendis, at neque sapiente repellendus. Doloribus natus obcaecati nostrum?'

const AboutMeSection = () => {
    return (
        <style.aboutMeSection>
            <div className='about_me_box'>
                <div className="col-left">
                    <img src={handsome} alt="Some handsome guy" />
                </div>
                <div className="col-right">
                    <h1>about me</h1>
                    <h2>{about_me_text}</h2>
                </div>
            </div>
        </style.aboutMeSection>
    );
}

export default AboutMeSection;