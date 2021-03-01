import './ContactMe.css';

import selfie from '../../Static/Selfie.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactMe() 
{
    return (
        <div className='contact-me'>

            <div className='selfie'>
                <img src={ selfie } />
            </div>

            <h1> Contact Me </h1>
            <p> Hi you, if scrolled all the way to this point, you probably want to know more about me... </p>
            <p> I started programming when I was in high school. </p>
            <p> Having the abilty to create webiste or program from scratch with just few code lines, it was almost like a magic. </p>
            <p> As a self-taught programmer with the endless data that exist on the internet, I feel like the options are unlimited. </p>
            <p className='lighter'> Feel Free to Contact Me Via the Following Methods. </p>
            
            <div className='icons'>
                <FontAwesomeIcon className='icon' icon={ faGithubSquare } onClick={ () => window.open( 'https://github.com/manorhagage', "_blank")} />
                <FontAwesomeIcon className='icon' icon={ faLinkedin } onClick={ () => window.open( 'https://www.linkedin.com/in/manor-hagage-662ab21a0/', "_blank")} />
                <FontAwesomeIcon className='icon' icon={ faEnvelope } onClick={ () => window.open('mailto:manorhagage@gmail.com') } />
                <a href='Static/CV/CV.pdf' download><FontAwesomeIcon className='icon' icon={ faFilePdf } /></a>
            </div>

            <footer> All rights reserved to Manor Hagage © { new Date().getFullYear() } </footer>

            
        </div>
    )
}

export default ContactMe;