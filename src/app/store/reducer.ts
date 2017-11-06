import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { FILTER_COURSES } from './actions';

const courses = [
  {
    "id": 1,
    "name": "Building Apps with React",
    "topic": "ReactJS"
  },
  {
    "id": 2,
    "name": "Building Apps with Angular",
    "topic": "AngularJS"
  },
  {
    "id":3,
    "name": "Building Apps with Angular and Redux",
    "topic": "Angular and Redux"
  }
];

const initialState: IAppState = {
  courses: courses,
  filteredCourses: courses
};

function filterCourses(state, action) : IAppState {
  return Object.assign({}, state, {
    filterredCourses: state.courses.filter(c => c.name.toLowerCase()
                        .indexOf(action.searchText.toLowerCase()) > -1)
  });
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    default:
      return state;
  }
}