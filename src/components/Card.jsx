import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardOriginal() {
  return (
    <Card className="CardOriginal" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          ejemplo
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardOriginal;