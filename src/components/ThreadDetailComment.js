import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa';
import { Button } from 'reactstrap';
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
    <div>
      <header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={owner.avatar}
            className="rounded-circle me-2"
            alt="Dimas Saputra"
            width="30"
          />
          {owner.name}
        </div>
        <small>{postedAt(createdAt)}</small>
      </header>
      <p className="ps-2 pt-2" dangerouslySetInnerHTML={{ __html: content }} />
      <footer>
        {
          upVotesComment && (
          <Button
            className="text-decoration-none text-black px-2 py-0"
            color="link"
            type="button"
            onClick={onUpVoteClick}
          >
            {isCommentUpVote ? <FaThumbsUp style={{ color: 'black' }} /> : <FaRegThumbsUp />}
            {upVotesBy.length}
          </Button>
          )
        }
        {
          downVotesComment && (
          <Button
            className="text-decoration-none text-black px-2 py-0"
            color="link"
            type="button"
            onClick={onDownVoteClick}
          >
            {isCommentDownVote ? <FaThumbsDown style={{ color: 'black' }} /> : <FaRegThumbsDown />}
            {downVotesBy.length}
          </Button>
          )
        }
      </footer>
      <hr />
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
