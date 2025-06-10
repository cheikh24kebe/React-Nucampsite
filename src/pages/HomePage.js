import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import { Row } from 'reactstrap';
import Featured from '../features/Featured';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row className='row-content'>
                <DisplayList />
            </Row>
        </Container>

    );
};

export default HomePage;
