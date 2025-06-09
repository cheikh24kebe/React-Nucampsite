import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = (props) => {
    const { id, image, name } = props.campsite;

    return (
        <Link to={`${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
