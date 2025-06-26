import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
                <CommentForm campsiteId={campsiteId} />
            </Col>
        );
    }

    return (
        <Col md='5' className='m-1'>
            <h4>Comments</h4>
            <p>There are no comments for this campsite yet.</p>
            <CommentForm campsiteId={campsiteId} />
        </Col>
    );
};

export default CommentsList;
