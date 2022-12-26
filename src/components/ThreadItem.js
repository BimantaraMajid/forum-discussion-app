import React from 'react';
import PropTypes from 'prop-types';
import {
  FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils/formatDate';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
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
    <div className="thread-item">
      <div className="thread-item__user-photo">
        <img src={user.avatar} alt="user" />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__title">
              <div role="button" tabIndex={0} onClick={onThreadClick} onKeyDown={onThreadPress}>
                { title }
              </div>
            </p>
            <p className="thread-item__body" dangerouslySetInnerHTML={{ __html: bodySubstring(body) }} />
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="thread-item__tag">
            #
            { category }
          </p>
        </article>
        <div className="thread-item__likes">
          {
            upVotes && (
              <span>
                <button type="button" aria-label="like" onClick={onUpVoteClick}>
                  {isThreadUpVote ? <FaThumbsUp style={{ color: 'black' }} /> : <FaRegThumbsUp />}
                </button>
                {upVotesBy.length}
              </span>
            )
          }
          {
            downVotes && (
              <span>
                <button type="button" aria-label="like" onClick={onDownVoteClick}>
                  {isThreadDownVote ? <FaThumbsDown style={{ color: 'black' }} /> : <FaRegThumbsDown />}
                </button>
                {downVotesBy.length}
              </span>
            )
          }
          <span>
            Dibuat Oleh &nbsp;
            <b>{ user.name }</b>
          </span>
        </div>
      </div>
    </div>
  );
}
/* <div className="thread-item__user-photo">
  <img src={user.photo} alt={user} />
</div>
<div className="thread-item__detail">
  <header>
    <div className="thread-item__user-info">
      <p className="thread-item__title">{user.name}</p>
      <p className="thread-item__body">
        @
        {user.id}
      </p>
    </div>
    <p className="thread-item__created-at">{postedAt(createdAt)}</p>
  </header>
  <article>
    <p className="thread-item__tag">{text}</p>
  </article>
  {
    like && (
      <div className="thread-item__likes">
        <p>
          <button type="button" aria-label="like" onClick={onLikeClick}>
            { isThreadLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
          </button>
          {' '}
          {likes.length}
        </p>
      </div>
    )
  }
</div>
<div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick}
onKeyDown={onThreadPress}>
  go to thread
</div> */

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
  ownerId: PropTypes.string.isRequired,
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

export { threadItemShape };

export default ThreadItem;
