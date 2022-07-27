import * as style from './styles'
import Navbar from '../../components/Navbar';
import computer from '../../assets/monitor_illustration_2.svg';
import wavingHand from '../../assets/waving-hand_1f44b.png';

const SectionOne = () => {
    return (
    <style.SectionOne>
        <Navbar />

        <div className="content">
            <div className='col-left'>
                <img src={computer} alt="Computer pic" />
            </div>

            <div className='col-right'>
                <span>Hi, I'm Igor <img src={wavingHand} width="60px" alt="Waving hand icon" /> </span>
                <h1>I like to build interactive and responsive web applications using React, and JavaScript based libraries.</h1>
            </div>
        </div>
    </style.SectionOne>
    );
}

export default SectionOne;