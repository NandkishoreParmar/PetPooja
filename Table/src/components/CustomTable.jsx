import React, { useState, useMemo } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import FilterRow from './FilterRow';

const CustomTable = ({ data, columns, styles }) => {
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filters, setFilters] = useState({});

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleFilter = (column, value) => {
    setFilters(prev => ({ ...prev, [column]: value }));
  };

  const processedData = useMemo(() => {
    let result = [...data];

    Object.entries(filters).forEach(([column, value]) => {
      result = result.filter(item => 
        String(item[column]).toLowerCase().includes(String(value).toLowerCase())
      );
    });

    if (sortColumn) {
      result.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, filters, sortColumn, sortDirection]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <FilterRow 
        columns={columns} 
        onFilter={handleFilter} 
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <TableHeader 
          columns={columns} 
          styles={styles} 
          sortColumn={sortColumn} 
          sortDirection={sortDirection} 
          onSort={handleSort} 
        />
        <TableBody 
          data={processedData} 
          columns={columns} 
          styles={styles} 
        />
      </table>
    </div>
  );
};

export default CustomTable;

