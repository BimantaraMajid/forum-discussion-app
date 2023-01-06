import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({
  threads,
  upVotes,
  downVotes,
}) {
  return (
    <Row>
      {
        threads.map((thread) => (
          <Col sm={12} className="py-3 border-bottom">
            <ThreadItem
              key={thread.id}
              {...thread}
              upVotes={upVotes}
              downVotes={downVotes}
            />
          </Col>
        ))
      }
    </Row>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVotes: PropTypes.func.isRequired,
  downVotes: PropTypes.func.isRequired,
};

export default ThreadList;
