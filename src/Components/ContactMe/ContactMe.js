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
            <p> Hi visitor, if scrolled all the way to here you probably want to know more about me. </p>
            <p> My relatiosnship with programming started when I was in high scholl. </p>
            <p> Having the abilty to create something from scratch with just few code lines is amazing. </p>
            <p> Add to that the fact that the internat is full of informations so for an autodidact like me, the options are unlimited. </p>
            <p className='lighter'> If you liked what you see or you have other request or question, don’t hesitate to contact me via the following methoeds. </p>
            
            <div className='icons'>
                <FontAwesomeIcon className='icon' icon={ faGithubSquare } />
                <FontAwesomeIcon className='icon' icon={ faLinkedin } />
                <FontAwesomeIcon className='icon' icon={ faEnvelope } />
                <FontAwesomeIcon className='icon' icon={ faFilePdf } />
            </div>

            <footer> All rights reserved to Manor Hagage © { new Date().getFullYear() } </footer>

            
        </div>
    )
}

export default ContactMe;