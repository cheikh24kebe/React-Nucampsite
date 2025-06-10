import { CAMPSITES } from '../app/shared/CAMPSITES';
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const Featured = () => {
    const featuredCampsites = CAMPSITES.slice(0, 2);

    return (
        <Row>
            {featuredCampsites.map((campsite) => (
                <Col md='6' key={campsite.id}>
                    <Card className='m-2'>
                        <CardImg src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle tag='h5'>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Featured;
