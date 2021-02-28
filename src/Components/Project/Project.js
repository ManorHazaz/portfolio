import './Project.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project({ project })
{
    return (
        <div className='project'>

            <h3> { project.title } </h3>
            <div className='preview'>
                <img src={ project.imgPath } />
            </div>

            <div className='show-more'>
                <p className='description' dangerouslySetInnerHTML={{ __html: project.description }}></p>

                <div className='icons'>
                    <FontAwesomeIcon className='icon' icon={ faGithub } onClick={()=> window.open( project.gitLink, "_blank")} />
                    <FontAwesomeIcon className='icon' icon={ faEye } onClick={()=> window.open( project.viewLink, "_blank")} />
                </div>

            </div>
            
        </div>
    )
}

export default Project;