import React from 'react';
import PropTypes from 'prop-types';
import {
  FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown, FaRegCommentDots,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { postedAt } from '../utils/formatDate';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
  authUser,
  user,
  upVotes,
  downVotes,
}) {
  const navigate = useNavigate();
  const isThreadUpVote = upVotesBy.includes(authUser);
  const isThreadDownVote = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVotes(id, isThreadUpVote);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVotes(id, isThreadDownVote);
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  const bodySubstring = (val = '') => {
    const maxSize = 250;
    if (val.length >= maxSize) return `${val.substring(0, maxSize)}...`;
    return val;
  };

  return (
    <div className="d-flex align-items-start">
      <img className="rounded-circle" src={user.avatar} alt="user" />
      <div className="">
        <Button
          className="text-decoration-none "
          color="link"
          type="button"
          onClick={onThreadClick}
          onKeyDown={onThreadPress}
        >
          <h3>{ title }</h3>
        </Button>
        <div className="ps-2">
          <p dangerouslySetInnerHTML={{ __html: bodySubstring(body) }} />
          <small>
            {postedAt(createdAt)}
            {' #'}
            { category }
          </small>
          <div className="d-flex">
            {
              upVotes && (
                <span>
                  <Button
                    className="text-decoration-none text-black px-1 py-0"
                    type="button"
                    color="link"
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
                    className="text-decoration-none text-black px-1 py-0"
                    type="button"
                    color="link"
                    onClick={onDownVoteClick}
                  >
                    {isThreadDownVote ? <FaThumbsDown style={{ color: 'black' }} /> : <FaRegThumbsDown />}
                    {downVotesBy.length}
                  </Button>
                </span>
              )
            }
            <span>
              <Button type="button" color="link" className="text-decoration-none text-black px-1 py-0">
                <FaRegCommentDots />
                { totalComments }
              </Button>
            </span>
            <span>
              Created By &nbsp;
              <b>{ user.name }</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVotes: PropTypes.func,
  downVotes: PropTypes.func,
};

ThreadItem.defaultProps = {
  upVotes: null,
  downVotes: null,
};

export { threadItemShape, userShape };

export default ThreadItem;
