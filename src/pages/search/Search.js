import React, { Component } from 'react';
import { connect } from 'react-redux';
import './search.styles.scss';
import { fetchFeaturedCourses, fetchFilteredCourses } from '../../redux/actions/courses';

import FeaturedCourses from '../../components/featured-courses/FeaturedCourses.component';
import NoResult from '../../components/no-result/NoResult.component';

export class Search extends Component {

  state = {
    q: ''
  }

  componentDidMount() {
    this.props.fetchFeaturedCourses();
  }


  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      keyword: this.state.q
    }
    this.props.fetchFilteredCourses(payload)
  }



  render() {
    const { courses } = this.props;
    console.log('jhdfjjdfj', courses)
    return (
      <>
        <div className="search-page">
          <div className="banner">
            <div className="content">
              <h2>Learn New Skills, Get Ahead</h2>
              <div className="search">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Search for courses" value={this.state.q}
                    onChange={e => this.handleChange('q', e.target.value)}
                  />
                  <button onClick={this.handleSubmit}>
                    <img src={require('../../assets/images/search.png')} alt="#" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="container section-container">
            <div className="row">
              {courses.length && courses[0].length > 0
                ? <FeaturedCourses courses={courses} />
                : <NoResult />}
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses.courses
})

const mapDispatchToProps = { fetchFeaturedCourses, fetchFilteredCourses }

export default connect(mapStateToProps, mapDispatchToProps)(Search)


  // < img src = "https://i.ibb.co/MS3X3MM/search-bg.jpg" alt = "search-bg" border = "0" >