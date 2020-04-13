import React from 'react';
import { Link } from 'react-router-dom';
import './course.styles.scss';

export default function Course({ course }) {
  const imgUrl = course.imgUrl !== null ? course.imgUrl : 'https://pluralsight.imgix.net/course-images/aws-developer-getting-started-v1.jpg';
  return (
    <div className="col-lg-3 col-md-6">
      <div className="course">
        <Link to={`/course/${course.title}/${course.courseId}`}>
          <div className="course-img" style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className="data">
              <div className="user">
                <img src={require('../../assets/images/user.svg')} alt="#" />
                <span>{course.author ? course.author : 'Not available'}</span>
              </div>
              <div className="rating">
                {new Array(Math.floor(course.providerRatings)).fill('xxxxx').map((item, index) => (<span className="star" key={index}>★</span>))}
              </div>
            </div>
          </div>
          <div className="course-details">
            <h5>{course.title}</h5>
            <h6>{course.provider}</h6>
          </div>
        </Link>
      </div>
    </div>
  )
}
