import React, { Component } from 'react';
import { connect } from 'react-redux';
import './courseDetails.styles.scss';
import { fetchCourse } from '../../redux/actions/courses';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb.component';
import CoursePreview from '../../components/course-preview/CoursePreview.component';
import CourseCard from '../../components/course-card/CourseCard.component';
import Loader from '../../components/loader/Loader.component';
import CourseData from '../../components/course-data/CourseData.component';

export class CourseDetails extends Component {

  componentDidMount() {
    const id = this.props.match.params['id'];
    this.props.fetchCourse(id);
  }

  render() {
    const { course } = this.props;
    console.log(course);
    const imgUrl = course._source && course._source.imgUrl !== null ? course._source.imgUrl
      : 'https://pluralsight.imgix.net/course-images/aws-developer-getting-started-v1.jpg';
    if (!course._source || !course._source.title) return <Loader loading={true} />
    return (
      <div className="course-description">
        <div className="course-banner" style={{ backgroundImage: `url(${imgUrl})` }}>
          <div className="container section-container pb-4">
            <div className="row">
              <div className="col-lg-8 mb-3 mb-lg-0">
                <CourseData course={course._source} />
              </div>
              <div className="col-lg-4">
                <CoursePreview course={course._source} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="course-content mt-4">
            <Breadcrumb url={course._source.title} />
            <div className="row">
              <div className="col-lg-8">
                <CourseCard course={course._source} />
              </div>
              <div className="col-lg-4">
                <div className="share mt-3">
                  <CoursePreview preview="noContent" course={course._source} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  course: state.courses.course
})

const mapDispatchToProps = { fetchCourse }

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails)
