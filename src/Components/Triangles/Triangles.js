import './Triangles.css';

function Triangle() 
{
    const triangles = [];

    function getRandomInt(max) 
    {
        return Math.floor(Math.random() * Math.floor(max));
    }

    for (let index = 0; index < 7; index++) 
    {
        triangles.push( getRandomInt( 7 ) );
    }

    return (
        <>
            {
                triangles.map( (triangle, index) => 
                (
                    <span className={`triangle triangle-${ triangle } position-${ index }`}></span>
                ))
            }
        </>
    )
}

export default Triangle;