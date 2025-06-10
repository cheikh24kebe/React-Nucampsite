import { Row, Col } from 'reactstrap';
import DisplayCard from './DisplayCard';

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
            {items
                .filter((item) => item.featuredItem)
                .map((item) => (
                    <Col xs='12' md='4' key={item.id}>
                        <DisplayCard item={item.featuredItem} />
                    </Col>
                ))}
        </Row>
    

    );
};

console.log('Partner:', selectFeaturedPartner());
export default DisplayList;
