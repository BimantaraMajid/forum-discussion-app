import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import ThreadDetailComment from '../components/ThreadDetailComment';
import ThreadReplyInput from '../components/ThreadReplyInput';
import {
  asyncCommentThreadDetail,
  asyncDownVoteComment,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteComment, asyncNeutralVoteThreadDetail,
  asyncReceiveThreadDetail, asyncUpVoteComment, asyncUpVoteThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVotes = async (currentValue) => {
    if (!currentValue) {
      dispatch(asyncUpVoteThreadDetail(id));
    } else {
      dispatch(asyncNeutralVoteThreadDetail(id));
    }
  };

  const onDownVotes = (currentValue) => {
    if (!currentValue) {
      dispatch(asyncDownVoteThreadDetail(id));
    } else {
      dispatch(asyncNeutralVoteThreadDetail(id));
    }
  };

  const onUpVotesComment = async (currentValue, commentId) => {
    if (!currentValue) {
      dispatch(asyncUpVoteComment(id, commentId));
    } else {
      dispatch(asyncNeutralVoteComment(id, commentId));
    }
  };

  const onDownVotesComment = (currentValue, commentId) => {
    if (!currentValue) {
      dispatch(asyncDownVoteComment(id, commentId));
    } else {
      dispatch(asyncNeutralVoteComment(id, commentId));
    }
  };

  const onReplyThread = (content) => {
    dispatch(asyncCommentThreadDetail(id, content));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      <div className="talk-detail">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVotes={onUpVotes}
          downVotes={onDownVotes}
        />
        <ThreadReplyInput replyThread={onReplyThread} />
        <div className="comments-list">
          <h3>
            Comments (
            {threadDetail?.comments.length}
            )
          </h3>
          {
            threadDetail.comments?.map((comment) => (
              <ThreadDetailComment
                {...comment}
                authUser={authUser.id}
                key={comment.id}
                upVotesComment={onUpVotesComment}
                downVotesComment={onDownVotesComment}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
