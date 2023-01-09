import React from 'react';
const Filter = () => {
  return (
    <div className="filter-btn">
      <a id="one" href="#">
        <i className="fa fa-check-circle icon-check"></i>
      </a>
      <a id="two" href="#">
        <i className="fa fa-sort-alpha-down icon-down"></i>
      </a>
      <a id="three" href="#">
        <i className="fa fa-sort-alpha-up icon-up"></i>
      </a>
      <a id="all" href="#">
        <i className="fa fa-clock icon-all"></i>
      </a>
      <span className="toggle-btn">
        <i className="fa fa-filter"></i>
        <i className="fa fa-times"></i>
      </span>
    </div>
  );
};

export default Filter;