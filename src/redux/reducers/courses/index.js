import {
  FETCH_FEATURED_COURSES,
  FETCH_FILTERED_COURSES,
  FETCH_COURSE,
  CLEAR,
  INITIALIZED,
  ERROR,
  COMPLETED
} from '../../constants';

const initialState = {
  courses: [],
  course: {},
  initialized: false,
  error: false,
  completed: false,
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case FETCH_FEATURED_COURSES:
      return {
        ...state,
        courses: [action.payload],
      }
    case FETCH_FILTERED_COURSES:
      return {
        ...state,
        courses: [action.payload],
      }
    case FETCH_COURSE:
      return {
        ...state,
        course: action.payload,
      }
    case INITIALIZED:
      return {
        ...state,
        initialized: true,
      }
    case ERROR:
      return {
        ...state,
        error: true,
        initialized: false,
      }
    case COMPLETED:
      return {
        ...state,
        completed: true,
        initialized: false,
      }
    case CLEAR:
      return {
        ...state,
        course: {},
        courses: [],
      }
    default:
      return state;
  }
}