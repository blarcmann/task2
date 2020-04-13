import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchFilteredCourses } from '../../redux/actions/courses';
import './categories.styles.scss';


function Categories({ fetchFilteredCourses }) {
  const [activeTab, setToActive] = useState('');

  function setFilterValue(filterBy) {
    const payload = {
      keyword: filterBy
    }
    fetchFilteredCourses(payload);
  }

  function activateTab(tab) {
    setFilterValue(tab);
    return setToActive(tab)
  }

  return (
    <div className="categories-component">
      <div className="categories">
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

const mapDispatchToprops = { fetchFilteredCourses }
export default connect(null, mapDispatchToprops)(Categories)