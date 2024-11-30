import React from "react";
import "./Table.css";
// Define the component
const Table = ({ rows }) => {
  return (
    <div className="table-container">
      <table className="recycling-table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Description</th>
            <th>Website Link</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.location}</td>
              <td>{row.description}</td>
              <td>
                <a href={row.link} target="_blank" rel="noopener noreferrer">
                  {row.linkText}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
