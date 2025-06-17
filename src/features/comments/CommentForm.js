import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';

export default function CommentForm({ campsiteId }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = values => {
    const comment = {
      id: values.id,
      campsiteId: parseInt(campsiteId),
      rating: parseInt(values.rating),
      text: values.commentText,
      author: values.author
    };
    console.log(comment);
    setModalOpen(false);
  };

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ rating: undefined, author: '', commentText: '' }}
            validate={validateCommentForm}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Field name="rating" as="select" className="form-control">
                  <option>Select...</option>
                  {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                </Field>
                <ErrorMessage name="rating">
                  {msg => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="author">Your Name</Label>
                <Field name="author" placeholder="Your Name" className="form-control" />
                <ErrorMessage name="author">
                  {msg => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="commentText">Comment</Label>
                <Field name="commentText" as="textarea" rows="12" className="form-control" />
              </FormGroup>

              <Button type="submit" color="primary">Submit</Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
}
