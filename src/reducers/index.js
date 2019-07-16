import { INCREMENT, DECREMENT } from '../actions';
let newCount = 0

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // Action Count to increase by 1
      newCount = parseInt(action.payload.count) + 1
      return { 
        ...state,
        count: newCount
      }
    case DECREMENT:
      // Action Count to decrease by 1
      newCount = parseInt(action.payload.count) - 1
      return { 
        ...state,
        count: newCount
      }
    default:
      return state;
  }
};
