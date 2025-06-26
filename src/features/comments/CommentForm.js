import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from './commentsSlice';
import {
    Button,
    Label,
    Modal,
    ModalBody,
    ModalHeader
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const comment = {
            id: values.id,
            campsiteId: parseInt(campsiteId),
            rating: parseInt(values.rating),
            text: values.commentText,
            author: values.author,
            date: new Date(Date.now()).toISOString()
        };

        console.log('Submitted comment:', comment);
        dispatch(addComment(comment));
        setModalOpen(false);
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Submit Comment
            </Button>

            <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
                <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
                    Submit Comment
                </ModalHeader>

                <ModalBody>
                    <Formik
                        initialValues={{
                            rating: '',
                            author: '',
                            commentText: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateCommentForm}
                    >
                        <Form>
                            <Label htmlFor='rating'>Rating</Label>
                            <Field name='rating' as='select' className='form-control'>
                                <option value=''>Select...</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Field>
                            <ErrorMessage name='rating'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>

                            <Label htmlFor='author'>Your Name</Label>
                            <Field
                                name='author'
                                placeholder='Your Name'
                                className='form-control'
                            />
                            <ErrorMessage name='author'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>

                            <Label htmlFor='commentText'>Comment</Label>
                            <Field
                                name='commentText'
                                as='textarea'
                                rows='6'
                                className='form-control'
                            />
                            <ErrorMessage name='commentText'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>

                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

const validateCommentForm = (values) => {
    const errors = {};
    if (!values.rating) {
        errors.rating = 'Required';
    }
    if (!values.author) {
        errors.author = 'Required';
    } else if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } else if (values.author.length > 15) {
        errors.author = 'Must be 15 characters or less.';
    }
    if (!values.commentText) {
        errors.commentText = 'Required';
    }
    return errors;
};

export default CommentForm;
