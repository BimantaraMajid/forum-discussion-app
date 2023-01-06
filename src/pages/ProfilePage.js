import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

function ProfilePage() {
  const {
    authUser,
  } = useSelector((states) => states);

  if (!authUser?.id) return null;

  return (
    <Row className="px-4 py-2">
      <Col>
        <Card className="my-2 shadow-sm">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/180"
            style={{
              height: 250,
            }}
            top
            width="100%"
          />
          <div className="d-flex justify-content-center avatar-profile">
            <img alt="profile" width={100} src={authUser.avatar} className="rounded-circle shadow" />
          </div>
          <CardBody>
            <CardTitle tag="h3" className="text-center text-capitalize">
              {authUser.name}
            </CardTitle>
            <CardText className="text-center">
              <small className="text-muted">
                { authUser.email }
              </small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default ProfilePage;
