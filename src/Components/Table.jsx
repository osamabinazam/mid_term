import React from 'react'
import sampleData from '../SampleData/sample'

function Table() {

    // Get data from ./SampleData/sample.js
    const sample_data = sampleData






  return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Occuption</th>
                    </tr>
                </thead>
                <tbody>
                    {sample_data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                            <td>{item.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Table