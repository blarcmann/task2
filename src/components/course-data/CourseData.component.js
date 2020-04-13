import React from 'react';
import './courseData.styles.scss';

export default function CourseData({ course }) {
  const tags = course.tags ? course.tags.split(',') : null;
  return (
    <div className="course-data">
      <h1 className="title">{course.title}</h1>
      <div className="others">
        {course.providerRatings
          ? <>
            <span className="rating">
              {new Array(Math.floor(course.providerRatings)).fill('xxxxx').map((item, index) => (
                <span className="star" key={index}>★</span>))}
            </span>
            <span className="spacing"> | </span>
          </>
          : ''}
        {course.provider
          ? <>
            <span>Provider: {course.provider}</span>
            <span className="spacing"> | </span>
          </>
          : ''}
        {course.level
          ? <>
            <span>level: {course.level}</span>
            <span className="spacing"> | </span>
          </>
          : ''}
        <span>Language: {course.language}</span>
      </div>
      <div className="banner-section">
        <h6>Tags</h6>
        {tags
          ? <div className="tags">
            {tags.map((tag, i) => (
              <span className="tag" key={i}>{tag}</span>
            ))}
          </div>
          : <span>n/A</span>}
      </div>
      <div className="banner-section">
        <h6>Level</h6>
        <div className="tags">
          <span>{course.level}</span>
        </div>
      </div>
      <div className="banner-section">
        <h6>Language</h6>
        <div className="tags">
          <span> {course.language}</span>
        </div>
      </div>
    </div>

  )
}
