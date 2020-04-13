import React from 'react';
import './loader.styles.scss';

export default function Loader({ loading }) {
  return (
    <>
      <div className={loading ? "loader-cover" : 'hide'}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  )
}
