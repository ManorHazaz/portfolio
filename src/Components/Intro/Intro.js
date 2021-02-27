import './Intro.css';

import undrawImg from '../../Static/undraw_web_developer_p3e5.svg';

function Intro() 
{
    return (
        <div className='intro'>
            <div className='main'>
                <div className='container'>
                    <h1> Hi, </h1>
                    <h1> I'm Manor Hagage, </h1>
                    <h1> A Web Developer </h1>
                </div>
                <img src={ undrawImg } />
            </div>
            <div className='title'>
                <div className='letter'> M </div>
                <div className='shadow'> M </div>
            </div>
        </div>
    )
}

export default Intro;