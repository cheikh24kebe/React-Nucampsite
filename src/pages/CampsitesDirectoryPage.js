import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';
import { Row } from 'reactstrap';


const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <Row className='ms-auto'>
                <CampsitesList />
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;

