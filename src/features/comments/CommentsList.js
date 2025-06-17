import React from 'react';
import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
  const comments = selectCommentsByCampsiteId(campsiteId);

  return (
    <Col md="5" className="m-1">
      <h4>Comments</h4>
      {comments && comments.length > 0 ? (
        comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <p>There are no comments for this campsite yet.</p>
      )}
      <CommentForm campsiteId={campsiteId} />
    </Col>
  );
};

export default CommentsList;
