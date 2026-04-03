import React from "react";

const Table = ({description}) => {
  return (
    <div>
      <p>This is the table</p>

      <table>
        <thead>
          <tr>
            <th>description</th>

            <th>quantity</th>

            <th>price</th>

            <th>amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{description}</td>

            <td>5</td>

            <td>20000</td>

            <td>60,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
