import './Project.css';

function Project({ project })
{
    return (
        <div className='project'>
            <div className='preview'>
                <img src={ project.imgPath } />
            </div>

            <div className='details'>

                <h3> { project.title } </h3>
                <p className='description' dangerouslySetInnerHTML={{ __html: project.description }}></p>

                <div className='buttons'>
                    <button className='btn github' onClick={()=> window.open( project.gitLink, "_blank")} > Github </button>
                    <button className='btn preview' onClick={()=> window.open( project.viewLink, "_blank")} > Preview </button>
                </div>

            </div>
            
        </div>
    )
}

export default Project;