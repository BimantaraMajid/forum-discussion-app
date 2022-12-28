import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa';
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
    <section className="thread-detail">
      <header>
        <img src={owner.avatar} alt={owner} />
        <div className="thread-detail__user-info">
          <p className="thread-detail__user-name">{title}</p>
          <p className="thread-detail__user-id">
            #
            {category}
          </p>
        </div>
      </header>
      <article>
        <p className="thread-detail__text" dangerouslySetInnerHTML={{ __html: body }} />
      </article>
      <footer>
        <div className="thread-detail__like">
          {
            upVotes && (
              <span>
                <button type="button" onClick={onUpVoteClick} className="upvote__button">
                  {isThreadUpVote ? <FaThumbsUp style={{ color: 'black' }} /> : <FaRegThumbsUp />}
                  {upVotesBy.length}
                </button>
              </span>
            )
          }
          {
            downVotes && (
              <span>
                <button type="button" onClick={onDownVoteClick} className="downvote__button">
                  {isThreadDownVote ? <FaThumbsDown style={{ color: 'black' }} /> : <FaRegThumbsDown />}
                  {downVotesBy.length}
                </button>
              </span>
            )
          }
          <span>
            Created By &nbsp;
            <b>{owner.name}</b>
          </span>
        </div>
        <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
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
