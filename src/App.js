import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './pages/search/Search';
import CourseDetails from './pages/course-details/CourseDetails';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/course/:title/:id" component={CourseDetails} />
        <Route path="**" component={Search} />
      </Switch>
    </>
  );
}

export default App;
