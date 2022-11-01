
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
  
const BarGraph = () => {
    const data = [
        { name: '12:00 AM', Expected: 12, Actual: 1, z: 122 },
        { name: '', Expected: 22, Actual: 3, z: 73 },
        { name: '2:00', Expected: 13, Actual: 15, z: 32 },
        { name: '', Expected: 44, Actual: 35, z: 23 },
        { name: '4:00', Expected: 35, Actual: 45, z: 20 },
        { name: '', Expected: 62, Actual: 25, z: 29 },
        { name: '6:00', Expected: 37, Actual: 17, z: 61 },
        { name: '', Expected: 28, Actual: 32, z: 45 },
        { name: '8:00', Expected: 19, Actual: 43, z: 93 },
        { name: '', Expected: 19, Actual: 43, z: 93 },
        { name: '10:00', Expected: 19, Actual: 43, z: 93 },
        { name: '', Expected: 19, Actual: 43, z: 93 },
        { name: '12:00 PM', Expected: 19, Actual: 43, z: 93 },
        { name: '', Expected: 19, Actual: 43, z: 93 },
        { name: '2:00', Expected: 13, Actual: 15, z: 32 },
        { name: '', Expected: 44, Actual: 35, z: 23 },
        { name: '4:00', Expected: 35, Actual: 45, z: 20 },
        { name: '', Expected: 62, Actual: 25, z: 29 },
        { name: '6:00', Expected: 37, Actual: 17, z: 61 },
        { name: '', Expected: 28, Actual: 32, z: 45 },
        { name: '8:00', Expected: 19, Actual: 43, z: 93 },
        { name: '', Expected: 19, Actual: 43, z: 93 },
        { name: '10:00', Expected: 19, Actual: 43, z: 93 },
        { name: '', Expected: 19, Actual: 43, z: 93 },

    ];
  
    return (
        <BarChart width={1030} height={500} data={data} >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="Expected" stackId="a" fill="#0078F2" />
            <Bar dataKey="Actual" stackId="a" fill="#32F2B9" />
            
        </BarChart>
    );
}
  
export default BarGraph;