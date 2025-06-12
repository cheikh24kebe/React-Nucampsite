import { Row, Col } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [
        {
            id: 0,
            featuredItem: selectFeaturedCampsite()
        },
        {
            id: 1,
            featuredItem: selectFeaturedPromotion()
        },
        {
            id: 2,
            featuredItem: selectFeaturedPartner()
        }
    ];

    return (
        <Row>
            {items.map((item) =>
                item.featuredItem && (
                    <Col xs='12' md='4' key={item.id}>
                        <AnimatedDisplayCard item={item.featuredItem} />
                    </Col>
                )
            )}
        </Row>
    );
};

export default DisplayList;
