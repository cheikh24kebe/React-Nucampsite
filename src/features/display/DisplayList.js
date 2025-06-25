import { Row, Col } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import { useSelector } from 'react-redux';

const DisplayList = () => {
    const items = useSelector((state) => [
        {
            id: 0,
            featuredItem: selectFeaturedCampsite(state)
        },
        {
            id: 1,
            featuredItem: selectFeaturedPromotion(state)
        },
        {
            id: 2,
            featuredItem: selectFeaturedPartner(state)
        }
    ]);

    console.log('display items:', items);

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
