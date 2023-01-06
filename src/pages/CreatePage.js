import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap';
import ThreadCreateInput from '../components/ThreadCreateInput';
import { asyncAddThread } from '../states/threads/action';

function CreatePage() {
  const dispatch = useDispatch();

  const onCreateThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <Row className="py-5">
      <Col className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <ThreadCreateInput createThread={onCreateThread} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default CreatePage;
