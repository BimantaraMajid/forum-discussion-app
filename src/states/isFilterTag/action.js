const ActionType = {
  RECEIVE_TAGS: 'RECEIVE_TAGS',
};

function receiveTagsActionCreator(tags) {
  return {
    type: ActionType.RECEIVE_TAGS,
    payload: {
      tags,
    },
  };
}

export {
  ActionType,
  receiveTagsActionCreator,
};
