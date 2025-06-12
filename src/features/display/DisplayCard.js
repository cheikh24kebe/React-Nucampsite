import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    if (!item) return null;

    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>
                    {item.designation ? item.designation : item.description}
                </CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;
