import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa';
import { postedAt } from '../utils/formatDate';
import { userShape } from './ThreadDetail';

function ThreadDetailComment({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVotesComment,
  downVotesComment,
  authUser,
}) {
  const isCommentUpVote = upVotesBy.includes(authUser);
  const isCommentDownVote = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVotesComment(isCommentUpVote, id);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVotesComment(isCommentDownVote, id);
  };

  return (
    <div className="comment-item">
      <header className="comment-item__header">
        <div className="comment-item__owner-info">
          <img src={owner.avatar} alt="Dimas Saputra" />
          <p>{owner.name}</p>
        </div>
        <p className="posted-at">{postedAt(createdAt)}</p>
      </header>
      <p dangerouslySetInnerHTML={{ __html: content }} />
      <footer>
        {
          upVotesComment && (
          <button type="button" onClick={onUpVoteClick} className="comment-upvote__button">
            {isCommentUpVote ? <FaThumbsUp style={{ color: 'black' }} /> : <FaRegThumbsUp />}
            {upVotesBy.length}
          </button>
          )
        }
        {
          downVotesComment && (
          <button type="button" onClick={onDownVoteClick} className="comment-downvote__button">
            {isCommentDownVote ? <FaThumbsDown style={{ color: 'black' }} /> : <FaRegThumbsDown />}
            {downVotesBy.length}
          </button>
          )
        }
      </footer>
    </div>
  );
}

ThreadDetailComment.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesComment: PropTypes.func.isRequired,
  downVotesComment: PropTypes.func.isRequired,
};

export default ThreadDetailComment;
