import {
  FETCH_FEATURED_COURSES,
  FETCH_FILTERED_COURSES,
  FETCH_COURSE,
  CLEAR,
  INITIALIZED,
  ERROR,
  COMPLETED
} from '../constants';
import axios from 'axios';
const url = 'http://staging-api.quze.co/search/intern-test/_search';

export function fetchFeaturedCourses() {
  return dispatch => {
    dispatch(initialized());
    axios.post(`${url}`, {})
      .then(response => {
        if (response.success === false) {
          return console.log(response, 'not successful');
        }
        const featured = response.data.hits.hits;
        dispatch(featuredCourses(featured));
        dispatch(completed())
      })
      .catch(error => {
        dispatch(errorOccured())
        console.log('catch error register', error);
        throw (error);
      })
  }
}

export function fetchCourse(id) {
  return dispatch => {
    dispatch(clear());
    dispatch(initialized());
    axios.post(`${url}`, {
      "size": 1,
      "query": {
        "match": {
          "courseId": id
        }
      }
    })
      .then(response => {
        if (response.success === false) {
          return console.log(response, 'not successful');
        }
        let c = response.data.hits.hits;
        console.log(c);
        c.forEach(course => {
          if (Number(course._id) === Number(id)) {
            console.log(course);
            dispatch(courseDetails(course));
            dispatch(completed());
          }
        })
      })
      .catch(error => {
        console.log('catch error register', error);
        dispatch(errorOccured());
        throw (error);
      })
  }
}

export function fetchFilteredCourses(payload) {
  return dispatch => {
    dispatch(initialized());
    axios.post(`${url}`, {
      "query": {
        "match": {
          "title": payload.keyword
        }
      }
    })
      .then(response => {
        if (response.success === false) {
          return console.log(response, 'not successful');
        }
        let allCourses = response.data.hits.hits;
        dispatch(filteredCourses(allCourses));
        dispatch(completed());
      })
      .catch(error => {
        console.log('catch error register', error);
        dispatch(errorOccured());
        throw (error);
      })
  }
}

// function filterCourse(courses, keyword) {
//   let filteredCourses = [];
//   if (keyword === 'featured') {
//     return filteredCourses = courses.splice(1, 12);
//   }
//   let keys = Object.keys(courses[0]);
//   keys.forEach(key => {
//     // eslint-disable-next-line
//     courses.forEach((course = course.toLowerCase()) => {
//       let durr = course[key];
//       if (typeof durr === 'string') {
//         durr = durr.toLocaleLowerCase();
//       }
//       if (typeof keyword === 'string') {
//         keyword = keyword.toLocaleLowerCase();
//       }
//       if (durr === keyword) {
//         filteredCourses.push(course);
//       }
//     })
//   });
//   console.log('filtered bitch :|', filteredCourses);
//   return filteredCourses;
// }


function filteredCourses(payload) {
  return {
    type: FETCH_FILTERED_COURSES,
    payload
  }
}

function featuredCourses(payload) {
  return {
    type: FETCH_FEATURED_COURSES,
    payload
  }
}

function courseDetails(payload) {
  return {
    type: FETCH_COURSE,
    payload
  }
}

function clear() {
  return {
    type: CLEAR,
    payload: ''
  }
}

function completed() {
  return {
    type: COMPLETED,
    payload: ''
  }
}

function initialized() {
  return {
    type: INITIALIZED,
    payload: ''
  }
}


function errorOccured() {
  return {
    type: ERROR,
    payload: ''
  }
}



// "size": 1,
//   "query": {
//   "match": {
//     "title": "Creating A Mobile Puzzle Game In Unity"
//   }
// }