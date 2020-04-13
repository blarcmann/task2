import React, { useState } from 'react';
import { connect } from 'react-redux';
import './noResult.styles.scss';
import { fetchFilteredCourses } from '../../redux/actions/courses';

function NoResult({ fetchFilteredCourses }) {
  const [filter, setFilter] = useState('');
  console.log(filter);
  const options = [
    'Hardware For Comptia A 220 901',
    'Microservices Architecture',
    '19k M1 Armor Crewman'
  ]

  function setFilterValue(filterBy) {
    const payload = {
      keyword: filterBy
    }
    setFilter(filterBy);
    fetchFilteredCourses(payload);
  }

  return (
    <div className="no-result mt-5 ml-3">
      <h2>No result was found</h2>
      <p className="options">Try there keywords</p>
      <ul>
        {options.map((option, i) => (
          <li key={i}>
            <span className="keyword" onClick={() => setFilterValue(option)}>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapDispatchToProps = { fetchFilteredCourses }

export default connect(null, mapDispatchToProps)(NoResult)