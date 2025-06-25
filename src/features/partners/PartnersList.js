import { Col } from 'reactstrap';
import Partner from './Partner';
import { useSelector } from 'react-redux';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    return (
        <div className='container'>
            <div className='row'>
                {partners.map((partner) => (
                    <Col md='5' className='m-4' key={partner.id}>
                        <Partner partner={partner} />
                    </Col>
                ))}
            </div>
        </div>
    );
};

export default PartnersList;
