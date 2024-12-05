'use client'

import React from 'react';
import CustomTable from './components/CustomTable';

export default function App() {
  const sampleData = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
    { id: 4, name: 'Alice Brown', age: 28, city: 'Houston' },
    { id: 5, name: 'Charlie Davis', age: 42, city: 'Phoenix' },
  ];

  const columns = ['id', 'name', 'age', 'city'];

  const styles = {
    header: {
      fontSize: '16px',
      backgroundColor: '#f3f4f6',
      color: '#111827',
    },
    body: {
      fontSize: '14px',
      backgroundColor: '#ffffff',
      color: '#374151',
    },
    alternateRow: {
      backgroundColor: '#f9fafb',
    },
  };

  return (
    <main style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>React Custom Table</h1>
      <CustomTable
        data={sampleData}
        columns={columns}
        styles={styles}
      />
    </main>
  );
}

