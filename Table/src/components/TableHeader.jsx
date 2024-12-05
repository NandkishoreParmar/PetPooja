import React from 'react';

const TableHeader = ({ columns, styles, sortColumn, sortDirection, onSort }) => {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            key={column}
            onClick={() => onSort(column)}
            style={{
              ...styles.header,
              cursor: 'pointer',
              padding: '10px',
              textAlign: 'left',
              borderBottom: '2px solid #ddd'
            }}
          >
            {column}
            {sortColumn === column && (
              <span style={{ marginLeft: '5px' }}>
                {sortDirection === 'asc' ? '▲' : '▼'}
              </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

