import { Row, Col } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { useSelector } from 'react-redux';

const DisplayList = () => {
    const featuredCampsite = useSelector((state) =>
        state.campsites.campsitesArray.find((campsite) => campsite.featured)
    );
    const featuredPromotion = useSelector((state) =>
        state.promotions.promotionsArray.find((promotion) => promotion.featured)
    );
    const featuredPartner = useSelector((state) =>
        state.partners.partnersArray.find((partner) => partner.featured)
    );

    const items = [
        { id: 0, featuredItem: featuredCampsite },
        { id: 1, featuredItem: featuredPromotion },
        { id: 2, featuredItem: featuredPartner }
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
