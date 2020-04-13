import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumb.styles.scss';

export default function Breadcrumb({ url }) {
  return (
    <nav className="bread-crumb">
      <ul>
        <li> <Link to='/'>Home</Link></li>
        <li>{url}</li>
      </ul>
    </nav>
  )
}
