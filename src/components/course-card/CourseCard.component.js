import React from 'react';
import './courseCard.styles.scss';

export default function CourseCard({ course }) {
  const tags = course.quzeTags ? course.quzeTags.split(',') : null;
  return (
    <div className="course-card mt-3">
      <div className="card-title">About</div>
      <h3 className="mb-3">Course description</h3>
      <p className="mb-3">{course.shortDescription}</p>
      {tags
        ? <>
          <h3 className="mb-3">Quze tags</h3>
          <ul className="d-block mb-3">
            {tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        </>
        : ''}
      <h3 className="mb-3">Quze category</h3>
      <ul className="d-block mb-3">
        <li>{course.quzeCategory ? course.quzeCategory : 'not available'}</li>
      </ul>
      {course.author
        ? <>
          <h3 className="mb-1">Author:</h3>
          <p className="mb-3">{course.author}</p>
        </>
        : ''}
    </div>
  )
}
