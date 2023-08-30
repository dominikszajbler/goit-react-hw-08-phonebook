import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import 'bulma/css/bulma.min.css'; 
import './Filter.css';
export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="field has-addons filterContainer">
      <div className="control">
        <label className="label filterLabel">Find:</label>
        <input
          className="input filterInput"
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search by name or number"
        />
      </div>
    </div>
  );
};

export default Filter;