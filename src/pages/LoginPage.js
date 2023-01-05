import React from 'react';
import { IoChatbox } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card, CardBody, Col, Container, Row,
} from 'reactstrap';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <Container className="">
      <Row className="align-item-center min-h-screen">
        <Col lg="7" className="text-center">
          <h1 className="text-primary">
            <IoChatbox size={100} />
            SocialAsk
          </h1>
          <h3>
            Shy &nbsp;
            <strong>To ASK</strong>
            ,
            <br />
            Lost On The Road.
          </h3>
        </Col>
        <Col lg="5">
          <Card key="login card" className="shadow border-0 p-2">
            <CardBody>
              <LoginInput login={onLogin} />
              <hr />
              <p>
                Don&apos;t have an account?
                {' '}
                <Link to="/register">Register</Link>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
