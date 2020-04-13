import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchFilteredCourses, fetchFeaturedCourses } from '../../redux/actions/courses';
import './categories.styles.scss';


function Categories({ fetchFilteredCourses, fetchFeaturedCourses }) {
  const [activeTab, setToActive] = useState('featured');

  function setFilterValue(filterBy) {
    const payload = {
      keyword: filterBy
    }
    fetchFilteredCourses(payload);
  }

  function fetchfeatured() {
    setToActive('featured');
    return fetchFeaturedCourses();
  }

  function activateTab(tab) {
    setToActive(tab);
    return setFilterValue(tab);
  }

  return (
    <div className="categories-component">
      <div className="categories">
        <div className={activeTab === 'featured' ? "category active" : "category"}
          onClick={() => fetchfeatured()} >Featured courses</div>
        <div className={activeTab === 'advanced' ? "category active" : "category"}
          onClick={() => activateTab('advanced')} >Advanced</div>
        <div className={activeTab === 'programming' ? "category active" : "category"}
          onClick={() => activateTab('programming')} >programming</div>
        <div className={activeTab === 'beginner' ? "category active" : "category"}
          onClick={() => activateTab('beginner')} >beginner</div>
      </div>
    </div>
  )
}

const mapDispatchToprops = { fetchFilteredCourses, fetchFeaturedCourses }
export default connect(null, mapDispatchToprops)(Categories)