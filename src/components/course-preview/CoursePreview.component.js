import React from 'react';
import './coursePreview.styles.scss';
import Loader from '../loader/Loader.component';

export default function CoursePreview({ preview, course }) {
  if (!course || !course.title) return <Loader loading={true} />
  const imgUrl = course.imgUrl !== null ? course.imgUrl
    : 'https://pluralsight.imgix.net/course-images/aws-developer-getting-started-v1.jpg';
  return (
    <div className="course-preview">
      <div className={preview === 'noContent' ? 'preview-img' : "preview-img content"}
        style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className={preview === 'noContent' ? "hide" : "prev-content"}>
          <button><img src={require('../../assets/images/play.svg')} alt="" /></button>
          <span>Click to review course</span>
        </div>
      </div>
      <a href={`${course.url}`} target="_blank" rel="noopener noreferrer">
        <button className="primary">
          Check out on {course.provider}
        </button>
      </a>
    </div>
  )
}
