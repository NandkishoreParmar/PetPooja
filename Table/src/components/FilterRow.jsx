import React from 'react';

const FilterRow = ({ columns, onFilter }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      {columns.map(column => (
        <input
          key={column}
          type="text"
          placeholder={`Filter ${column}`}
          onChange={(e) => onFilter(column, e.target.value)}
          style={{
            marginRight: '10px',
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '3px'
          }}
        />
      ))}
    </div>
  );
};

export default FilterRow;

