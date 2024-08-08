import Card from 'react-bootstrap/Card';
import Tags from './Tags';
import "../../css/myCard.css"

const MyCard = ({ image, name, desc, tag, colorTag }) => {
  return (
    <>
      <Card className="Card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          {tag && <Tags text={tag} colorTag={colorTag} />}
        </Card.Body>
      </Card>
    </>
  );
};
export default MyCard
