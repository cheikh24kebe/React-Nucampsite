import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = (props) => {
    const { id, image, name } = campsite;

    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>

    );
};

export default CampsiteCard;
