import React from 'react';
import { IoChatbox } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from 'reactstrap';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const {
    users = [],
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  if (users?.id) {
    window.location.href = '/';
  }

  return (
    <Container className="">
      <Row className="align-item-center min-h-screen">
        <Col lg="7" className="text-center">
          <h1 className="text-primary">
            <IoChatbox size={300} />
            SocialAsk
          </h1>
        </Col>
        <Col lg="5">
          <Card key="login card" className="shadow border-0 p-2">
            <CardBody>
              <h2>Create your account</h2>
              <RegisterInput register={onRegister} />
              <hr />
              <p>
                Already have an account?
                <Link to="/">Login</Link>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
