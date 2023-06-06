import React, { useState } from 'react';
import { parseISO, compareAsc, compareDesc } from 'date-fns'; 
const data = [
  {
    company: 'Company A',
    startDate: '2022-01-01',
    endDate: '2022-06-30',
    revenue: 5000,
    status: 'Active',
  },
  {
    company: 'Company B',
    startDate: '2021-07-01',
    endDate: '2022-12-31',
    revenue: 8000,
    status: 'Inactive',
  },
  {
    company: 'Company C',
    startDate: '2021-07-01',
    endDate: '2022-12-31',
    revenue: 8000,
    status: 'Inactive',
  },
  {
    company: 'Company D',
    startDate: '2021-07-01',
    endDate: '2022-12-31',
    revenue: 8000,
    status: 'Inactive',
  },
  {
    company: 'Company E',
    startDate: '2021-07-01',
    endDate: '2022-12-31',
    revenue: 8000,
    status: 'Active',
  },
  {
    company: 'Company F',
    startDate: '2021-07-01',
    endDate: '2022-12-31',
    revenue: 8000,
    status: 'Active',
  },
  
  
];

const Table = () => {
  const [startDateSort, setStartDateSort] = useState(null);
  const [endDateSort, setEndDateSort] = useState(null);

  const handleStartDateSort = () => {
    setStartDateSort(startDateSort === 'asc' ? 'desc' : 'asc');
    setEndDateSort(null);
  };

  const handleEndDateSort = () => {
    setEndDateSort(endDateSort === 'asc' ? 'desc' : 'asc');
    setStartDateSort(null);
  };

  const sortedData = [...data]; 

  if (startDateSort === 'asc') {
    sortedData.sort((a, b) =>
      compareAsc(parseISO(a.startDate), parseISO(b.startDate))
    );
  } else if (startDateSort === 'desc') {
    sortedData.sort((a, b) =>
      compareDesc(parseISO(a.startDate), parseISO(b.startDate))
    );
  } else if (endDateSort === 'asc') {
    sortedData.sort((a, b) =>
      compareAsc(parseISO(a.endDate), parseISO(b.endDate))
    );
  } else if (endDateSort === 'desc') {
    sortedData.sort((a, b) =>
      compareDesc(parseISO(a.endDate), parseISO(b.endDate))
    );
  }

  return (
    <div className="overflow-x-auto">
        <table className="table">
      <thead>
        <tr className='bg-[#9e9dd8] text-white'>
          <th>Company</th>
          <th>
            Start Date{' '}
            <button
              className="ml-2 focus:outline-none"
              onClick={handleStartDateSort}
            >
              {startDateSort === 'asc' ? '↑' : '↓'}
            </button>
          </th>
          <th>
            End Date{' '}
            <button
              className="ml-2 focus:outline-none"
              onClick={handleEndDateSort}
            >
              {endDateSort === 'asc' ? '↑' : '↓'}
            </button>
          </th>
          <th>Revenue</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr className='even:bg-[#e2e2ff]' key={index}>
            <td>{item.company}</td>
            <td>{item.startDate}</td>
            <td>{item.endDate}</td>
            <td>{item.revenue}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
