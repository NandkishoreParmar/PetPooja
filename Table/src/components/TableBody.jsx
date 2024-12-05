import React from 'react';

const TableBody = ({ data, columns, styles }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? styles.body.backgroundColor : styles.alternateRow.backgroundColor }}>
          {columns.map(column => (
            <td
              key={column}
              style={{
                ...styles.body,
                padding: '10px',
                borderBottom: '1px solid #ddd'
              }}
            >
              {row[column]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

