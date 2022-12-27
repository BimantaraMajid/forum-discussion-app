import { ActionType } from './action';

function isFilterReducer(tags = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TAGS:
      return action.payload.tags;
    default:
      return tags;
  }
}

export default isFilterReducer;
