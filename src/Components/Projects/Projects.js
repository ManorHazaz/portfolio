import './Projects.css';

import { useState } from 'react';

import { Project } from '../Project';

import projects from '../../Data/Projects';
import { Triangles } from '../Triangles';


function Projects() 
{
    const [ limitProjects, setLimitProjects ] = useState( 4 );

    return (
        <div className='projects'>
            <h1> My Projects </h1>
            <div className='container'>
                {
                    projects.slice( 0, limitProjects ).map(( project, index ) => 
                    (
                        <Project key={ index } project={ project } />
                    ))
                }
            </div>
            { 
                limitProjects < projects.length 
                && <button className='btn load-more' onClick={ () => setLimitProjects( limitProjects + 2 ) }>
                        Show More!
                    </button>
            }
            <Triangles />  
        </div>
    )
}

export default Projects;