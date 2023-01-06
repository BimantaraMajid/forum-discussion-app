import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa';
import { Badge, Button } from 'reactstrap';
import { postedAt } from '../utils/formatDate';

function ThreadDetail({
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  authUser,
  owner,
  upVotes,
  downVotes,
}) {
  const isThreadUpVote = upVotesBy.includes(authUser);
  const isThreadDownVote = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVotes(isThreadUpVote);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVotes(isThreadDownVote);
  };

  return (
    <section>
      <header>
        <span className="d-flex justify-content-between align-item-center">
          <h3>{ title }</h3>
          <small>{postedAt(createdAt)}</small>
        </span>
        <Badge>
          #
          {category}
        </Badge>
      </header>
      <article className="p-2">
        <p dangerouslySetInnerHTML={{ __html: body }} />
      </article>
      <footer>
        <div>
          {
            upVotes && (
              <span>
                <Button
                  className="text-decoration-none text-black py-0 px-2"
                  color="link"
                  type="button"
                  onClick={onUpVoteClick}
                >
                  {isThreadUpVote ? <FaThumbsUp style={{ color: 'black' }} /> : <FaRegThumbsUp />}
                  {upVotesBy.length}
                </Button>
              </span>
            )
          }
          {
            downVotes && (
              <span>
                <Button
                  className="text-decoration-none text-black py-0 px-2"
                  color="link"
                  type="button"
                  onClick={onDownVoteClick}
                >
                  {isThreadDownVote ? <FaThumbsDown style={{ color: 'black' }} /> : <FaRegThumbsDown />}
                  {downVotesBy.length}
                </Button>
              </span>
            )
          }
          <span>
            Created By &nbsp;
            <img
              className="rounded-circle me-1"
              src={owner.avatar}
              alt={owner}
              width={20}
            />
            <b>{owner.name}</b>
          </span>
        </div>
      </footer>
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVotes: PropTypes.func.isRequired,
  downVotes: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export { userShape };

export default ThreadDetail;
