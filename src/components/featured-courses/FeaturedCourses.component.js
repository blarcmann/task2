import React from 'react';
import './featuredCourses.styles.scss';

import Course from '../course/Course.component';
import Categories from '../categories/Categories.component';

export default function FeaturedCourses({ courses }) {
  return (
    <div className="container">
      <div className="courses-component">
        <h1>Featured courses</h1>
        <section className="courses">
          <Categories />
          <div className="all-courses">
            <div className="row">
              {courses[0].map((course) => (
                <Course course={course._source} key={course._id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
