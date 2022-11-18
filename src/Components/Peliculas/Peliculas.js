import Card from 'react-bootstrap/Card';
import peliculas from './Peliculas.json';
function Pelicula(){
    return (
        <div>
        {peliculas.map(peli => 
        <Card style={{width: '100%'}}>
            <Card.Img variant="top" style={{width: '15%'}} src={peli.img}/>
            <Card.Body>
                <Card.Title>{peli.titulo}</Card.Title>
                <Card.Text>
                    {peli.descripcion}
                </Card.Text>
                <Card.Text>
                    {peli.sinopsis}
                </Card.Text>
                <Card.Text>
                    {peli.reparto}
                </Card.Text>
            </Card.Body>    
        </Card>)}
        </div>
        
    );
}
export default Pelicula;